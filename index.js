// 0. Import all the required packages
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import Json from 'Json';
import querystring from 'querystring';

//creat a Write Stream
// const writeStream = fs.createWriteStream('memes.txt', 'UTF-8');

const htmlContent = 'https://memegen-link-examples-upleveled.netlify.app/';
const response = await fetch(htmlContent);
const body = await response.text();
console.log(body);

axios(htmlContent)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const memesArray = [];

    $('div', 'section', html).each(function () {
      const imgSrc = $(this).find('img').attr('src');
      memesArray.push(imgSrc);
    });
    const memes = memesArray.slice(0, 10);
    const maplinks = memes.map((mem) => mem.imgSrc);
    console.log(memes);

//     const images = $('img');
//  for  (let i= 0; i < 10; i++) {
//   const imageUrl = images[i].attribs.src;
//   const fileName = `memes/0${i + 1}.jpg`;
for (let i = 0; i < maplinks.length; i++) {
      console.log(maplinks[i]);
}

    axios({
    method: 'get',
    url: imageUrl,
    responseType: 'stream',
  })
   .then((responseFormRequest) => {
     responseFormRequest.data.pipe(fs.createWriteStream(fileName));
   })
   .catch((error) => {
    console.log(error);
   });
 }
 bar.increment();
 bar.update(100);
 bar.stop();

  //   for (let i = 0; i < maplinks.length; i++) {
  //     const imageUrl = images[i].attribs.scr;
  //     console.log(maplinks[i]);
  //     const fileFolder = 'memes/0${i + i}.jpg';

  //     async function downloadImage(url, fileFolder) {
  //       const response = await axios({
  //         url: imageUrl,
  //         method: 'GET',
  //         responseType: 'stream',
  //       });
  //       return new Promise((resolve, reject) => {
  //         response.data
  //           .pipe(fs.createWriteStream(fileFolder))
  //           .on('error', reject)
  //           .once('close', () => resolve(fileFolder));
  //       });
  //     }
  //   }
  // })
  // .catch((err) => console.log(err));

// function downloadImage(url, filepath) {
//   client.get(url, (res) => {
//     res.pipe(fs.createWriteStream(filepath));
//   });
// }

// const $ = cheerio.load(body);
// const images = [];
// $('div[id="images"]')
//   .find('div > div > a')
//   .each(function (index, element) {
//     images.push($(element).attr('src'));
//   });
// console.log(images);

// request('body', (err, resp, html) => {
//   if (!err && resp.statusCode == 200) {
//     console.log('Request was success');
//     //define cheerio or $ object
//     const $ = cheerio.load(html);

//     $('img').each((index, image) => {
//       let img = $(image).attr('src');
//       let baseUrl = 'https://memegen-link-examples-upleveled.netlify.app/';
//       let Links = baseUrl + img;

//       console.log(Links);
//     });
//   } else {
//     console.log('Request Failed');
//   }
// });

// const htmlContent = 'https://memegen-link-examples-upleveled.netlify.app';
// const response = await fetch(htmlContent);
// const body = await response.text();

// //console.log(body);
// const $ = cheerio.load(htmlContent);
// $('.html').click(function () {
//   const $html = $(this);
//   console.log($html.data('img'));
//   console.log($html.find('img').attr('src'));
// });
//  axios
//  .get(webSite)
//  .then((function res) => {
//    const $ = cheerio.load(html);
//   $('html').each(function () {
//      const href = $(this).attr('href');
//      $(this).text(href);
//    });
//  });

//  console.log(res.data);

// async function getImgSrcs() {
//      try {
//        const response = await axios.get(webLink);
//        console.log(respone);
//     } catch (err) {
//       console.error(err);
//      }
// const webLinks = body
//   .split('')
//   .filter((w = w.includes('https://') && !w.includes('href=')));
// const imgLinks = webLinks.map((x) => x.match(/src="([^"])"/)[1]);
// console.log(webLinks);

//const slicedMemeLinks = imgLinks.slice(0, 10);
//console.log(slicedMemeLinks);

// async function getImgSrcs() {
//   try {
//     const response = await axios.get(webLink);
//     console.log(respone);
//   } catch (err) {
//     console.error(err);
//   }
// }
// fetch('https://memegen-link-examples-upleveled.netlify.app/')
//   .then((response) => response.text())
//   .then((body) => {
//     console.log(body);
//   });

// const body = x;
// const x = body.querySelectorAll('a');
// const myarray = [];
// for (const i = 0; i < x.length; i++) {
//   const nametext = x[i].textContent;
//   const cleantext = nametext.replace(/\s+/g, ' ').trim();
//   const cleanlink = x[i].href;
//   myarray.push([cleantext, cleanlink]);
// }
// function make_table() {
//   const table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
//   for (var i = 0; i < myarray.length; i++) {
//     table +=
//       '<tr><td>' + myarray[i][0] + '</td><td>' + myarray[i][1] + '</td></tr>';
//   }

//   var w = window.open('');
//   w.body.write(table);
// }
// make_table();

