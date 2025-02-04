const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium, page} = require("playwright/test");

setDefaultTimeout(60*1000);

Before(async function () {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage(page);
});

After(async function () {
    await this.page.close();
    await this.browser.close();
});
