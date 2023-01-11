// 0. Import all the required packages
import cliProgress from 'cli-progress';
import colors from 'colors';
import fetch from 'node-fetch';

const htmlContent = 'https://memegen-link-examples-upleveled.netlify.app';
const response = await fetch(htmlContent);
const body = await response.text();

console.log(body);
const meme = console.log(body);

const imageUrls = [];
let text = 'imageUrls';
let position = text.search('imageurls');

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
