import $ from 'jquery';

import CAWebModuleProfileBanner from './modules/profile-banner/index.jsx';
import CAWebModuleLocation from './modules/location/index.jsx';
import CAWebModuleSectionPrimary from './modules/section-primary/section-primary.jsx';
import CAWebModuleFullwidthSectionPrimary from './modules/section-primary-fullwidth/section-primary-fullwidth.jsx';

/**
 * Register modules to Visual Builder once the API is ready.
 *
 * @since 1.0.0
 */
$(window).on('et_builder_api_ready', (event, API) => {
    // Register modules.
    API.registerModules([
        CAWebModuleProfileBanner,
        CAWebModuleLocation,
        CAWebModuleSectionPrimary,
        CAWebModuleFullwidthSectionPrimary
    ]);
});
