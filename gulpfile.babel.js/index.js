import gulp, { watch } from 'gulp';

import { reload, serve } from './tasks/browser-sync';
import images, { IMAGES_FILES } from './tasks/images.base';
import svg from './tasks/images.svg';
import markup, { MARKUP_FILES } from './tasks/markup.base';

const imageBuild = gulp.series(images, svg);
const buildMarkup = gulp.series(markup);
const build = gulp.parallel(imageBuild, buildMarkup);

const watcher = () => {
  watch(IMAGES_FILES, gulp.series(imageBuild, reload));
  watch(MARKUP_FILES, gulp.series(buildMarkup, reload));
};

export default gulp.series(build, serve, watcher);
