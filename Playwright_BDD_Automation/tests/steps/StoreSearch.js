const { Given, When, Then } = require("@cucumber/cucumber");
const { expect, page} = require("@playwright/test");

Given("I access eyeglassworld portal", async function () {
    await this.page.goto("https://www.eyeglassworld.com/");
        
    // Increase wait time to allow page loading
    await this.page.waitForLoadState("domcontentloaded");  

    // Expect a title to contain a substring.
    await expect(this.page).toHaveTitle(/Eyeglass World/);

    console.log("Accessed EGW website");
});

When("I search for an eyeglass store based on City as {string}", async function (city) {
    await this.page.locator('id=inputStoreValue').fill(city);
    await this.page.waitForTimeout(2000);
    await this.page.locator('//button[contains(text(),"Find a Store")]').click();
    await this.page.waitForTimeout(5000);
    console.log(`Searched the store based on city name: ${city}`);
});

Then("I should see the appropriate store results", async function () {
    await this.page.waitForSelector('text=tampa'); 
    await this.page.locator('text=tampa') // Check of tampa is found in the results
    await this.page.locator('text=The Plaza at Estrella'); // Verify the store name exists
    await this.page.locator('text=Open Now'); // Verify the store status displayed
    const scheduleExam = await this.page.locator('text=Schedule Exam'); 
    const visitStorePage = await this.page.locator('text=    Visit Store Page'); 

    // Verfify Schedule exam and Visit store page buttons displayed
    await expect(scheduleExam).toBeVisible();
    await expect(visitStorePage).toBeVisible();
    
    console.log("Successfully verified the store search results..!");
});
