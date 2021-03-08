// const fs = require('fs')
// const https = require('https')
// const yaml = require('js-yaml')

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   deletePage(page)

//   const data = yaml.load(fs.readFileSync("_tiktok/tiks.yaml", "utf-8"))
//   if (page.internalComponentName == 'ComponentIndex') {
//     let url = 'https://www.tiktok.com/oembed?url='.concat(data.recent_tiktok)
//     console.log(url)
//     https.get(url, (resp) => {
//       let data = '';
    
//       // A chunk of data has been received.
//       resp.on('data', (chunk) => {
//         data += chunk;
//       });
    
//       // The whole response has been received. Print out the result.
//       resp.on('end', () => {
//         console.log(JSON.parse(data));
//       });
    
//     }).on("error", (err) => {
//       console.log("Error: " + err.message);
//     });
//   }

//   // You can access the variable "house" in your page queries now
//   createPage({
//     ...page,
//     context: {
//       ...page.context,
//       house: `Gryffindor`,
//     },
//   })
// }