// let i = [];
// let imgs = [i];
// for (i = 0; i < imgs.length; i++) {
//   //Create a temporary div, assign img string as its innerHTML, then gets its content
//   const document = imageUrl.createElement('div');
//   const imageUrl.innerHTML = imgs[i];
//   // Reassign the imgs array with HTML DOM object instead of string
//   imgs[i] = document.firstChild;
//   console.log(imgs[i].src);
// }
// (async () => {
//   const response = await fetch(
//     'https://memegen-link-examples-upleveled.netlify.app/',
//   );
//   const responseBody = await response.text();
//   const $ = cheerio.load(responseBody);
//   console.log($('title').first().text());
// })();

//const body = await response.text();

// const htmlContent = 'https://memegen-link-examples-upleveled.netlify.app';
// const response = await fetch(htmlContent);
// const body = await response.text();

//console.log(body);
// async () => {
//   const response = await fetch('https://api.memegen.link/images/');
//   const responseBody = await response.text();
//   const $ = cheerio.load(responseBody);
//   console.log($('title').first().text());
// }();

// fetch('https://memegen-link-examples-upleveled.netlify.app')
//   .then((response) => response.text())
//   .then((body) => {
//     console.log(body);
//   });
// const src = 'https://api.memegen.link/images/';
// const res = src;

// axios.get('https://api.memegen.link/images/').then((res) => {
//   console.log(res.data);
//   const $ = cheerio.load(res.data);
//   $('a[href^=http:// api.memegen.link/images/]').each(function () {
//     const href = $(this).attr('href');
//     $(this).text(href);
//   });
// });
//  console.log(res.data);

// let arr = axios.get('https://api.memegen.link/images/').then((res) => {
//   console.log(res.data);
//   const $ = cheerio.load(res.data);
//   $('a[href^=http:// api.memegen.link/images/]').each(function () {
//     const href = $(this).attr('href');
//     $(this).text(href);
//   });
// });
//arr.forEach((val) => console.log(val));

//const imageUrlCollection = new Array(); //image URL collection
//const parentElement = $('#memesPages');
//for (const item = 0; item < imageUrlCollection.length; item++) {
//parentElement.append($('<img>', { id: item, src: imageUrlCollection[item] }));
//}
//console.log(parentElement.append);

// const $ = cheerio.load('res.data');
// $('a[href^=http://api.memegen.link/images/]').each(function () {
//   var href = $(this).attr('href');
//   $(this).text(href);
// });

// console.log(res.data);

//console.log(body);

//axios.get(url:string). then((res) = {
// const $ = cheerio.load(res.body);
//})
//console.log(res.url);
//const meme = console.log(body);

//const $ = cheerio.load(body);
//$('a[href^=https://]').each(function () {
//const href = $(this).attr('href');
// $(this).text(href);
//});
//console.log();

//const str = 'https://api.memegen.link/images/';

//axios.get('https://memegen-link-examples-upleveled.netlify.ap{p').then((res) => {
//console.log(res.data);
// const $ = cheerio.load(res.data);
// $('a[href^=http:// api.memegen.link/images/]').each(function () {
//  const href = $(this).attr('href');
// $(this).text(href);
// });
//});
//console.log(res.data);

///let i = [];
//let imgs = [i];
//for (i = 0; i < imgs.length; i++) {
//Create a temporary div, assign img string as its innerHTML, then gets its content
/// const document = document.createElement('div');
// document.innerHTML = imgs[i];
// Reassign the imgs array with HTML DOM object instead of string
///imgs[i] = d.firstChild;
///console.log(imgs[i].src);
///}
// Filter the images from the html elements
//axios
//.get('https://api.memegen.link/images/')
// .then((response) => {
// const $ = cheerio.load(response.data);
// })
// .catch((err) => console.log('Fetch error ' + err));
//nodeHtmlToImage({
// output: '.https://api.memegen.link/images/saltbae.jpg?width=300',
// html: '<html><body>Memegen!</body></html>',
//}).then(() => console.log('The image was created successfully!'));
// A URL is taken
///let imageUrl = 'https://api.memegen.link/images/';

//Parse the whole URL
///let parsed_Url = url.parse(imageUrl);

// Parse only querystring.
///let parsed_queryString = querystring.parse(parsed_Url.query);

// Print the result.
///onsole.log('This is parsed URL :', parsed_Url);

///console.log('This is parsed Query String :', parsed_queryString);

///let i = [];
///let imgs = [i];
///for (i = 0; i < imgs.length; i++) {
//Create a temporary div, assign img string as its innerHTML, then gets its content
/// const document = document.createElement('div');
///d.innerHTML = imgs[i];
// Reassign the imgs array with HTML DOM object instead of string
///imgs[i] = d.firstChild;
/// console.log(imgs[i].src);
///}

// Filter the images from the html elements
//axios
//.get(' https://api.memegen.link/docs/')
//.then((response) => {
// const $ = cheerio.load(response.data);
//})
//.catch((err) => console.log('Fetch error ' + err));

