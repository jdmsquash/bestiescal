export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve index.html for the root path
    if (url.pathname === "/" || url.pathname === "") {
      return new Response(await env.ASSETS.fetch(new Request("/index.html")).then(res => res.text()), {
        headers: { "Content-Type": "text/html;charset=UTF-8" }
      });
    }
    
    // Try to serve the requested asset
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If asset not found, serve index.html
      return new Response(await env.ASSETS.fetch(new Request("/index.html")).then(res => res.text()), {
        headers: { "Content-Type": "text/html;charset=UTF-8" }
      });
    }
  }
}
