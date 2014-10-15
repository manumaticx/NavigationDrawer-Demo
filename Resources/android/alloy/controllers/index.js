function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function initDrawer() {
        var TiDrawerLayout = require("com.tripvi.drawerlayout");
        menu = Alloy.createController("menu", {
            parent: $.index
        });
        Alloy.Globals.contentView = Ti.UI.createView({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
        });
        Alloy.Globals.drawer = TiDrawerLayout.createDrawer({
            leftView: menu.getView(),
            centerView: Alloy.Globals.contentView,
            leftDrawerWidth: 240
        });
        Alloy.Globals.drawer.addEventListener("draweropen", onDrawerChange);
        Alloy.Globals.drawer.addEventListener("drawerclose", onDrawerChange);
        $.index.add(Alloy.Globals.drawer);
        $.index.open();
    }
    function onOpen() {
        var activity = $.index.getActivity();
        if (activity) {
            var actionBar = activity.getActionBar();
            activity.onCreateOptionsMenu = function(e) {
                e.menu.clear();
                e.activity = activity;
                e.actionBar = actionBar;
                Alloy.Globals.drawer.isLeftDrawerOpen ? actionBar.title = "TiDrawer Demo" : Alloy.Globals.optionsMenu(e);
            };
            if (actionBar) {
                actionBar.displayHomeAsUp = true;
                actionBar.title = "TiDrawer Demo";
                actionBar.onHomeIconItemSelected = function() {
                    Alloy.Globals.drawer.toggleLeftWindow();
                };
            }
        }
        init();
        return true;
    }
    function onDrawerChange() {
        $.index.getActivity().invalidateOptionsMenu();
    }
    function init() {
        menu.select(0);
        true && $.index.getActivity().invalidateOptionsMenu();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    onOpen ? $.__views.index.addEventListener("open", onOpen) : __defers["$.__views.index!open!onOpen"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var menu;
    initDrawer();
    __defers["$.__views.index!open!onOpen"] && $.__views.index.addEventListener("open", onOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;