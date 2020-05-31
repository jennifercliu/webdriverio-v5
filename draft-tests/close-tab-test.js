const assert = require("assert");
beforeEach(() => {
  browser.url("./");
});

describe("Selectors test", () => {
  it("Test 1: By ID", () => {
    const clickById = $("#contact-us");
    clickById.click();

    console.log("HOMEPAGE HEADER: " + browser.getTitle());
    browser.pause(1000);

    browser.switchWindow("WebDriver | Contact Us");
    console.log("CONTACT US HEADER: " + browser.getTitle());
    browser.pause(1000);
    browser.closeWindow();
    browser.pause(1000);
  });
});
