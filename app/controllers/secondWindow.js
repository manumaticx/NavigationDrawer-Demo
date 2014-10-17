var args = arguments[0] || {};

/**
 * Android callback for {Ti.UI.Window} open event
 */
function onOpen() {
  
  var activity = $.secondWindow.getActivity();

  if (activity) {

    var actionBar = activity.getActionBar();

    if (actionBar) {
      actionBar.displayHomeAsUp = true;
      actionBar.title = "Second Window";
      actionBar.onHomeIconItemSelected = function() {
        $.secondWindow.close();
      };
    }
  };

  return true;
}