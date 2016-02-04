/**
 * MenuRow Controller
 * 
 * represents a menu item
 * 
 * @class controllers.menuRow
 */

var args = arguments[0] || {};

/**
 * Initializes the row controller
 */
function init() {
  
  var icons = require('MaterialIcons');
  
  // set icon
  $.icon.text = String.fromCharCode(icons.charcode[args.icon]);
  
  // set title
  $.title.text = args.title;
  
  // bind info about associated controller
  $.menurow.controller = args.controller;

}

/**
 * Sets the row (in-)active
 * Called by menu
 * @param {Boolean} active
 */
$.menurow.setActive = function(_active) {
  $.menurow.setBackgroundColor( _active ? "#E8E8E8" : "#FAFAFA" );
};

init();