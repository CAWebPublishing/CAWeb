( function( $ ) {

	"use strict";

	// Extend etCorePortability since it is declared by localization.
	window.etCore.portability = $.extend( etCorePortability, {

		cancelled: false,

		boot: function( $instance ) {
			var $this = this;
			var $customizeHeader = $( '#customize-header-actions' );
			var $customizePortability = $( '.et-core-customize-controls-close' );

			// Moved portability button into customizer header
			if ( $customizeHeader.length && $customizePortability.length ) {
				$customizeHeader.append( $customizePortability );
			}

			$( '[data-et-core-portability]' ).each( function() {
				$this.listen( $( this ) );
			} );

			// Release unecessary cache.
			etCorePortability = null;
		},

		listen: function( $el ) {
			var $this = this;

			$el.find('[data-et-core-portability-export]').on('click', function(e){
				e.preventDefault();

				if ( ! $this.actionsDisabled() ) {
					$this.disableActions();
					$this.export();
				}
			});


			$el.find( '.et-core-portability-export-form input[type="text"]' ).on( 'keydown', function( e ) {
				if ( 13 === e.keyCode ) {
					e.preventDefault();
					$el.find('[data-et-core-portability-export]').trigger('click');
				}
			} );

			// Portability populate import.
			$el.find( '.et-core-portability-import-form input[type="file"]' ).on( 'change', function( e ) {
				$this.populateImport( $( this ).get( 0 ).files[0] );
			} );

			$el.find('.et-core-portability-import').on('click', function(e){
				e.preventDefault();

				if ( ! $this.actionsDisabled() ) {
					$this.disableActions();
					$this.import();
				}
			});

			// Trigger file window.
			$el.find('.et-core-portability-import-form button').on('click', function(e){
				e.preventDefault();
				$this.instance( 'input[type="file"]' ).trigger( 'click' );
			});

			// Cancel request.
			$el.find('[data-et-core-portability-cancel]').on('click', function(e){
				e.preventDefault();
				$this.cancel();
			});
		},

		validateImportFile: function( file, noOutput ) {
			if ( undefined !== file && 'undefined' != typeof file.name  && 'undefined' != typeof file.type && 'json' == file.name.split( '.' ).slice( -1 )[0] ) {

				return true;
			}

			if ( ! noOutput ) {
				etCore.modalContent( '<p>' + this.text.invalideFile + '</p>', false, 3000, '#et-core-portability-import' );
			}

			this.enableActions();

			return false;
		},

		populateImport: function( file ) {
			if ( ! this.validateImportFile( file ) ) {
				return;
			}

			$( '.et-core-portability-import-placeholder' ).text( file.name );
		},

		import: function(noBackup) {
			var $this = this;
			var file = $this.instance('input[type="file"]').get(0).files[0];

			if (undefined === window.FormData) {
				etCore.modalContent('<p>' + this.text.browserSupport + '</p>', false, 3000, '#et-core-portability-import');

				$this.enableActions();

				return;
			}

			if (!$this.validateImportFile(file)) {
				return;
			}

			$this.addProgressBar( $this.text.importing );

			// Export Backup if set.
			if ( $this.instance( '[name="et-core-portability-import-backup"]' ).is( ':checked' ) && ! noBackup ) {
				$this.export( true );

				$( $this ).on( 'exported', function() {
					$this.import( true );
				} );

				return;
			}

			var includeGlobalPresets = $this.instance('[name="et-core-portability-import-include-global-presets"]').is(':checked');

			$this.ajaxAction( {
				action: 'et_core_portability_import',
				file: file,
				include_global_presets: includeGlobalPresets,
				nonce: $this.nonces.import
			}, function( response ) {
				etCore.modalContent( '<div class="et-core-loader et-core-loader-success"></div>', false, 3000, '#et-core-portability-import' );
				$this.toggleCancel();

				$( document ).delay( 3000 ).queue( function() {
					etCore.modalContent( '<div class="et-core-loader"></div>', false, false, '#et-core-portability-import' );

					$( this ).dequeue().delay( 2000 ).queue( function() {
						// Save post content for individual content.
						if ( 'undefined' !== typeof response.data.postContent ) {
							var save = $( '#save-action #save-post' );

							if ( save.length === 0 ) {
								save = $( '#publishing-action input[type="submit"]' );
							}

							if ( 'undefined' !== typeof window.tinyMCE && window.tinyMCE.get( 'content' ) && ! window.tinyMCE.get( 'content' ).isHidden() ) {
								var editor = window.tinyMCE.get( 'content' );

								editor.setContent(response.data.postContent.trim(), { format: 'html' });
							} else {
								$('#content').val(response.data.postContent.trim());
							}

							save.trigger( 'click' );

							window.onbeforeunload = function() {
								$( 'body' ).fadeOut( 500 );
							}
						} else {
							$( 'body' ).fadeOut( 500, function() {
								// Remove confirmation popup before relocation.
								$( window ).off( 'beforeunload' );

								window.location = window.location.href.replace(/reset\=true\&|\&reset\=true/,'');
							} )
						}
					} );
				} );
			}, true );
		},

		export: function( backup ) {
			var $this = this,
				progressBarMessages = backup ? $this.text.backuping : $this.text.exporting;

			$this.save( function() {
				var posts = {},
					content = false;

				// Include selected posts.
				if ( $this.instance( '[name="et-core-portability-posts"]' ).is( ':checked' ) ) {
					$( '#posts-filter [name="post[]"]:checked:enabled' ).each( function() {
						posts[this.id] = this.value;
					} );

					// do not proceed and display error message if no Items selected
					if ( $.isEmptyObject( posts ) ) {
						etCore.modalContent( '<div class="et-core-loader et-core-loader-fail"></div><h3>' + $this.text.noItemsSelected + '</h3>', false, true, '#' + $this.instance( '.ui-tabs-panel:visible' ).attr( 'id' ) );

						$this.enableActions();

						return;
					}
				}

				$this.addProgressBar( progressBarMessages );

				// Get post layout.
				if ( 'undefined' !== typeof window.tinyMCE && window.tinyMCE.get( 'content' ) && ! window.tinyMCE.get( 'content' ).isHidden() ) {
					content = window.tinyMCE.get( 'content' ).getContent();
				} else if ( $( 'textarea#content' ).length > 0 ) {
					content = $( 'textarea#content' ).val();
				}

				if ( false !== content ) {
					content = content.replace( /^([^\[]*){1}/, '' );
					content = content.replace( /([^\]]*)$/, '' );
				}

				var applyGlobalPresets = $this.instance( '[name="et-core-portability-apply-presets"]' ).is( ':checked' );

				$this.ajaxAction( {
					action: 'et_core_portability_export',
					content: content,
					selection: $.isEmptyObject( posts ) ? false : JSON.stringify( posts ),
					apply_global_presets: applyGlobalPresets,
					nonce: $this.nonces.export
				}, function( response ) {
					var time = ' ' + new Date().toJSON().replace( 'T', ' ' ).replace( ':', 'h' ).substring( 0, 16 ),
						downloadURL = $this.instance( '[data-et-core-portability-export]' ).data( 'et-core-portability-export' ),
						query = {
							'timestamp': response.data.timestamp,
							'name': encodeURIComponent( $this.instance( '.et-core-portability-export-form input' ).val() + ( backup ? time : '' ) ),
						};

					$.each( query, function( key, value ) {
						if ( value ) {
							downloadURL = downloadURL + '&' + key + '=' + value;
						}
					} );

					// Remove confirmation popup before relocation.
					$( window ).off( 'beforeunload' );

					window.location.assign( encodeURI( downloadURL ) );

					if ( ! backup ) {
						etCore.modalContent( '<div class="et-core-loader et-core-loader-success"></div>', false, 3000, '#et-core-portability-export' );
						$this.toggleCancel();
					}

					$( $this ).trigger( 'exported' );
				} );
			} );
		},

		exportFB: function( exportUrl, postId, content, fileName, importFile, page, timestamp, progress = 0, estimation = 1 ) {
			var $this = this;

			// Trigger event which updates VB-UI's progress bar
			window.et_fb_export_progress   = progress;
			window.et_fb_export_estimation = estimation;

			var exportEvent = document.createEvent('Event');
			exportEvent.initEvent('et_fb_layout_export_in_progress', true, true);
			window.dispatchEvent(exportEvent);

			page = typeof page === 'undefined' ? 1 : page;

			$.ajax( {
				type: 'POST',
				url: etCore.ajaxurl,
				dataType: 'json',
				data: {
					action: 'et_core_portability_export',
					content: content.shortcode,
					global_presets: content.global_presets,
					global_colors: content.global_colors,
					timestamp: timestamp !== undefined ? timestamp : 0,
					nonce: $this.nonces.export,
					post: postId,
					context: 'et_builder',
					page: page,
				},
				success: function( response ) {
					var errorEvent = document.createEvent( 'Event' );

					errorEvent.initEvent( 'et_fb_layout_export_error', true, true );

					// The error is unknown but most of the time it would be cased by the server max size being exceeded.
					if ( 'string' === typeof response && '0' === response ) {
						window.et_fb_export_layout_message = $this.text.maxSizeExceeded;
						window.dispatchEvent( errorEvent );

						return;
					}
					// Memory size set on server is exhausted.
					else if ( 'string' === typeof response && response.toLowerCase().indexOf( 'memory size' ) >= 0 ) {
						window.et_fb_export_layout_message = $this.text.memoryExhausted;
						window.dispatchEvent( errorEvent );
						return;
					}
					// Paginate.
					else if ( 'undefined' !== typeof response.page ) {
						if ( $this.cancelled ) {
							return;
						}

						// Update progress bar
						var updatedProgress = Math.ceil((response.page * 100) / response.total_pages);
						var updatedEstimation = Math.ceil(((response.total_pages - response.page) * 6) / 60);

						// If progress param isn't empty, updated progress should continue from it
						// because before exportFB(), shortcode should've been prepared via another
						// ajax request first
						if (0 < progress) {
							const remainingProgress = (100 - progress) / 100;
							updatedProgress = (updatedProgress * remainingProgress) + progress;
						}

						// Update global variables
						window.et_fb_export_progress   = updatedProgress;
						window.et_fb_export_estimation = updatedEstimation;

						// Dispatch event to trigger UI update
						window.dispatchEvent(exportEvent);

						return $this.exportFB(
							exportUrl,
							postId,
							content,
							fileName,
							importFile,
							(page + 1),
							response.timestamp,
							updatedProgress,
							updatedEstimation
						);
					} else if ( 'undefined' !== typeof response.data && 'undefined' !== typeof response.data.message ) {
						window.et_fb_export_layout_message = $this.text[response.data.message];
						window.dispatchEvent( errorEvent );
						return;
					}

					var time = ' ' + new Date().toJSON().replace( 'T', ' ' ).replace( ':', 'h' ).substring( 0, 16 ),
						downloadURL = exportUrl,
						query = {
							'timestamp': response.data.timestamp,
							'name': '' !== fileName ? fileName : encodeURIComponent( time ),
						};

					$.each( query, function( key, value ) {
						if ( value ) {
							downloadURL = downloadURL + '&' + key + '=' + value;
						}
					} );

					// Remove confirmation popup before relocation.
					$( window ).off( 'beforeunload' );

					// Update progress bar's global variables
					window.et_fb_export_progress = 100;
					window.et_fb_export_estimation = 0;

					// Dispatch event to trigger UI update
					window.dispatchEvent(exportEvent);
					window.location.assign( encodeURI( downloadURL ) );

					// perform import if needed
					if ( typeof importFile !== 'undefined' ) {
						$this.importFB( importFile, postId );
					} else {
						var event = document.createEvent( 'Event' );

						event.initEvent( 'et_fb_layout_export_finished', true, true );

						// trigger event to communicate with FB
						window.dispatchEvent( event );
					}
				}
			} );
		},

		importFB: function(file, postId, options) {
			var $this      = this;
			var errorEvent = document.createEvent( 'Event' );

			window.et_fb_import_progress = 0;
			window.et_fb_import_estimation = 1;

			errorEvent.initEvent( 'et_fb_layout_import_error', true, true );

			if ( undefined === window.FormData ) {
				window.et_fb_import_layout_message = this.text.browserSupport;
				window.dispatchEvent( errorEvent );
				return;
			}

			if ( ! $this.validateImportFile( file, true ) ) {
				window.et_fb_import_layout_message = this.text.invalideFile;
				window.dispatchEvent( errorEvent );
				return;
			}

			if ('undefined' === typeof options) {
				options = {};
			}

			options = $.extend({
				replace: false
			}, options);

			var fileSize = Math.ceil( ( file.size / ( 1024 * 1024 ) ).toFixed( 2 ) ),
				formData = new FormData(),
				requestData = {
					action: 'et_core_portability_import',
					include_global_presets: options.includeGlobalPresets,
					file: file,
					content: false,
					timestamp: 0,
					nonce: $this.nonces.import,
					post: postId,
					replace: options.replace ? '1' : '0',
					context: 'et_builder'
				};

			/**
			 * Max size set on server is exceeded.
			 *
			 * 0 indicating "unlimited" according to php specs
			 * https://www.php.net/manual/en/ini.core.php#ini.post-max-size
			 **/
			if (
				( 0 > $this.postMaxSize && fileSize >= $this.postMaxSize )
				|| ( 0 > $this.uploadMaxSize && fileSize >= $this.uploadMaxSize )
			) {
				window.et_fb_import_layout_message = this.text.maxSizeExceeded;
				window.dispatchEvent( errorEvent );
				return;
			}

			$.each(requestData, function(name, value) {
				if ('file' === name) {
				  // Explicitly set the file name.
				  // Otherwise it'll be set to 'Blob' in case of Blob type, but we need actual filename here.
				  formData.append('file', value, value.name);
				} else {
				  formData.append(name, value);
				}
			});

			var importFBAjax = function( importData ) {
				$.ajax( {
					type: 'POST',
					url: etCore.ajaxurl,
					processData: false,
					contentType: false,
					data: formData,
					success: function( response ) {
						var event = document.createEvent( 'Event' );

						event.initEvent( 'et_fb_layout_import_in_progress', true, true );

						// Handle known error
						if ( ! response.success && 'undefined' !== typeof response.data && 'undefined' !== typeof response.data.message && 'undefined' !== typeof $this.text[ response.data.message ] ) {
							window.et_fb_import_layout_message = $this.text[ response.data.message ];
							window.dispatchEvent( errorEvent );
						}
						// The error is unknown but most of the time it would be cased by the server max size being exceeded.
						else if ( 'string' === typeof response && ('0' === response || '' === response) ) {
							window.et_fb_import_layout_message = $this.text.maxSizeExceeded;
							window.dispatchEvent( errorEvent );

							return;
						}
						// Memory size set on server is exhausted.
						else if ( 'string' === typeof response && response.toLowerCase().indexOf( 'memory size' ) >= 0 ) {
							window.et_fb_import_layout_message = $this.text.memoryExhausted;
							window.dispatchEvent( errorEvent );

							return;
						}
						// Pagination
						else if ( 'undefined' !== typeof response.page && 'undefined' !== typeof response.total_pages ) {
							// Update progress bar
							var progress = Math.ceil( ( response.page * 100 ) / response.total_pages );
							var estimation = Math.ceil( ( ( response.total_pages - response.page ) * 6 ) / 60 );

							window.et_fb_import_progress = progress;
							window.et_fb_import_estimation = estimation;

							// Import data
							var nextImportData = importData;
							nextImportData.append( 'page', ( parseInt(response.page) + 1 ) );
							nextImportData.append( 'timestamp', response.timestamp );
							nextImportData.append( 'file', null );

							importFBAjax( nextImportData );

							// trigger event to communicate with FB
							window.dispatchEvent( event );
						} else {
							// Update progress bar
							window.et_fb_import_progress = 100;
							window.et_fb_import_estimation = 0;

							// trigger event to communicate with FB
							window.dispatchEvent( event );

							// Allow some time for animations to animate
							setTimeout( function() {
								var event = document.createEvent( 'Event' );

								event.initEvent( 'et_fb_layout_import_finished', true, true );

								// save the data into global variable for later use in FB
								window.et_fb_import_layout_response = response;

								// trigger event to communicate with FB (again)
								window.dispatchEvent( event );
							}, 1300 );
						}
					}
				} );
			};

			importFBAjax(formData)
		},

		ajaxAction: function( data, callback, fileSupport ) {
			var $this = this;

			// Reset cancelled.
			this.cancelled = false;

			data = $.extend( {
				nonce: $this.nonce,
				file: null,
				content: false,
				timestamp: 0,
				post: $( '#post_ID' ).val(),
				context: $this.instance().data( 'et-core-portability' ),
				page: 1,
			}, data );

			var	ajax = {
				type: 'POST',
				url: etCore.ajaxurl,
				data: data,
				success: function( response ) {
					// The error is unknown but most of the time it would be caused by the server max size being exceeded.
					if ( 'string' === typeof response && '0' === response ) {
						etCore.modalContent( '<p>' + $this.text.maxSizeExceeded + '</p>', false, true, '#' + $this.instance( '.ui-tabs-panel:visible' ).attr( 'id' ) );

						$this.enableActions();

						return;
					}
					// Memory size set on server is exhausted.
					else if ( 'string' === typeof response && response.toLowerCase().indexOf( 'memory size' ) >= 0 ) {
						etCore.modalContent( '<p>' + $this.text.memoryExhausted + '</p>', false, true, '#' + $this.instance( '.ui-tabs-panel:visible' ).attr( 'id' ) );

						$this.enableActions();

						return;
					}
					// Paginate.
					else if ( 'undefined' !== typeof response.page ) {
						var progress = Math.ceil( ( response.page * 100 ) / response.total_pages );

						if ( $this.cancelled ) {
							return;
						}

						$this.toggleCancel( true );

						$this.ajaxAction( $.extend( data, {
							page: parseInt( response.page ) + 1,
							timestamp: response.timestamp,
							file: null,
						} ), callback, false );

						$this.instance( '.et-core-progress-bar' )
							.width( progress + '%' )
							.text( progress + '%' );

						$this.instance( '.et-core-progress-subtext span' ).text( Math.ceil( ( ( response.total_pages - response.page ) * 6 ) / 60 ) );

						return;
					} else if ( 'undefined' !== typeof response.data && 'undefined' !== typeof response.data.message ) {
						etCore.modalContent( '<p>' + $this.text[response.data.message] + '</p>', false, 3000, '#' + $this.instance( '.ui-tabs-panel:visible' ).attr( 'id' ) );

						$this.enableActions();

						return;
					}

					// Timestamp when AJAX response is received
					var ajax_returned_timestamp = new Date().getTime();

					// Animate Progresss Bar
					var animateCoreProgressBar = function( DOMHighResTimeStamp ) {
						// Check has been performed for 3s and progress bar DOM still can't be found, consider it fail to avoid infinite loop
						var current_timestamp = new Date().getTime();
						if ((current_timestamp - ajax_returned_timestamp) > 3000) {
							$this.enableActions();
							etCore.modalContent( '<div class="et-core-loader et-core-loader-fail"></div>', false, 3000, '#' + $this.instance( '.ui-tabs-panel:visible' ).attr( 'id' ) );
							return;
						}

						// Check if core progress DOM exists
						if ($this.instance( '.et-core-progress' ).length ) {
							$this.instance( '.et-core-progress' )
								.removeClass( 'et-core-progress-striped' )
								.find( '.et-core-progress-bar' ).width( '100%' )
								.text( '100%' )
								.delay( 1000 )
								.queue( function() {

									$this.enableActions();

									if ( 'undefined' === typeof response.data || ( 'undefined' !== typeof response.data && ! response.data.timestamp ) ) {
										etCore.modalContent( '<div class="et-core-loader et-core-loader-fail"></div>', false, 3000, '#' + $this.instance( '.ui-tabs-panel:visible' ).attr( 'id' ) );
										return;
									}

									$( this ).dequeue();

									callback( response );
								} );
						} else {
							// Recheck on the next animation frame
							window.requestAnimationFrame(animateCoreProgressBar);
						}
					}
					animateCoreProgressBar();
				}
			};

			if ( fileSupport ) {
				var fileSize = Math.ceil( ( data.file.size / ( 1024 * 1024 ) ).toFixed( 2 ) ),
					formData = new FormData();

				/**
				 * Max size set on server is exceeded.
				 *
				 * 0 indicating "unlimited" according to php specs
				 * https://www.php.net/manual/en/ini.core.php#ini.post-max-size
				 **/
				if (
					( 0 > $this.postMaxSize && fileSize >= $this.postMaxSize )
					|| ( 0 > $this.uploadMaxSize && fileSize >= $this.uploadMaxSize )
				) {
					etCore.modalContent( '<p>' + $this.text.maxSizeExceeded + '</p>', false, true, '#' + $this.instance( '.ui-tabs-panel:visible' ).attr( 'id' ) );

					$this.enableActions();

					return;
				}

				$.each( ajax.data, function( name, value ) {
					formData.append( name, value);
				} );

				ajax = $.extend( ajax, {
					data: formData,
					processData: false,
					contentType : false,
				} );
			}

			$.ajax( ajax );
		},

		// This function should be overwritten for options portability type to make sure data are saved before exporting.
		save: function( callback ) {
			if ( 'undefined' !== typeof wp && 'undefined' !== typeof wp.customize ) {
				var saveCallback = function() {
					callback();
					wp.customize.unbind( 'saved', saveCallback );
				}

				$('#save').trigger('click');

				wp.customize.bind( 'saved', saveCallback );
			} else {
				// Add a slight delay for animation purposes.
				setTimeout( function() {
					callback();
				}, 1000 )
			}
		},

		addProgressBar: function( message ) {
			etCore.modalContent( '<div class="et-core-progress et-core-progress-striped et-core-active"><div class="et-core-progress-bar" style="width: 10%;">1%</div><span class="et-core-progress-subtext">' + message + '</span></div>', false, false, '#' + this.instance( '.ui-tabs-panel:visible' ).attr( 'id' ) );
		},

		actionsDisabled: function() {
			if ( this.instance( '.et-core-modal-action' ).hasClass( 'et-core-disabled' ) ) {
				return true;
			}

			return false;
		},

		disableActions: function() {
			this.instance( '.et-core-modal-action' ).addClass( 'et-core-disabled' );
		},

		enableActions: function() {
			this.instance( '.et-core-modal-action' ).removeClass( 'et-core-disabled' );
		},

		toggleCancel: function( cancel ) {
			var $target = this.instance( '.ui-tabs-panel:visible [data-et-core-portability-cancel]' );

			if ( cancel && ! $target.is( ':visible' ) ) {
				$target.show().animate( { opacity: 1 }, 600 );
			} else if ( ! cancel && $target.is( ':visible' ) ) {
				$target.animate( { opacity: 0 }, 600, function() {
					$( this ).hide();
				} );
			}
		},

		cancel: function( cancel ) {
			this.cancelled = true;

			// Remove all temp files. Set a delay as temp files might still be in the process of being added.
			setTimeout( function() {
				$.ajax( {
					type: 'POST',
					url: etCore.ajaxurl,
					data: {
						nonce: this.nonces.cancel,
						context: this.instance().data( 'et-core-portability' ),
						action: 'et_core_portability_cancel',
					}
				} );
			}.bind( this ), 3000 );
			etCore.modalContent( '<div class="et-core-loader et-core-loader-success"></div>', false, 3000, '#' + this.instance( '.ui-tabs-panel:visible' ).attr( 'id' ) );
			this.toggleCancel();
			this.enableActions();
		},

		instance: function( element ) {
			return $( '.et-core-active[data-et-core-portability]' + ( element ? ' ' + element : '' ) );
		},

	} );

	$(function() {
		window.etCore.portability.boot();
	});

})( jQuery );
