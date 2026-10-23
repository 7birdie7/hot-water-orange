export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (["hotwaterorange.com", "www.hotwaterorange.com"].includes(url.hostname) &&
        (url.protocol !== "https:" || url.hostname.startsWith("www."))) {
      url.protocol = "https:";
      url.hostname = "hotwaterorange.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
