function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menurow";
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
    $.__views.menurow = Ti.UI.createTableViewRow({
        height: "50",
        id: "menurow"
    });
    $.__views.menurow && $.addTopLevelView($.__views.menurow);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Menu Item",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId0"
    });
    $.__views.menurow.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;