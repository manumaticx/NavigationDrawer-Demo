function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onSelect(e) {
        if (e.row !== selected) {
            selectRow(e.row);
            _.defer(function() {
                Alloy.Globals.drawer.toggleLeftWindow();
            });
        }
    }
    function selectRow(_row) {
        selected && selected.setActive(false);
        selected = _row;
        selected.setActive(true);
        _.defer(function() {
            Alloy.Globals.open(Alloy.createController(_row.controller, {
                parent: args.parent
            }));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
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
    var __alloyId5 = [];
    $.__views.__alloyId6 = Alloy.createController("menurow", {
        title: "Home",
        controller: "main",
        id: "__alloyId6",
        __parentSymbol: __parentSymbol
    });
    __alloyId5.push($.__views.__alloyId6.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId9 = Alloy.createController("menurow", {
        title: "Search",
        controller: "search",
        id: "__alloyId9",
        __parentSymbol: __parentSymbol
    });
    __alloyId5.push($.__views.__alloyId9.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId12 = Alloy.createController("menurow", {
        title: "Likes",
        controller: "likes",
        id: "__alloyId12",
        __parentSymbol: __parentSymbol
    });
    __alloyId5.push($.__views.__alloyId12.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId15 = Alloy.createController("menurow", {
        title: "About",
        controller: "about",
        id: "__alloyId15",
        __parentSymbol: __parentSymbol
    });
    __alloyId5.push($.__views.__alloyId15.getViewEx({
        recurse: true
    }));
    $.__views.menu = Ti.UI.createTableView({
        data: __alloyId5,
        backgroundColor: "#3F3D3D",
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    onSelect ? $.__views.menu.addEventListener("click", onSelect) : __defers["$.__views.menu!click!onSelect"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var selected;
    exports.select = function(_index) {
        selectRow(_.first($.menu.getData()).getRows()[_index]);
    };
    __defers["$.__views.menu!click!onSelect"] && $.__views.menu.addEventListener("click", onSelect);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;