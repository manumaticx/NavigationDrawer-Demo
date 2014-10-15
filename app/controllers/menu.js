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
 */
function selectRow(_row) {
  if (selected) {
    selected.setActive(false);
  }

  selected = _row;
  selected.setActive(true);

  _.defer(function() {
    Alloy.Globals.open(Alloy.createController(_row.controller, {
      parent : args.parent
    }));
  });
}

/**
 * Select menu by index
 * @param {Number} Index
 */
exports.select = function(_index) {
  selectRow(_.first($.menu.getData()).getRows()[_index]);
};
