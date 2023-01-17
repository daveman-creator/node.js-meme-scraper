import fs from 'node:fs';
import client from 'node:https';
import axios from 'axios';
import * as cheerio from 'cheerio';
import fsExtra from 'fs-extra';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';
const filePath = './memes';

// Here we check if the directory exist, if it exists, it will clean out
// the content. If it does not exist, it will mkdir
try {
  if (fs.existsSync(filePath)) {
    fsExtra.emptyDirSync(filePath);
    console.log('Directory successfully cleaned-up');
  } else {
    fs.mkdir(filePath, { recursive: true }, () => {
      console.log('Directory successfully created!');
    });
  }
} catch (e) {
  console.log('An error occurred!');
}

//  Using Async function which scrapes the data
async function scrapeData() {
  try {
    // This will fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);

    // Load HTML  data we fetched above
    const htmlContent = cheerio.load(data);
    console.log('Website Online, starting the scraping process now!');

    // get all the img data
    const imgItems = htmlContent('img');

    // Stores data for all images
    const memesArray = [];

    // Use .each method to loop through the htmlContent we selected
    imgItems.each((idx, el) => {
      if (idx <= 9) {
        const link = htmlContent(el).attr('src');
        memesArray.push(link);
      }
      console.log(memesArray); // Looping over the memesArray.length and slicing out 10
      for (let i = 0; i < memesArray.length; i++) {
        client.get(memesArray[i], (res) => {
          if (i < 9) {
            const dir = `./memes/0${i + 1}.jpg`;
            res.pipe(fs.createWriteStream(dir));
          } else {
            const dir = `./memes/${i + 1}.jpg`;
            res.pipe(fs.createWriteStream(dir));
          }
        });
      }
    });
    console.log('Download finished');
  } catch (err) {
    console.error(err);
  }
}
// call the function
await scrapeData();
