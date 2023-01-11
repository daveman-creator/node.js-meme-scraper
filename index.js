
// 0. Import all the required packages

import cheerio from 'cheerio';
import fs from 'fs';
import fetch from 'node-fetch';
import request from 'request';

const htmlContent = 'https://memegen-link-examples-upleveled.netlify.app';
const response = await fetch(htmlContent);
const body = await response.text();

console.log(body);
const meme = console.log(body);


//function filterArray(arr) {
const imageUrl = [];
 for (const i = 0; i < arr.length; i++) {
if (typeof arr[i] === 'url') {
 imageUrl.push(arr[i]);
  }
 }

// request the html data from the website and store it as a string

fetch('https://memegen-link-examples-upleveled.netlify.app')
.then((res) => res.text())
.then(body) = {
 const imgUrlArr = []

}

//fetching first 10 img-contents from img URL and save them
for (let i = 0; i < 10; i++) {
  fetch(imgUrlArr[i]).then ((res) = {
    const currentImg = $('img', body)[i].attribs.src;

    fetch(currentImg) .then((res) = {
      const path =
      ' ./meme_folder/' +
      imgUrlArr[i].split('?')[0].split('/').slice(4).join('_');
      currentImg.split('?')[0].split('/').slice(4).join('_');

      const dest =fs.createWriteStream(path);
      res.body.pipe(dest);
    });
  })
console.log('images downloaded successfully!');
}


//function filterArray(arr) {
// const imageUrl = [];
// for (const i = 0; i < arr.length; i++) {
//if (typeof arr[i] === 'url') {
//  imageUrl.push(arr[i]);
//  }
// }
// return imageUrl;
//}

//console.log(body);
//const images = console.log(body);

//fetching the images

//fetch(htmlContent, (error, response, html)) => {
//if (!error) {
// const $ =cheerio.load(html)
// const imagesrc =$('.').attr('src')

//download the images
//download({
// imgs: [
//   {
//    uri:imagesrc
//    }
//  ],
//   dest: ' ./downloads'
//})
//.then((info))=> {
//  console.log('Download Complete')
////process.getMaxListeners(10)
////}
//}
//}

//const links = '';
//const response = await fetch(links);
//const htmlArray = await response.data();
// convert the string html into an array. elements start off with the image source links
//const htmlArray = htmlString.split('srcArr');

// loop over the array, to find the first index of each end quote (")
// cut off the string at this point and store the shorter strings in a new array
//const srcArr = [];
//for (const item of htmlArray) {
//const index = item.indexOf('"');
//srcArr.push(item.slice(0, index));
//}

//const imageUrls = [];
//let text = 'imageUrls';
//let position = text.search('imageurls');

//String array declaration without size

//const progressBar = new cliProgress.SingleBar(
//cliProgress.Presets.shades_classic,
//);

//I created a variable for the Url
// eslint-disable-next-line @typescript-eslint/naming-convention
//const Url = 'https://memegen-link-examples-upleveled.netlify.app/';

//I fetched

//const image = fetch(Url)
//.then((response) => {
// if (!response.ok) {
//throw new Error(`HTTP error! Status: ${response.status}`);
// }
//return response;
//})
// .catch((err) => {
//  console.log(err);
//});
//console.log(await image);

//.then((response) => {
//console.log (response.data),
// Do something with response
// })

//const htmlContent = '';
//const htmlString = '',
//const htmlArray = htmlString.split('src="');
