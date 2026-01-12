window.addEventListener("load", (event) => {

    $('.et_pb_ca_github-pagination a').on('click', requestRepos );

    function requestRepos(e){
         e.preventDefault();

        let paginationContainer = this.parentElement.parentElement;
        let spinner = paginationContainer.parentElement.querySelector('.caweb-github-spinner');
        let ulContainer = paginationContainer.previousElementSibling;
        let definitions = ulContainer.dataset.definitions.split('|');
        
        let currentPage = new URL(this.dataset.url ).searchParams.get('page');

        // show spinner
        ulContainer.classList.add('d-none');
        paginationContainer.classList.add('d-none');
        spinner.classList.remove('d-none');

        // make ajax request
        $.get(caweb_github_params.ajax_url, {
            action: 'caweb_github_request_url',
            data: this.parentElement.parentElement.dataset.info,
            nonce: caweb_github_params.nonce,
            url: this.dataset.url
        }, (data) => {
            let repos = JSON.parse(data);

            // clear existing repos and pagination
            ulContainer.innerHTML = '';
            paginationContainer.querySelectorAll('div').forEach( div => div.remove() );

            // append new repos
            Object.entries(repos).forEach( ([i, repo]) => {
                // skip the link element thats for pagination
                if( 'links' !== i ){
                    let li = document.createElement('LI');
                    li.classList.add('list-group-item', 'border-0');

                    // we only render if definition is on
				    // we skip 1 since its more a question
                    definitions.forEach( (def, i) => {
                        if( 'on' === def && 1 !== i ){
                            switch( i ){
                                case 0: // Project Title

									// if not private and if adding link
                                    let name = ( 'on' === definitions[1] && ! repo.private ) ? 
                                        `<a href="${repo.html_url}" target="_blank">${repo.name}</a>` : repo.name;

                                    li.innerHTML += `<h3>${name}</h3>`;
                                    break;
                                case 2: // Description
                                    if( repo.description ){
                                        li.innerHTML += `<p><b>Project Description:</b> ${repo.description}</p>`;
                                    }
                                    break;
                                case 3: // Fork
                                    li.innerHTML += `<p><b>Project forked by another organization:</b> ${! repo.fork.length ? 'False' : 'True'}</p>`;
                                    break;
                                case 4: // Created At
                                    li.innerHTML += `<p><b>Created on:</b> ${ new Date(repo.created_at).toLocaleDateString()  }</p>`;
                                    break;
                                case 5: // Updated At
                                    li.innerHTML += `<p><b>Updated on:</b> ${ new Date(repo.updated_at).toLocaleDateString()  }</p>`;
                                    break;
                                case 6: // Language
                                    if( repo.language ){
                                        li.innerHTML += `<p><b>Language:</b> ${repo.language}</p>`;
                                    }
                                    break;
                            }
                        }
                    });

                    // if email exists and repo is private
                    if( ulContainer.dataset.email && repo.private ){
                        let email = ulContainer.dataset.email;
                        let emailBody = ulContainer.dataset.emailBody;
                        let privateNotice = document.createElement('P');
                        let privateEmail = document.createElement('A');

                        privateNotice.innerHTML = "* This is a Private Repository ";

                        privateEmail.classList.add('btn', 'btn-main', 'ms-2');
                        privateEmail.setAttribute( 'href', `mailto:${email}?subject=${repo.full_name} Repository Access Request${emailBody ? '&body=' + emailBody : ''}` );
                        privateEmail.innerHTML = 'Request Access';

                        privateNotice.append( privateEmail );
                        li.append( privateNotice );
                    }

                    ulContainer.append(li);
                }
            });

            // check for pagination links
            if( repos.links ){
                let prevLinks = document.createElement('DIV');
                let nextLinks = document.createElement('DIV');

                prevLinks.classList.add('col');
                nextLinks.classList.add('col', 'text-end');

                // parse the links
                repos.links.split(',').forEach((link) => {
                    // split the link at the semi colon,
					// 0 element has the url, 1 has the relationship.
                    let parts = link.split(';');
                    
                    // get the rel value and trim it 
                    let rel = parts[1].replace(/rel="(.*)"/, '$1').trim();

                    // get the url and trim it
                    // we also use this to get the last page number
                    let pageUrl = parts[0].replace(/<(.*)>/, '$1').trim();

                    let anchor = document.createElement('A');

                    anchor.classList.add('cursor-pointer', 'fs-4', 'me-3');
                    anchor.setAttribute('data-url', pageUrl );
                    anchor.setAttribute('rel', rel );
                    anchor.innerHTML = rel.charAt(0).toUpperCase() + rel.substring( 1 );
                    anchor.addEventListener('click', requestRepos );

                    // We want the pagination display in the appropriate order
                    switch( rel ){
                        case 'first':
                            prevLinks.prepend(anchor);
                            break;
                        case 'prev':
                            prevLinks.append(anchor);
                            break;
                        case 'next':
                            nextLinks.prepend(anchor);
                            break;
                        case 'last':
                            nextLinks.append(anchor);
                            break;
                    }
                })

                // update current page number
                paginationContainer.querySelector('.current-page').innerText = currentPage;

                // add the links to the pagination container
                paginationContainer.append(prevLinks, nextLinks);
            }
        } )
        .done( () => {
            // hide spinner
            spinner.classList.add('d-none');
            ulContainer.classList.remove('d-none');
            paginationContainer.classList.remove('d-none');
        } );

    }

});