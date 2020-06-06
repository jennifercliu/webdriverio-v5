describe("IFrame test", () => {
    beforeEach(function () {
      browser.url("./IFrame/index.html");
    });
    
    it("Test 1: Test the clicking if a given button house within an IFrame", () => {
    const iframe= $("#frame");
    browser.switchToFrame(iframe);

    const findOutMore_Button = $("//*[text()='Our Products']");
    findOutMore_Button.waitForDisplayed();
    findOutMore_Button.click();
    browser.pause(5000);
    
    }); 
  });
  