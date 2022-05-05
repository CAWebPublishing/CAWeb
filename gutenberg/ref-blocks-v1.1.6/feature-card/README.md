# feature-card component custom block

The feature-card component is part of the design system. The HTML and CSS are defined in the component in the <a href="https://github.com/cagov/design-system/tree/component-feature-card/components/feature-card">design system</a> repository.

This is the WordPress custom Gutenberg block built to let page authors edit this section content within the original design constraints

## Functionality

This provides an editor interface that reproduces the layout seen in preview mode. Authors are allowed to swap in a new image, change the header text, rewrite body copy and update the call to action button text and destination url.

The left side panel content is controlled by innerblocks so it is a little bit flexible so the call to action button could be omitted if desired. This flexibility also leverages WordPress default components so we don't have to build custom controls to handle specific rules.

<img width="1043" alt="feature-card-custom-block" src="https://user-images.githubusercontent.com/353360/120737560-25ee0000-c4a3-11eb-95a3-d11605fb561d.png">
