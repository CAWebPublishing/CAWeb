// External Dependencies.
import React, { ReactElement, useEffect, useRef } from 'react';
import { get, map } from 'lodash';
import { select } from '@divi/data';

// Divi Dependencies.
import {
  ModuleContainer,
  ElementComponents
} from '@divi/module';
import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useFetch } from '@divi/rest';

// WordPress Dependencies.
import shortcode from '@wordpress/shortcode';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';

// Local Dependencies.
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';
import { PostListModuleEditProps } from './types.ts';
import { get_icon_span, get_google_map_place_link, RenderWordPressShortcode } from '../Utils/index.js';

let c = 0;

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {PostListModuleEditProps} props React component props.
 * @returns {ReactElement}
 */
const ModuleEdit = ({
    attrs,
    id,
    name,
    elements,
  }) => {
    let { 
      module,
      title,
      style,
      posts,
      orderby,
      categories,
      tags,
      excerpt,
      image
    } = attrs || {};

    let selectedStyle = getAttrByMode(style?.innerContent);
    let {faq: faqStyle} = getAttrByMode(style?.advanced);
    let {size: titleSize} = getAttrByMode(title?.advanced);
    let postNumber = getAttrByMode(posts?.innerContent);
    let { all: showAllCategories } = getAttrByMode(categories?.advanced);
    let { all: showAllTags } = getAttrByMode(tags?.advanced);
    let categoryList = 'on' === showAllCategories ? [] : getAttrByMode(categories?.innerContent);
    let tagsList = 'on' === showAllTags ? [] : getAttrByMode(tags?.innerContent);
    let orderBy = getAttrByMode(orderby?.innerContent);
    let order = '';
    let displayExcerpt = getAttrByMode(excerpt?.innerContent);
    let displayImage = getAttrByMode(image?.innerContent);

    let ModuleWrapper = React.Fragment;


    // get the appropriate order by properties from the orderBy string
    if( orderBy.includes('_') ){
      [orderBy, order] = orderBy.split('_');
    } else {
      orderBy = 'rand';
    }

    const fetchAbortRef = useRef(new AbortController());

    const {
      fetch,
      response,
      isLoading,
    } = useFetch([]);

    const {
      fetch: fetchImg,
      response: responseImg,
      isLoading: isLoadingImg,
    } = useFetch([]);
    
    useEffect(() => {
      if(fetchAbortRef.current) {
        fetchAbortRef.current.abort();
      }
      
      fetchAbortRef.current = new AbortController();

      // to get the name of the category associated with this list style
      // strip the -list suffix from the style to get the post type
      // uppercase the first letter of the post type to match the category name
      // only if Faqs do we want to uppercase the first three letters of the post type to match the category name
      // let name = selectedStyle.replace('-list', '').replace(/^\w/, (c) => c.toUpperCase()).replace(/^(Faqs)/, (c) => c.toUpperCase());
      let name = selectedStyle.replace('-list', '');//.replace(/^(faqs|\w)/, (c) => c.toUpperCase())

      let args = {
        hide_empty: false,
        _fields: 'id'
      };

      // if not general, we filter by the slug
      if( 'general' !== name ){
        args.slug = name;
      // only for general, we filter by the included categories
      } else if( categoryList.length ){
        args.include = categoryList.join(',');
      }

      // fetch the category ids associated with this post list style
      fetch({
        restRoute: addQueryArgs('/wp/v2/categories', args), 
        method:    'GET',
      })
      .then((data) => {
        
        // now that we have the category ids, we can fetch the posts
        fetch({
          restRoute: addQueryArgs('/wp/v2/posts', {
            per_page: postNumber,
            orderby: orderBy,
            order,
            categories: data.map(category => category.id),
            tags: tagsList,
          }),
          method: 'GET',
        })
        .then((posts) => {
          if( displayImage ){
            // if we need to grab the featured images for the posts, let's get all the featured media ids
            const featuredMediaIds = posts.map(post => post.featured_media).filter(Boolean);

            fetchImg({
              restRoute: addQueryArgs('/wp/v2/media', {
                include: featuredMediaIds.join(','),
                _fields: 'id,source_url'
              }),
              method: 'GET',
            });
          }
        });
      });
      
      return () => {
        if(fetchAbortRef.current) {
          fetchAbortRef.current.abort();
        }
      };

    }, []);

    let output = [];
    
    if( ! isLoading && response ) {
      map(response, (post, i)=> {
        let { 
          content: { rendered: post_content },
          guid: { rendered: post_url },
          title: { rendered: post_title },
          featured_media
        } = post || {};
        
        let shortCode = shortcode.next('et_pb_ca_post_handler', post_content );
  
        // Only if a Post Handler shortcode is found, we proceed
        if( shortCode ){
          const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
  
          let { shortcode: sc } = shortCode;
          let { post_type_layout } = sc?.attrs?.named;
          let shortcode_content = sc?.content;

          switch( selectedStyle ){
            case 'courses-list':
              if( 'course' === post_type_layout ){
                let { 
                  course_start_date,
                  course_end_date,
                  course_address,
                  course_city,
                  course_state,
                  course_zip
                } = sc?.attrs?.named;
                
                let address = [course_address, course_city, course_state, course_zip].filter(Boolean);
  
                let featuredImage = 'on' === displayImage && responseImg && (
                  <div className="thumbnail float-start">
                    <img src={responseImg.find(img => img.id === featured_media)?.source_url} style={{width: '80px', height: '80px'}} />
                  </div>
                );
                
                // we generate an excerpt from the shortcode content, if displayExcerpt is on
                let excerpt = '';
  
                if( 'on' === displayExcerpt ){
                  const parser = new DOMParser();
                  const parsedContent = parser.parseFromString(sc?.content, 'text/html');
                  
                  excerpt = parsedContent.body.textContent || '';
                  
                  // we only want the first 15 words of the excerpt
                  if( excerpt.length ) {
                    excerpt = excerpt.split(' ');
                    let ellipsis = excerpt.length > 20;
    
                    excerpt = excerpt.slice(0, 20).join(' ');
    
                    // Add ellipsis if the excerpt was truncated
                    if( ellipsis ) {
                      excerpt += '...';
                    } 
                  }
                }
                
                output.push(
                  <article className="course-item bg-light p-3 mb-3">
                    { featuredImage }
                    <div className={"header" + ( featuredImage ? ' ps-5 ms-5' : '') }>
                      <div className="title">
                        <a href={ post_url } className="fs-5 text-decoration-dotted">{ post_title }</a>
                      </div>
                      <div className="datetime">
                          { course_start_date && new Date(course_start_date).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC', hour: '2-digit', minute: '2-digit'}) } -
                          { course_end_date && new Date(course_end_date).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC', hour: '2-digit', minute: '2-digit'}) }
                      </div>                                
                    </div>
                    <div className={"body" + ( featuredImage ? ' ps-5 ms-5' : '')}>
                      { excerpt.length && <div className="description">{excerpt}</div> }
                      { address.length && <div className="location"><span>Location: <a href={`https://www.google.com/maps/place/${address.join(', ')}`}>{address.join(', ')}</a></span></div> }
                    </div>
                  </article>
                )
              }
              break;
            case 'events-list':
            case 'general-list':
              if( 'event' === post_type_layout || ('general-list' === selectedStyle && ['news', 'profile', 'jobs', 'event', 'course', 'exam', 'general', 'faqs'].includes(post_type_layout))){
                let { 
                  event_start_date,
                } = sc?.attrs?.named;

                // if the post has a featured image 
                let featuredImage = 'on' === displayImage && responseImg && 
                  <div className="thumbnail float-start w-auto">
                    <img src={responseImg.find(img => img.id === featured_media)?.source_url} style={{width: '80px', height: '80px'}} />
                  </div>;

                // we generate an excerpt from the shortcode content, if displayExcerpt is on
                let excerpt = '';
                
                if( 'on' === displayExcerpt ){
                  const parser = new DOMParser();
                  const parsedContent = parser.parseFromString(sc?.content, 'text/html');
                  
                  excerpt = parsedContent.body.textContent || '';
                  
                  // we only want the first 15 words of the excerpt
                  if( excerpt.length ) {
                    excerpt = excerpt.split(' ');
                    let ellipsis = excerpt.length > 15;

                    excerpt = excerpt.slice(0, 15).join(' ');

                    // Add ellipsis if the excerpt was truncated
                    if( ellipsis ) {
                      excerpt += '...';
                    } 
                  }
                }

                output.push(
                  <article className="event-item bg-light p-3 mb-3">
                    { featuredImage }
                    <div className={"info" + ( 'on' === displayImage ? ' ms-5 ps-5 float-none clearfix' : '') }>
                      <h5 className="pb-0">
                          <a href={ post_url } className="text-decoration-dotted" target="_blank">{ post_title }</a>
                      </h5>
                      {
                        excerpt.length && <div className="description">{excerpt}</div>
                      }
                      {
                        event_start_date && <div className="start-date"><time>{new Date(event_start_date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'UTC', hour: '2-digit', minute: '2-digit'})}</time></div>
                      }
                    </div>
                  </article>
                )
              }
              break;
            case 'exams-list':
              if( 'exam' === post_type_layout ){
                let { 
                  exam_id,
                  exam_status,
                  exam_final_filing_date = 'Until Filled', 
                  exam_final_filing_date_chooser = 'on', 
                  exam_final_filing_date_picker,
                  exam_published_date,
                } = sc?.attrs?.named;
                
                let filingDate = <>Final Filing Date: {exam_final_filing_date}</>;

                if( 'on' === exam_final_filing_date_chooser ){
                  filingDate = <>Final Filing Date: <time>{new Date(exam_final_filing_date_picker).toLocaleDateString('en-US', {month: '2-digit', day: 'numeric', year: 'numeric', timeZone: 'UTC'})}</time></>;
                }
                
                output.push(
                  <article className="exam-item bg-light p-3 mb-3">
                    <div className="header d-flex flex-row">
                      <div className="title h4 my-0">
                        <a href={ post_url } className="text-decoration-dotted">{ post_title }</a>
                      </div>
                      <div className="filing-date ms-auto">
                        { filingDate }
                      </div>
                    </div>
                    <div className="body">
                      { exam_id && <div className="id">ID: { exam_id }</div> }
                      { exam_status && <div className="base">Status: { exam_status }</div> }
                    </div>
                    <div className="footer">
                      { 
                        exam_published_date && <div className="published fst-italic text-secondary mt-2">Published: <time>{new Date(exam_published_date).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC'})}</time></div>
                      }
                    </div>
                  </article>
                )
              }
              break;
            case 'faqs-list':
              if( 'faqs' === post_type_layout ){
                if( 'toggle' === faqStyle ){
                  ModuleWrapper = (a) => {
                    return <ul className="accordion-list list-overstated" role="tablist">{output}</ul>;
                  };

                  output.push(
                    <li>
                      <a 
                        data-bs-target={ `.${getModuleOrderClassName(id)} #accordion${i}` }
                        data-bs-toggle="collapse"
                        className={ 'collapsed' }
                        aria-expanded="false"
                      >{ post_title }</a>
                      <div
                        id={ `accordion${i}` }
                        className="collapse"
                        data-bs-parent={ `.${getModuleOrderClassName(id)}` }
                      >
                        <RenderWordPressShortcode shortcodeText={shortcode_content}></RenderWordPressShortcode>
                      </div>
                    </li>
                  )
                } else if( 'accordion' === faqStyle ){
                  attrs.isAccordion = true;

                  output.push(
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button 
                          className={`accordion-button collapsed`} 
                          data-bs-toggle="collapse" 
                          data-bs-target={ `.${getModuleOrderClassName(id)} #accordion${i}` } 
                          aria-expanded="false" 
                          aria-controls={ `accordion${i}` }>{ post_title }</button>
                      </h2>
                      <div
                        id={ `accordion${i}` }
                        className="accordion-collapse collapse"
                        data-bs-parent={ `.${getModuleOrderClassName(id)}` }
                      >
                        <div className="accordion-body">
                          <RenderWordPressShortcode shortcodeText={shortcode_content}></RenderWordPressShortcode>
                        </div>
                      </div>
                    </div>
                  )
                }
              }
              break;
            case 'jobs-list':
              if( 'jobs' === post_type_layout ){ 
                let { 
                  job_final_filing_date, 
                  job_final_filing_date_chooser, 
                  job_final_filing_date_picker,
                  job_position_number,
                  job_rpa_number,
                  job_hours,
                  show_job_salary,
                  job_salary_min,
                  job_salary_max,
                  job_agency_address,
                  job_agency_city,
                  job_agency_state,
                  job_agency_zip,
                } = sc?.attrs?.named;

                let filingDate = <>Final Filing Date: {job_final_filing_date}<br /></>;

                if( 'on' === job_final_filing_date_chooser ){
                  filingDate = <>Final Filing Date: <time>{new Date(job_final_filing_date_picker).toLocaleDateString('en-US', {month: '2-digit', day: 'numeric', year: 'numeric', timeZone: 'UTC'})}</time><br /></>;
                }

                let jobPosition = '';

                if( job_position_number && job_rpa_number ){
                  jobPosition = <>Position Number: { job_position_number }, RPA Number: { job_rpa_number }</>
                } else if ( job_position_number ){
                  jobPosition = <>Position Number: { job_position_number }</>
                } else if ( job_rpa_number ){
                  jobPosition = <>RPA Number #{ job_rpa_number }</>
                }

                let salary = 'on' === show_job_salary ? <div className="salary-range">Salary Range: {formatter.format(job_salary_min)} - {formatter.format(job_salary_max)}</div> : '';

                let location = [
                  job_agency_address,
                  job_agency_city,
                  job_agency_state,
                  job_agency_zip,
                ].filter(Boolean)
              
                output.push(
                  <article className="job-item bg-light p-3 mb-3">
                    <div className="header d-flex flex-row">
                      <div className="title me-auto">
                        <a href={ post_url } className="fs-5 text-decoration-dotted">{ post_title }</a>
                      </div>
                      {
                        filingDate 
                      }
                    </div>
                    <div className="body">
                      {
                        jobPosition
                      }
                      {
                        job_hours && <div className="schedule">{ job_hours }</div>
                      }
                      {salary}
                      {
                        location.length && <div className="location">Location: { location.join(', ') }</div>
                      }
                    </div>
                  </article>
                );
              }
              break;
            case 'news-list':
              if( 'news' === post_type_layout ){
                let { news_author, news_publish_date } = sc?.attrs?.named;
                
                // we generate an excerpt from the shortcode content, if displayExcerpt is on
                let excerpt = '';

                if( 'on' === displayExcerpt ){
                  const parser = new DOMParser();
                  const parsedContent = parser.parseFromString(sc?.content, 'text/html');
                  
                  excerpt = parsedContent.body.textContent || '';
                  
                  // we only want the first 30 words of the excerpt
                  if( excerpt.length ) {
                    excerpt = excerpt.split(' ');
                    let ellipsis = excerpt.length > 30;
                    excerpt = excerpt.slice(0, 30).join(' ');

                    // Add ellipsis if the excerpt was truncated
                    if( ellipsis ) {
                      excerpt += '...';
                    } 
                  }
                }

                let author = news_author ? <>Author: {news_author}<br/></> : '';
                let publishDate = news_publish_date ? <>Published: <time>{new Date(news_publish_date).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC'})}</time></> : '';
                
                // if the post has a featured image 
                let featuredImage = 'on' === displayImage && responseImg &&
                  <div className="thumbnail float-start">
                    <img src={responseImg.find(img => img.id === featured_media)?.source_url} style={{width: '150px', height: '100px'}} />
                  </div>;
    
                output.push(
                  <article className="news-item bg-light p-3 mb-3">
                    {
                      featuredImage
                    }
                    <div className="info clearfix">
                      <div className="headline">
                        <a href={post_url}>{post_title}</a>
                      </div>
                      {
                        excerpt.length && <div className="excerpt">{excerpt}</div>
                      }
                      {
                        author || publishDate ? (
                          <div className="published">
                            {author}
                            {publishDate}
                          </div>
                        ) : null
                      }
                    </div>
                  </article>
                );
              }
              break;
            case 'profiles-list':
              if( 'profile' === post_type_layout ){
                let { 
                  profile_name_prefix, 
                  profile_name, 
                  profile_career_title,
                  profile_career_position,
                  profile_career_line_1,
                  profile_career_line_2,
                  profile_career_line_3
                } = sc?.attrs?.named;
              
                // if the post has a featured image 
                let featuredImage = 'on' === displayImage && responseImg && 
                  <div className="thumbnail float-start">
                    <img src={responseImg.find(img => img.id === featured_media)?.source_url} style={{width: '75px', height: '75px'}} />
                  </div>;

                let fields = [
                  profile_career_position,
                  profile_career_line_1,
                  profile_career_line_2,
                  profile_career_line_3
                ].filter( Boolean );
                
                output.push(
                  <article className="profile-item bg-light p-3 mb-3">
                    { featuredImage }
                    <div className={ 'header' + ( 'on' === displayImage ? ' ms-5 ps-5' : 'ms-0') }>
                      <div className="title">
                        <a href={ post_url } className="text-decoration-none">
                          { profile_name_prefix ? `${profile_name_prefix} ` : ''  } 
                          { profile_name }
                          { profile_career_title ? `, ${profile_career_title}` : '' }
                        </a>
                      </div>
                    </div>
                    <div className={ 'body' + ( 'on' === displayImage ? ' ms-5 ps-5' : 'ms-0') } dangerouslySetInnerHTML={{ __html: fields.join('<br />') }}>
                    </div>
                  </article>
                );
              }
              break;
          }
        }
              
      }) 
    }
  
    attrs.isAccordion = true;

    return (
      <ModuleContainer
        attrs={attrs}
        elements={elements}
        id={id}
        name={name}
        stylesComponent={ModuleStyles}
        classnamesFunction={moduleClassnames}
        scriptDataComponent={ModuleScriptData}
      >
        {
          elements.styleComponents({
            attrName: 'module',
          })
        }
        {
          elements.render({
            attrName: 'title',
            tagName: titleSize,
          })
        }
        {
          ! isLoading && (
            <ModuleWrapper>
              { output }
            </ModuleWrapper>
          )
        }
        {
          ! isLoading && response.length < 1 && (
            <div>{__('No post found.', 'd5-extension-example-modules')}</div>
          )
        }
      </ModuleContainer>
    );
}

export {
  ModuleEdit,
};
