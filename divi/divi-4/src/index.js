import $ from 'jquery';

import CAWebModuleProfileBanner from './modules/profile-banner/index.jsx';
import CAWebModuleTest from './modules/test/index.jsx';

/**
 * Register modules to Visual Builder once the API is ready.
 *
 * @since 1.0.0
 */
$(window).on('et_builder_api_ready', (event, API) => {
    // Register modules.
    API.registerModules([
        CAWebModuleProfileBanner,
        CAWebModuleTest,
    ]);
});
