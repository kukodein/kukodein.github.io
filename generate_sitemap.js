// const fs = require('fs');

// const generateSitemap = () => {
//     const urls = JSON.parse(fs.readFileSync('sitemap.json', 'utf-8'));
//     const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     ${urls.map(url => {
//         const lastmod = new Date(`${url.lastmod}T00:00:00.000Z`).toISOString();
//         return `
//     <url>
//         <loc>${url.loc}</loc>
//         <lastmod>${lastmod}</lastmod>
//     </url>`;
//     }).join('')}
// </urlset>`;
//     fs.writeFileSync('sitemap.xml', sitemap);
// };

// generateSitemap();


const fs = require('fs');
const url = require('url');

const generateSitemap = () => {
    const mainDomain = 'kukode.com'; // Ganti dengan domain utama Anda
    const urls = JSON.parse(fs.readFileSync('sitemap.json', 'utf-8'));
    const filteredUrls = urls.filter(urlObj => {
        const urlParsed = url.parse(urlObj.loc);
        // Cek apakah domain utama atau subdomain dari domain utama
        return urlParsed.hostname === mainDomain || urlParsed.hostname.endsWith(`.${mainDomain}`);
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${filteredUrls.map(urlObj => {
        const lastmod = new Date(`${urlObj.lastmod}T00:00:00.000Z`).toISOString();
        return `
    <url>
        <loc>${urlObj.loc}</loc>
        <lastmod>${lastmod}</lastmod>
    </url>`;
    }).join('')}
</urlset>`;
    fs.writeFileSync('sitemap.xml', sitemap);
};

generateSitemap();
