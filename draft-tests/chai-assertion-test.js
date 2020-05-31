const assert = require("assert");
const expect = require("chai").expect;

beforeEach(() => {
  browser.url("./");
});

describe("Chai assertions", () => {
  it("Test 1: Webdriveruni login portal", () => {
    const clickById = $("#login-portal");
    clickById.click();

    browser.switchWindow("WebDriver | Login Portal");
    
    const loginPageTitle = browser.getTitle();
    const loginPageUrl = browser.getUrl();

    expect(loginPageTitle).to.contains('Login');
    expect(loginPageUrl).to.contains('Login-Portal');



  });
});
