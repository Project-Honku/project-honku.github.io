const markdownIt = require("markdown-it");

module.exports = (config) => {
    const markdown = markdownIt({ html: true, linkify: true });
    config.setLibrary("md", markdown);

    config.addPassthroughCopy("src/public");
    config.addPassthroughCopy("src/styles");
	config.addPassthroughCopy("src/scripts");

    config.addPassthroughCopy("src/CNAME");

    return {
        dir: {
            input: "src",
            output: "docs"
        },
        // Use nunjucks
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    }
}