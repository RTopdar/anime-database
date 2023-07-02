const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://anilist.co/'); // Replace with the URL of the anime database site you want to scrape

  // Perform scraping operations using page.evaluate() or page.$eval() methods

  // Example: Scraping anime titles
  const animeTitles = await page.$$eval('.anime-title', (elements) =>
    elements.map((element) => element.textContent)
  );

  // Example: Scraping anime descriptions
  const animeDescriptions = await page.$$eval('.anime-description', (elements) =>
    elements.map((element) => element.textContent)
  );

  await browser.close();

  // Store the scraped data in a JavaScript object or array
  const scrapedData = {
    titles: animeTitles,
    descriptions: animeDescriptions,
  };

  // Convert the data to JSON and save it to a file
  fs.writeFileSync('animeData.json', JSON.stringify(scrapedData));
}

scrapeData();
