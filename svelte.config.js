const less = require('less')
const path = require('path')
module.exports = {
  preprocess: {
    style: async ({ content, attributes }) => {
      if (attributes.lang !== 'less') return;
      const { css, map, imports } = await less.render(content, { paths: [path.resolve(__dirname, 'src')]});
      return { code: css, map, dependencies: imports };
    }
  }
}