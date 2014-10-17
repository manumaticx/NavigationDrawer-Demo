(function(){
  
  /**
   * @property {Object} drawer reference
   */
  Alloy.Globals.drawer = undefined;
  /**
   * @property {Ti.UI.View} contentView 
   */
  
  Alloy.Globals.contentView = undefined;
  
  /**
   * @property {Alloy.Controller} currentCtrl   references current Controller
   * @private
   */
  var currentCtrl;
  
  /**
   * optionsmenu dispatcher
   */
  Alloy.Globals.optionsMenu = function(e) {
    currentCtrl.trigger('createOptionsMenu', e);
  };
  
  /**
   * opens a new controller in drawer.contentView
   * and closes the old controller
   * @param {Alloy.Controller} Controller
   */
  Alloy.Globals.open = function(_ctrl) {
  
    if (currentCtrl) {
      Alloy.Globals.contentView.remove(currentCtrl.getView());
      _.isFunction(currentCtrl.destroy) && currentCtrl.destroy();
    }
  
    currentCtrl = _ctrl;
    Alloy.Globals.contentView.add(currentCtrl.getView());
    currentCtrl.init();
  };
  
})();