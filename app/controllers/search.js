var args = arguments[0] || {};

/**
 * Callback for Android OptionsMenu
 */
function onCreateOptionsMenu(e) {
  
  var abx = require('com.alcoapps.actionbarextras');
  
  if (e.actionBar) {
    e.actionBar.title = "Search";
  }
  
  // Search Action 
  var searchItem = e.menu.add({
    itemId: 101,
    title : "Search",
    showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
  });
  
  abx.setMenuItemIcon({
    menu: e.menu,
    menuItem: searchItem,
    fontFamily: 'MaterialIcons-Regular',
    icon: String.fromCharCode(0xe8b6),
    color: "#fff",
    size: 30
  });
  
  // Add Action
  var addItem = e.menu.add({
    itemId: 102,
    title : "Add",
    showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
  });
  
  abx.setMenuItemIcon({
    menu: e.menu,
    menuItem: addItem,
    fontFamily: 'MaterialIcons-Regular',
    icon: String.fromCharCode(0xe145),
    color: "#fff",
    size: 30
  });

}

/**
 * Cleans up the controller
 * 
 * http://www.tidev.io/2014/09/18/cleaning-up-alloy-controllers/
 */
function cleanup() {
  $.off();
}

/**
 * Initializes the controller
 */
function init() {
  
  $.on('createOptionsMenu', onCreateOptionsMenu);

}

// PUBLIC
exports.id = 'search';
exports.cleanup = cleanup;
exports.init = init;