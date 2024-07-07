module.exports = (config) => {
    config.addPassthroughCopy("src/public");
    config.addPassthroughCopy("src/styles");
	config.addPassthroughCopy("src/scripts");

    return {
        dir: {
            input: "src",
            output: "docs",
            // Use nunjucks
            markdownTemplateEngine: "njk",
		    htmlTemplateEngine: "njk"
        }
    }
}