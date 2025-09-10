const fs = require("fs");
const path = require("path");

const baseUrl = "https://tuo-dominio.com";

const pages = [
  "",
  "about",
  "projects",
  "contact"
  // aggiungi qui gli slug dei progetti se vuoi includerli
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    return `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  })
  .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap);
console.log("Sitemap generated!");
