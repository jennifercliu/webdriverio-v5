describe("Inject javascript into the target website", () => {
    beforeEach(function () {
      browser.url("./");
    });
    
    it("Change webdriveruni background color", () => {
     
     browser.execute( ()=> {
        return (document.body.style.backgroundColor = "rgba(100,149,237,.8)");
     });

     browser.pause(5000);

    }); 
  });
  