var PjsipPlugin = require("nativescript-pjsip-plugin").PjsipPlugin;
var pjsipPlugin = new PjsipPlugin();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(pjsipPlugin.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(pjsipPlugin.functionname()).toEqual(jasmine.any(Promise));
  });
});