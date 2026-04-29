import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    paths: {
      base: '/spottoweb'
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    })
  }
};