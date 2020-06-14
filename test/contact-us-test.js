var config = require('../config/main-config')
var dataGenerators = require('../utils/dataGenerators')

const assert = require("assert");

beforeEach(() => {
  browser.url("./");
});

describe("Contact Us Page", () => {
    it("Test 1: Contact Us Page Test", () => {

      const webDriverUniTitle = browser.getTitle();
      expect(webDriverUniTitle).to.equal('WebDriverUniversity.com');  

      const webDriverUniUrl = browser.getUrl();
      expect(webDriverUniUrl).to.contains('http://www.webdriveruniversity.com');

      // const clickContactUs = $("#contact-us");
      // clickContactUs.click();

      browser.waitAndClick('#contact-us');

      browser.pause(2000);
  
      browser.switchWindow("WebDriver | Contact Us");

      // const firstName = $("[name='first_name']")
      // firstName.addValue(config.firstName)

      browser.waitAndSendKeys("[name='first_name']", config.firstName);

      // const lastName = $("[name='last_name']")
      // lastName.addValue(config.lastName)

      browser.waitAndSendKeys("[name='last_name']", config.lastName);

      // const email = $("[name='email']")
      // email.addValue('email@mail.com')

      browser.waitAndSendKeys("[name='email']", dataGenerators.generateRandomEmailAddress());

      // const message = $("[name='message']")
      // message.addValue('Hello this is message')

      browser.waitAndSendKeys("[name='message']", dataGenerators.generateRandomString());

      // const submitContactDetails = $("[type='submit']")
      // submitContactDetails.click();

      browser.waitAndClick("[type='submit']");

      const successfulMessage = $('h1').getText();
      expect(successfulMessage).to.equal('Thank You for your Message!')
    
  
    });
  });