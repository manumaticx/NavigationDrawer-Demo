/**
 * #Menu Controller
 * 
 * The menu is a TableView that automatically changes the contentView. The selection
 * can be don by user (click-event) or through the api (select method).
 * Selection causes the menu (drawer leftView) to close automatically.
 */

/**
 * @property {Object} args
 */
var args = arguments[0] || {};

/**
 * @property {Number} selected menu index
 */
var selected;

/**
 * TableView Click-listener Callback
 * @param {Object} event
 */
function onSelect(e) {
  if (e.row !== selected) {
    selectRow(e.row);
    _.defer(function() {
      Alloy.Globals.drawer.toggleLeftWindow();
    });
  }
}

/**
 * Select menu by row
 * @param {controllers.menuRow} Row
 * @param {Function}  callback  Callback
 * @param {Boolean}  addToBackstack  wether the controller should be added to the backstack
 *                   (default: true)
 */
function selectRow(_row, _callback, _addToBackstack) {
  if (selected) {
    selected.setActive(false);
  }

  selected = _row;
  selected.setActive(true);
  
  Alloy.Globals.open(Alloy.createController(_row.controller, {
    parent : args.parent,
  }), OS_ANDROID ? (_.isUndefined(_addToBackstack) || !!_addToBackstack) : false);
  
  !!_callback && _callback();
}

/**
 * Select menu item by index or id
 * @param {Number|String} Index / id
 * @param {Function} callback
 * @param {Boolean} backstack
 */
exports.select = function(_index, _cb, _addToBackstack) {
  var row;
  var rows = _.first($.menu.getData()).getRows();
  
  if (_.isNumber(_index)){
    row = rows[_index];
  } else {
    row = _.find(rows, function(_row){ return _row.controller === _index; });
  }
  
  !!row && selectRow(row, _cb, _addToBackstack);
};

/**
 * updates the Android optionsMenu
 * I've put this here since the menu controller should always have a reference
 * to the parent controller's activity
 */
exports.invalidateOptionsMenu = function() {
  _.has(args, 'parent') && args.parent.getActivity().invalidateOptionsMenu();
};
