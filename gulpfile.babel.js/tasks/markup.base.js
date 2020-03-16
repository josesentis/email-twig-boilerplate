import gulp from 'gulp';
import plumber from 'gulp-plumber';
import size from 'gulp-size';
import twig from 'gulp-twig';

import { routes } from '../config';
import data from '../../src/data';

const MARKUP_FILES = `${routes.src.views}/**/*`;

const markup = () => gulp
    .src(`${routes.src.views}/*.twig`)
    .pipe(plumber())
    .pipe(twig({
      base: routes.src.views,
      cache: false,
      data
    }))
    .pipe(plumber.stop())
    .pipe(size())
    .pipe(gulp.dest(`${routes.dest.views}`));

export { MARKUP_FILES };
export default markup;
