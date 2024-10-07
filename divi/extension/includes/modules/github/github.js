window.addEventListener("load", (event) => {
    const slug = 'et_pb_ca_github';

    let githubModules = document.querySelectorAll(`.${slug}`);

    if( ! githubModules ){
        return;
    }

    githubModules.forEach( (githubModule) => {
        let {url, title, titleSize } = githubModule.dataset;
        let ul = document.createElement('UL');
        let pagination = document.createElement('DIV');

        ul.classList.add('pl-0');

        pagination.classList.add(`${slug}-pagination`, 'd-flex');
        
        // create title element if title exist.
        if( title ){
            titleSize = titleSize ?? 'H2';

            let titleElement = document.createElement(titleSize);

            titleElement.innerHTML = title;

            githubModule.append( titleElement );
        }

        githubModule.append(ul);
        githubModule.append(pagination);

        requestRepos(url, githubModule);
        //'<strong>No GitHub Repository Found</strong>'
        console.log( githubModule )

    })

    
    function requestRepos( url, container ){
        
        let {definitions, email, email_body} = container.dataset;

        // parse the definitions attribute
        definitions = JSON.parse(definitions);

        // get the ul and pagination elements.
        let ul = container.querySelector('UL');
        let pagination = ul.nextSibling;
        
        // clear the ul and pagination
        ul.innerHTML = '';
        pagination.innerHTML = '';

        // make the request for the specific url
        $.get(url , function(repos, status, xhr) {
            // if repose exists.
            if( repos.length  ){
                repos.forEach(repo => {
                    let li = document.createElement('LI');

                    definitions.forEach( (def, i) => {
                        // we only render if definition is on
                        // we skip 1 since its more a question 
                        if( 'on' === def && 1 !== i ){
                            // element for definition
                            let e = document.createElement('P');

                            /**
                             * definition position
                             * Based on the definitions Module Field Setting
                             * 
                             * 0 - Project Title
                             * 1 - Add Link to repositories (Public Repositories Only)
                             * 2 - Description
                             * 3 - Fork
                             * 4 - Creation Date
                             * 5 - Updated Date
                             * 6 - Language
                             */
                            switch( i ){
                                case 0: // Project Title
                                    e = document.createElement('H3');

                                    // if not adding link or if repo is private
                                    if ( 'on' !== definitions[1] || repo.private ) {
                                        e.innerHTML = repo.name;
                                    // add link if set
                                    } else if ( 'on' === definitions[1] ) {
                                        let repoLink = document.createElement('A');
                                        repoLink.setAttribute('href', repo.html_url);
                                        repoLink.setAttribute('target', '_blank');
                                        repoLink.innerHTML = repo.name;
            
                                        e.append(repoLink);
                                    }
                                    break;
                            
                                case 2: // Description
                                    if( repo.description ){
                                        e.innerHTML = `Project Description: ${repo.description}`;
                                    }
                                    break;
                                case 3: // Fork
                                    e.innerHTML = `Project forked by another organization: ${! repo.fork.length ? 'False' : 'True'}`;
                                    break;
                                case 4: // Created At
                                    e.innerHTML = `Created on: ${ new Date(repo.created_at).toLocaleDateString()  }`;
                                    break;
                                case 5: // Updated At
                                    e.innerHTML = `Updated on: ${ new Date(repo.updated_at).toLocaleDateString()  }`;
                                    break;
                                case 6: // Language
                                    if( repo.language ){
                                        e.innerHTML = `Language: ${repo.language}`;
                                    }
                                    break;

                            }

                            li.append(e)
                        }
                        
                    })

                    if( email && repo.private ){
                        let privateNotice = document.createElement('P');
                        let privatEmail = document.createElement('A');
                        
                        privatEmail.classList.add('btn', 'btn-default');
                        privatEmail.setAttribute( 'href', `mailto:${email}?subject=${repo.full_name} Repository Access Request&body=${email_body}` );
                        privatEmail.innerHTML = 'Request Access';

                        privateNotice.innerHTML = '* This is a Private Repository ';
                        privateNotice.append( privatEmail );

                        li.append( privateNotice );

                    }

                    ul.append(li)
                });

         
                const linkResponse = xhr.getResponseHeader('link');

                if( ! linkResponse ){
                    return;
                }

                let prevLinks = document.createElement('DIV');
                let nextLinks = document.createElement('DIV');

                prevLinks.classList.add('flex-fill');

                linkResponse.split(',').forEach((data) => {
                    // split the data at the semi colon,
                    // 0 element has the url, 1 has the relationship.
                    let links = data.split(';');
                    let linkUrl = links[0].substring(links[0].indexOf('https'), links[0].length - 1);

                    // the relationship attribute lets us kno if it's first, prev, next, last.
                    let rel = links[1].substring(links[1].indexOf('"') + 1, links[1].lastIndexOf('"'));

                    // create link
                    let link = document.createElement('A');

                    link.classList.add('fs-4', 'me-3', 'cursor-pointer');
                    link.innerHTML = rel.charAt(0).toUpperCase() + rel.substring( 1 );
                    link.setAttribute('rel', rel );
                    link.setAttribute('data-url', linkUrl );
                    link.setAttribute('data-definitions', JSON.stringify(definitions) );
                    link.setAttribute('data-email', email );
                    link.addEventListener('click', ({target}) => {
                        let u = target.dataset.url;

                        requestRepos( u, target.parentElement.parentElement.parentElement );
                    });

                    // We want the pagination display in the appropriate order
                    // the way we concatenate first and prev is different due to the order the API sends the links
                    switch( rel ){
                        case 'first':
                            link.innerHTML = `<< ${link.innerHTML}`
                            prevLinks.prepend(link);
                            break;
                        case 'prev':
                            link.innerHTML = `< ${link.innerHTML}`
                            prevLinks.append(link);
                            break;
                        case 'next':
                            link.innerHTML = `${link.innerHTML} >`;
                            nextLinks.prepend(link);
                            break;
                        case 'last':
                            link.innerHTML = `${link.innerHTML} >>`;
                            nextLinks.append(link);
                            break;
                    }
                    
                })

                pagination.append(prevLinks, nextLinks );

            }else{
                ul.append('<li>No Repositories Found</li>')
            }

            
        });
    }

});
