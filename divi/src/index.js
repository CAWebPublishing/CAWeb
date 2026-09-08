
import { addAction } from '@wordpress/hooks';

import { registerModule, getPossibleModuleConversionOutline } from '@divi/module-library';

/**
 * Internal dependencies
 */
// Styles
import './styles/_builder.scss';

// standard modules
import { CAWebModuleGithub, CAWebModuleGithubMetadata } from './modules/Github/index.js';
import { CAWebModuleLocation, CAWebModuleLocationMetadata } from './modules/Location/index.js';
import { CAWebModuleProfileBanner, CAWebModuleProfileBannerMetadata } from './modules/ProfileBanner/index.js';
import { CAWebModuleSectionPrimary, CAWebModuleSectionPrimaryMetadata } from './modules/SectionPrimary/index.js';
import { CAWebModuleCard, CAWebModuleCardMetadata } from './modules/Card/index.js';
import { CAWebModulePanel, CAWebModulePanelMetadata } from './modules/Panel/index.js';
import { CAWebModuleSectionFooter, CAWebModuleSectionFooterMetadata } from './modules/SectionFooter/index.js';
import { CAWebModuleSectionFooterGroup, CAWebModuleSectionFooterGroupMetadata } from './modules/SectionFooterGroup/index.js'; 
import { CAWebModuleSectionCarousel, CAWebModuleSectionCarouselMetadata } from './modules/SectionCarousel/index.js';
import { CAWebModuleSectionCarouselSlide, CAWebModuleSectionCarouselSlideMetadata } from './modules/SectionCarouselSlide/index.js';
import { CAWebModulePostList, CAWebModulePostListMetadata } from './modules/PostList/index.js';

//fullwidth modules
import { CAWebModuleFullwidthSectionPrimary, CAWebModuleFullwidthSectionPrimaryMetadata } from './modules/FullwidthSectionPrimary/index.js';
import { CAWebModuleFullwidthPanel, CAWebModuleFullwidthPanelMetadata } from './modules/FullwidthPanel/index.js';
import { CAWebModuleFullwidthSectionFooter, CAWebModuleFullwidthSectionFooterMetadata } from './modules/FullwidthSectionFooter/index.js';
import { CAWebModuleFullwidthSectionFooterGroup, CAWebModuleFullwidthSectionFooterGroupMetadata } from './modules/FullwidthSectionFooterGroup/index.js';
import { CAWebModuleFullwidthSectionCarousel, CAWebModuleFullwidthSectionCarouselMetadata } from './modules/FullwidthSectionCarousel/index.js';
import { CAWebModuleFullwidthSectionCarouselSlide, CAWebModuleFullwidthSectionCarouselSlideMetadata } from './modules/FullwidthSectionCarouselSlide/index.js';
import { CAWebModuleFullwidthServiceTiles, CAWebModuleFullwidthServiceTilesMetadata } from './modules/FullwidthServiceTiles/index.js';
import { CAWebModuleFullwidthServiceTilesItem, CAWebModuleFullwidthServiceTilesItemMetadata } from './modules/FullwidthServiceTilesItem/index.js';

//
// import icon-library integration
// import './icons';

// Register modules.
addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'cawebDiviExtension', () => {
  // Standard modules
  registerModule(CAWebModuleGithubMetadata, CAWebModuleGithub);
  registerModule( CAWebModuleLocationMetadata, CAWebModuleLocation );
  registerModule(CAWebModuleProfileBannerMetadata, CAWebModuleProfileBanner);
  registerModule(CAWebModuleSectionPrimaryMetadata, CAWebModuleSectionPrimary);
  registerModule(CAWebModuleCardMetadata, CAWebModuleCard);
  registerModule(CAWebModulePanelMetadata, CAWebModulePanel);
  registerModule(CAWebModuleSectionFooterMetadata, CAWebModuleSectionFooter);
  registerModule(CAWebModuleSectionFooterGroupMetadata, CAWebModuleSectionFooterGroup);
  registerModule(CAWebModuleSectionCarouselMetadata, CAWebModuleSectionCarousel);
  registerModule(CAWebModuleSectionCarouselSlideMetadata, CAWebModuleSectionCarouselSlide);
  registerModule(CAWebModulePostListMetadata, CAWebModulePostList);
  
  // Fullwidth modules
  registerModule(CAWebModuleFullwidthSectionPrimaryMetadata, CAWebModuleFullwidthSectionPrimary);
  registerModule(CAWebModuleFullwidthPanelMetadata, CAWebModuleFullwidthPanel);
  registerModule(CAWebModuleFullwidthSectionFooterMetadata, CAWebModuleFullwidthSectionFooter);
  registerModule(CAWebModuleFullwidthSectionFooterGroupMetadata, CAWebModuleFullwidthSectionFooterGroup);
  registerModule(CAWebModuleFullwidthSectionCarouselMetadata, CAWebModuleFullwidthSectionCarousel);
  registerModule(CAWebModuleFullwidthSectionCarouselSlideMetadata, CAWebModuleFullwidthSectionCarouselSlide);
  registerModule(CAWebModuleFullwidthServiceTilesMetadata, CAWebModuleFullwidthServiceTiles);
  registerModule(CAWebModuleFullwidthServiceTilesItemMetadata, CAWebModuleFullwidthServiceTilesItem);
});
