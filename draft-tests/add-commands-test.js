const assert = require("assert");
const expect = require("chai").expect;

beforeEach(() => {
  browser.url("./");
});

describe("Add commands", () => {
  it("Test 1: Webdriveruni login portal", () => {
    const clickById = $("#login-portal");
    clickById.click();

    browser.switchWindow("WebDriver | Login Portal");
    
 //   const loginPageTitle = browser.getTitle();
 //   const loginPageUrl = browser.getUrl();

    const loginPageData = browser.getUrlAndTitle();

    expect(loginPageData.title).to.contains('Login');
    expect(loginPageData.url).to.contains('Login-Portal');



  });
});
