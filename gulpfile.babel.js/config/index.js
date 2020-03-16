const SRC = 'src';
const SRC_ASSETS = `${SRC}/assets`;
const SRC_VIEWS = `${SRC}/views`;

const DEST = 'dist';

const routes = {
  src: {
    images: `${SRC_ASSETS}/img`,
    views: SRC_VIEWS,
  },
  dest: {
    images: `${DEST}/img`,
    views: DEST,
  },
};

export { routes };
