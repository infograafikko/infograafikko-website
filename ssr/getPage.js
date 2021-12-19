
const puppeteer = require('puppeteer');
const fse = require('fs-extra');

const {listOfPages} = require('./listOfPages')

function finnishDateToIsoString(string) {
  const splittedDate = string.split(".");
  const date = new Date(splittedDate[2] + "-" + splittedDate[1] + "-" + splittedDate[0])
  return date
}

async function ssr(pageAttributes) {
  const { url, type, metaTitle, metaDesc, headImg, date } = pageAttributes;
  const realUrl = "http://localhost:3000/" +  url
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  page.on("console", (consoleObj) => console.log(consoleObj.text()));
  try {
    console.log("opening:", realUrl )
    await page.goto(realUrl, {waitUntil: 'networkidle0'});
    //await page.waitForSelector('#blogArticle'); // ensure #posts exists in the DOM.
    
    //get current header or use title as heawder
    //const header = metaTitle == undefined ? await page.$eval('#title', (el) => el.innerText) : metaTitle;

    const getElement = async (id, realUrl, fallback) => {
      const val = await page.evaluate(async (id, realUrl, fallback) => {
        const item = document.querySelector(id)

        if (item) {
          return item.innerText
        } else {
          console.log(realUrl + " does not contain " + id + " using value " + fallback)
          return fallback;
        }
      }, id, realUrl, fallback)
      return val
    }
    const header = await getElement("#title", realUrl, metaTitle)
    await page.evaluate((header) => document.title = header + " - Infograafikko", header)

    const description = await getElement("#lead", realUrl, metaDesc)

    const addMetaToHead = async (type, typename, content) => {
      await page.evaluate(async (type, typename, content) => {
        const metatagPromise = new Promise((resolve,reject) => {
          const meta = document.createElement("meta")
          meta.setAttribute(type, typename)
          meta.content = content
          const addToHead = document.head.appendChild(meta)
          resolve(addToHead)
        })
      }, type, typename, content)
    }

    //description tag
    addMetaToHead('name', 'description',description)

    //get current header or use title as heawder
    let headImgSrc = await getElement("#headImg", realUrl, headImg)
    headImgSrc = headImg !== undefined && headImgSrc.replace("http://localhost:3000", "https://www.infograafikko.fi")

    //Publish date
    const dateTag = type == "article" && date && await page.$eval('#finnishDate', (el) => el.innerText)
    const publishedDate = type == "article" && date && finnishDateToIsoString(dateTag)

    ///////////
    //OG TAGS//
    ///////////

    addMetaToHead('property', 'og:title', header)
    addMetaToHead('property', 'og:description', description)
    addMetaToHead('property', 'og:type', type)
    type == "article" && date && addMetaToHead('property', 'article:published_time', publishedDate)
    addMetaToHead('property', 'og:url', 'https://www.infograafikko.fi/' + url)
    addMetaToHead('property', 'og:site_name', 'Infograafikko')
    addMetaToHead('property', 'og:image', headImgSrc)
    

    ////////////////
    //TWITTER TAGS//
    ////////////////

    addMetaToHead('property', 'twitter:site', '@Joel_Kanerva')
    addMetaToHead('property', 'twitter:title', header)
    addMetaToHead('property', 'twitter:description', description)
    addMetaToHead('property', 'twitter:card', 'summary_large_image')
    addMetaToHead('property', 'twitter:image', headImgSrc)

    //////////
    //OTHERS//
    //////////

    addMetaToHead('property', 'apple-mobile-web-app-title', 'Infograafikko')
    
  
  } catch (err) {
    console.error(err, realUrl)
    throw new Error('page.goto/waitForSelector timed out.');
  }
  
  


  const html = await page.content(); // serialized HTML of page DOM.

  await browser.close();
  return html;
}


async function runAllFunctions(){

  

  for (const page of listOfPages) {
    const website = await ssr(page)
    
    let modified = website
      .split("http://localhost:3000")
      .join("https://www.infograafikko.fi");
    //console.log(modified)

    fse.outputFile('./html/' + page.url + "index.html", modified);
  }
    
  
}

runAllFunctions()

