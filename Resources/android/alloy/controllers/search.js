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
        e.actionBar && (e.actionBar.title = "Search");
        e.menu.add({
            title: "Search",
            icon: "/images/ic_action_search.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
        });
        e.menu.add({
            title: "Add",
            icon: "/images/ic_action_new.png",
            showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
        });
    }
    function destroy() {
        $.off();
    }
    function init() {
        $.on("createOptionsMenu", onCreateOptionsMenu);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search";
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
    $.__views.search = Ti.UI.createView({
        onCreateOptionsMenu: "onCreateOptionsMenu",
        id: "search"
    });
    $.__views.search && $.addTopLevelView($.__views.search);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        text: "Search view",
        id: "__alloyId16"
    });
    $.__views.search.add($.__views.__alloyId16);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    exports.destroy = destroy;
    exports.init = init;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;