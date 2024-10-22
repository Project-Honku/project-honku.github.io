const markdownIt = require("markdown-it");
const fs = require("fs");

module.exports = (config) => {
    const markdown = markdownIt({ html: true, linkify: true });
    config.setLibrary("md", markdown);

    config.addPassthroughCopy("src/public");
    config.addPassthroughCopy("src/styles");
	config.addPassthroughCopy("src/scripts");
    config.addPassthroughCopy("src/blog/**/*.{png,webp}");

    config.addWatchTarget("src/blog/**/*");
    config.addPassthroughCopy("src/CNAME");

    // Global Data
    config.addShortcode("gotoCDN", (path) => "https://pixboost.com/api/2/img/https://cdn.honku.my.id" + path + "/optimise?auth=NDUyNzY3NzM3")
    config.addShortcode("gotoPro", (product) => "/products/" + product);

    // Filters
    config.addFilter("resolveMonth", (month) => {
        const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        return months[month];
    });

    config.addFilter("sortByDate", (posts) => {
        return posts.slice().sort((a, b) =>  b.date - a.date);
    });

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