//axios.get('https://memegen-link-examples-upleveled.netlify.app').then((res) => {
// console.log(res.data);
//});

//axios.get(' https://api.memegen.link/docs/').then((res) => {
// console.log(res.data);
//});
//{
//const navBar = [];

//const $ = cheerio.load(res.data);}

//$('.navBar').each((index.element) = {
///console.log($(element).image());
//const title = $(element)
//.children('a')
//.first()
//.image()
////const memesLink = $(element)
//.children('a')
//.last()
//.attr('href')

//const description = $(element)
//.children ('p')
// .last()
//.image()
//navBar[index] = { title, memesLink, description};

// });
//console.log(navBar);
//});

//.last();
//.attr('href');
// image[index] = {title, memesLink};

//console.log(targets)
//);

//console.log(res.data);

//import fetch from 'node-fetch';

//const htmlContent = 'https://memegen-link-examples-upleveled.netlify.app';
//const response = await fetch(htmlContent);
//const body = await response.text();

//console.log(body);
//const meme = console.log(body);

// Filter the images from the html elements
//.get("https://memegen-link-examples-upleveled.netlify.app")
// .then((response) => {
// const $ = cheerio.load(response.data);
//})
//.catch((err) => console.log("Fetch error " + err));

// Loading XML content
//const $ = cheerio.load(
//'<media:thumbnail url="/"https://api.memegen.link/images/cmm/pineapples_don't_belong_on_pizza.jpg?width=300"></img>'
//);
// Rendering xml content
//$.xml();
//Output => <media:thumbnail url="https://api.memegen.link/images/cmm/pineapples_don't_belong_on_pizza.jpg?width=300"></img>/>'
// Rendering xml content
//$.xml();
// Output => <media:thumbnail url="http://www.foo.com/keyframe.jpg" width="75" height="50" time="12:05:01.123"/>

//const $ = cheerio.load(website);
// Then we can grab our a tags
//let queryRes = $(query).toArray();
//return queryRes;
//const parsePresidents = async () => {
// const query = 'a';
// const url = (
//   <img src="https://api.memegen.link/images/cmm/pineapples_don't_belong_on_pizza.jpg?width=300"></img>
// );
// Grab our collection of a tags returned by scrape
// let aTags = await scrape(url, query);
// Finally we can filter our a tags
//aTags = aTags.filter((a) => a.attribs.href?.match(/Presidenc[a-z]*_of/));
//};

//const all = $('*');
//const imageUrls = $('span')
// .filter(function () {
// return $(this).text().indexOf('imageUrls:') > -1;
// })
//.next()
// .text();
//const myArray = [linkUrl];
//const filteredArrays = myArray.filter(function (arr) {
// return arr > linkUrl;
//});

//console.log(filteredArrays);

//const myArray = ['a'];
//filtered = myArray.filter('a'.href);
//console.log(filtered);

// const imageUrls = []; <img src="https://api.memegen.link/images/sf/i_accidentally_used_a_swear_word/and_i_know_my_mom_heard_it_from_the_other_room.jpg?width=300"></img>
//const arr = [];
//for (const i = 0; i < arr.length; i++) {
// if (typeof arr[i] === 'url') {
// imageUrl.push(arr[i]);

//const imageUrl = 'https://memegen-link-examples-upleveled.netlify.app';
//const result = imageUrl.filter(html);

//function html(imageUrl) {
//return imageUrl >= memegen;
//}

//const imageUrl = [];
//const arr = [];
//for (const i = 0; i < arr.length; i++) {
// if (typeof arr[i] === 'url') {
// imageUrl.push(arr[i]);
// }
//}
//console.log(imageUrl);

// const imageUrl = [];
// for (const i = 0; i < arr.length; i++) {
//if (typeof arr[i] === 'url') {
//  imageUrl.push(arr[i]);
//function downloadMemes(filteredFoundUrls) {
// const foundUrls = body.match(/https:\/\/api\.memegen\.link\/images.*\.jpg/g);

//function filterArray(arr) {
// const imageUrl = [];
// for (const i = 0; i < arr.length; i++) {
// return imageUrl.push(arr[i]);
// }
//}
//console.log(imageUrl(arr));
// request the html data from the website and store it as a string

///fetch('https://memegen-link-examples-upleveled.netlify.app')
///.then((res) => res.text())
//.then(body) = {
/// const imgUrlArr = []

///}

//fetching first 10 img-contents from img URL and save them
///for (let i = 0; i < 10; i++) {
///fetch(imgUrlArr[i]).then ((res) = {
///const currentImg = $('img', body)[i].attribs.src;

///fetch(currentImg) .then((res) = {
/// const path =
///' ./meme_folder/' +
/// imgUrlArr[i].split('?')[0].split('/').slice(4).join('_');
///currentImg.split('?')[0].split('/').slice(4).join('_');

///const dest =fs.createWriteStream(path);
///res.body.pipe(dest);
/// });
/// })
///console.log('images downloaded successfully!');
///}

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
