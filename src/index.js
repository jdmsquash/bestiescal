export default {
  async fetch(request, env, ctx) {
    // Return the static assets from the "public" directory
    return env.ASSETS.fetch(request);
  }
};
