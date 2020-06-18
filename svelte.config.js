const path = require('path')
const sveltePreprocess = require('svelte-preprocess')
module.exports = {
  /* preprocess: {
    style: async ({ content, attributes }) => {
      if (attributes.lang !== 'less') return;
      const { css, map, imports } = await less.render(content, { paths: [path.resolve(__dirname, 'src')]});
      return { code: css, map, dependencies: imports };
    }
  }, */
  preprocess: sveltePreprocess({
    less: {
      paths: [path.resolve('src')]
    }
  })
}