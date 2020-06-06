describe("Test contact us logic via webdriveruni", () => {
    beforeEach(function () {
      browser.url("./");
    });
    
    it("Test 1: Test the contact us page", () => {
        const contactUsButton = $("#contact-us");
        contactUsButton.click();
        browser.switchWindow("Webdriver | Contact Us");

        const firstNameTextField = $("[name='first_name']");
        firstNameTextField.waitForDisplayed();
        browser.pause(2000);
        firstNameTextField.addValue('Add your text here');
        
        browser.pause(2000);

        firstNameTextField.clearValue();
        browser.pause(2000);

        firstNameTextField.setValue('Hello how are you');
        browser.pause(2000);


    }); 
  });
  