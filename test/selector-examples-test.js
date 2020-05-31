const assert = require("assert");
beforeEach(() => {
  browser.url("./");
});

describe("Selectors test", () => {
  it("Test 1: By ID", () => {
    const clickById = $("#contact-us");
    clickById.click();
    browser.pause(2000);
  });

  it("Test 2: By Class", () => {
    const clickByClass = $("#contact-us .section-title");
    clickByClass.click();
    browser.pause(2000);
  });

  it("Test 3: By Xpath", () => {
    const clickByXpath = $("//h1[text()='CONTACT US']/../..");
    clickByXpath.click();
    browser.pause(2000);
  });

  it("Test 4: By CSS", () => {
    const clickByCSS = $("#contact-us h1");
    clickByCSS.click();
    browser.pause(2000);
  });
});
