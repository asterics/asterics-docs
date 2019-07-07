module.exports = (options, ctx) => {
  return {
    name: "@asterics/vuepress-plugin-markdown",
    extendMarkdown: md => {
      md.set({ breaks: true, typographer: true, linkify: true });
      md.use(require("markdown-it-sub"));
      md.use(require("markdown-it-sup"));
      md.use(require("markdown-it-footnote"));
      md.use(require("markdown-it-deflist"));
      md.use(require("markdown-it-abbr"));
      md.use(require("markdown-it-emoji"));
      md.use(require("markdown-it-checkbox"));
      md.use(require("markdown-it-imsize"), { autofill: true });
      md.use(require("markdown-it-kbd"));
    }
  };
};
