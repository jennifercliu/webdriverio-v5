const assert = require('assert');

describe("Test webdriveruni homepage", () => {
  it("Test 1: Validate the webdriveruni pagepage title is correct", () => {
      browser.url('./');
      const title = browser.getTitle();
      assert.strictEqual(title, 'WebDriverUniversity.com')
  });

});
