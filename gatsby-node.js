const fs = require('fs')
const https = require('https')
const yaml = require('js-yaml')

const data = yaml.load(fs.readFileSync("_tiktok/tiks.yaml", "utf-8"))
var tiktok_html = 'test'
let url = 'https://www.tiktok.com/oembed?url='.concat(data.recent_tiktok)

https.get(url, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    tiktok_html = JSON.parse(data).html
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)

  // You can access the variable "house" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      tiktok_embed: `${tiktok_html}`,
    },
  })
}