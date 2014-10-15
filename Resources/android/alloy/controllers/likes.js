function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onCreateOptionsMenu(e) {
        e.actionBar && (e.actionBar.title = "Likes");
    }
    function destroy() {
        $.off();
    }
    function init() {
        $.on("createOptionsMenu", onCreateOptionsMenu);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "likes";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.likes = Ti.UI.createView({
        onCreateOptionsMenu: "onCreateOptionsMenu",
        id: "likes"
    });
    $.__views.likes && $.addTopLevelView($.__views.likes);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Likes view",
        id: "__alloyId1"
    });
    $.__views.likes.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    exports.destroy = destroy;
    exports.init = init;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;