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

    config.addShortcode("addRating", addRating);
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

/**
 * Add rating HTML
 * 
 * @param {number | string} rating - The rating of product
 * @param {boolean?} censored - Is product censored?
 * @param {boolean?} completed - Use long version of rating name
 */
function addRating(rating, censored = false, completed = false) {
    let colorClass = "success";

    switch (true) {
        case rating >= 18:
            colorClass = "danger";
        break;
        case rating >= 14:
            colorClass = "warning";
        break;
        case rating >= 10:
            colorClass = "info";
        break;
        default:
            colorClass = "success";
            rating = (completed) ? "Semua Umur" : "SU";
        break;
    }

    let html = `<span class="badge text-bg-${colorClass}">`;
    html += rating;
    if (typeof rating == "number") html += "+";
    if (censored) html += "&nbsp;(Versi Sensor)";
    html += `</span>`;

    return html;
}