var args = arguments[0] || {};

/**
 * Callback for Android OptionsMenu
 */
function onCreateOptionsMenu(e) {
  if (e.actionBar) {
    e.actionBar.title = "Search";
  }
  
  // Search Action 
  e.menu.add({
    title : "Search",
    icon : "/images/ic_action_search.png",
    showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
  });
  
  // Add Action
  e.menu.add({
    title : "Add",
    icon : "/images/ic_action_new.png",
    showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM
  });

}

/**
 * Cleans up the controller
 * 
 * http://www.tidev.io/2014/09/18/cleaning-up-alloy-controllers/
 */
function destroy() {
  $.off();
}

/**
 * Initializes the controller
 */
function init() {

  $.on('createOptionsMenu', onCreateOptionsMenu);

}

// PUBLIC
exports.destroy = destroy;
exports.init = init;