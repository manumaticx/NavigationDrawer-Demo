/**
 * #Index Controller
 * 
 * Here is where we setup the drawer layout and create a global reference.
 * Since the activity behind the index window will be the only access point
 * for the ActionBar and the optionsMenu, we also setup a forwarding
 * mechanism for nested controllers (content views).
 * 
 * We want to use the drawer for our top-level-navigation. So, each content
 * view is represented as an element in the menu, which will act as the
 * leftView of the drawer.
 * 
 * Initialization works as follows:
 *  1. init drawer
 *  2. open index window
 *  3. setup actionbar, optionsMenu
 *  4. init content view
 * 
 * Every content view is a separate controller which can have its own
 * ActionBar setup and optionsMenu.
 */

/**
 * @property {controllers.menu} references Menu
 */
var menu;

initDrawer();

/**
 * initializes drawer navigation
 */
function initDrawer() {
  // Android only
  if (OS_ANDROID) {
    
    // Load module
    var TiDrawerLayout = require('com.tripvi.drawerlayout');
    
    // define menu and main content view
    menu = Alloy.createController('menu', {
      parent : $.index
    });
    
    // this is just a wrapper
    // actual content views are add to this later
    Alloy.Globals.contentView = Ti.UI.createView({
      width : Ti.UI.FILL,
      height : Ti.UI.FILL
    });

    Alloy.Globals.drawer = TiDrawerLayout.createDrawer({
      leftView : menu.getView(),
      centerView : Alloy.Globals.contentView,
      leftDrawerWidth : 240,
      drawerArrowIcon : true,
      drawerArrowIconColor : '#A48600'
    });

    Alloy.Globals.drawer.addEventListener('draweropen', onDrawerChange);
    Alloy.Globals.drawer.addEventListener('drawerclose', onDrawerChange);

    $.index.add(Alloy.Globals.drawer);
    
  }
  
  $.index.open();
}

/**
 * Android callback for {Ti.UI.Window} open event
 */
function onOpen() {
  
  var activity = $.index.getActivity();

  if (activity) {

    var actionBar = activity.getActionBar();

    activity.onCreateOptionsMenu = function(e) {
      e.menu.clear();

      e.activity = activity;
      e.actionBar = actionBar;

      if (!Alloy.Globals.drawer.isLeftDrawerOpen) {
        // use a global method to forward this event to the nested controller
        Alloy.Globals.optionsMenu(e);
      } else {
        actionBar.title = "TiDrawer Demo";
      }
      
      // Here, we add an Overflow Menu with options that are visible on every window
      // (you can still hook other options into the overflow)
      
      e.menu.add({
        title : "Help",
        showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
      });
      
      e.menu.add({
        title : "Settings",
        showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
      });
    };

    if (actionBar) {
      actionBar.displayHomeAsUp = false;
      actionBar.title = "TiDrawer Demo";
      actionBar.onHomeIconItemSelected = function() {
        Alloy.Globals.drawer.toggleLeftWindow();
      };
    }
  };
  
  init();

  return true;
}

/**
 * callback for drawer open / close event
 * @param {Object} event
 */
function onDrawerChange(e) {
  $.index.getActivity().invalidateOptionsMenu();
}

/**
 * initializes the Controller
 */
function init() {
  menu.select(0);
  OS_ANDROID && $.index.getActivity().invalidateOptionsMenu();
}