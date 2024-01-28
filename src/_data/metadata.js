export default {
  title: "State Parks",
  description: "A website documenting my journey visiting the state parks.",
  domain: "stateparks.troyv.dev",
  cloudinary:
    "https://res.cloudinary.com/dpmchqezv/image/upload/c_scale,f_auto,q_auto:eco,w_1400",
  cloudinaryVideo:
    "https://res.cloudinary.com/dpmchqezv/video/upload/c_scale,f_auto,q_auto:eco,w_1400",
  cloudinaryFetch:
    "https://res.cloudinary.com/dpmchqezv/image/fetch/c_scale,f_auto,q_auto:eco,w_1400",
  get url() {
    return `https://${this.domain}`;
  },
};
