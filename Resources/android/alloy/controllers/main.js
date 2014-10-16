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
        e.actionBar && (e.actionBar.title = "Main");
        e.menu.add({
            title: "Search",
            icon: "/images/ic_action_search.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
        });
        e.menu.add({
            title: "Refresh",
            icon: "/images/ic_action_refresh.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
        });
        e.menu.add({
            title: "Main option",
            showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER
        });
    }
    function destroy() {
        $.off();
    }
    function init() {
        $.on("createOptionsMenu", onCreateOptionsMenu);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
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
    $.__views.main = Ti.UI.createView({
        onCreateOptionsMenu: "onCreateOptionsMenu",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "Main view",
        id: "__alloyId2"
    });
    $.__views.main.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    exports.destroy = destroy;
    exports.init = init;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;