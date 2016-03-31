var args = arguments[0] || {};

/**
 * Button Click handler
 */
function openWindow(e){
  Ti.UI.createWindow({ title: "New Window" }).open();
};

/**
 * Callback for Android OptionsMenu
 */
function onCreateOptionsMenu(e) {
  
  var abx = require('com.alcoapps.actionbarextras');
  
  if (e.actionBar) {
    e.actionBar.title = "Main";
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

  // Refresh Action
  var refreshItem = e.menu.add({
    itemId: 102,
    title : "Refresh",
    showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
  });
  
  abx.setMenuItemIcon({
    menu: e.menu,
    menuItem: refreshItem,
    fontFamily: 'MaterialIcons-Regular',
    icon: String.fromCharCode(0xe5d5),
    color: "#fff",
    size: 30
  });
  
  // additional overflow menu item
  e.menu.add({
    title : "Main option",
    showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
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
exports.id = 'main';
exports.cleanup = cleanup;
exports.init = init