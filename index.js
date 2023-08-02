(async () => {
  const puppeteer = require("puppeteer");
  console.log("open browser");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });

  console.log("open google.com");
  const page = await browser.newPage();
  await page.goto("https://google.com/");

  console.log("test get text from element");
  const el = await page.waitForSelector(".gb_y");
  const text = await el.evaluate((v) => v.textContent);
  console.log(`text => ${text}`);

  console.log("close browser");
  await browser.close();
})();
