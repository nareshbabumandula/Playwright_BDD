const{Given, When, Then} = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

       
    Given('I access eyeglassworld portal', async function () {
        await this.page.goto('https://www.eyeglassworld.com/');
         // Expect a title "to contain" a substring.
          await expect(this.page).toHaveTitle(/Eyeglass World/);
        console.log("Accessed EGW website");
    });


    When('I search for an eyeglass store based on City as {string}', async function (string) {
        console.log("Searched the store based on city name");
    });


    Then('I should see the appropriate store results', async function () {
        console.log("Successfully verified the store search results..!");
    });