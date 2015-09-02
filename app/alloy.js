(function(){
  
  /**
   * @property {Object} drawer reference
   */
  Alloy.Globals.drawer = undefined;
  
  /**
   * @type {Alloy.Controller} menu  global menu reference
   */
  Alloy.Globals.menu = undefined;
  
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
   * @property {Array} backstack   Top-level view history
   * @private
   */
  var backstack = [];
  
  /**
   * optionsmenu dispatcher
   */
  Alloy.Globals.optionsMenu = function(e) {
    if (_.isUndefined(currentCtrl)){
      return;
    }
    
    if (OS_ANDROID){
      // sometimes we don't have a direct reference that we can pass through
      // but need to update the menu anyway
      if (!!e){
        e.menu.clear();
        currentCtrl.trigger('createOptionsMenu', e);
      }else{
        !!Alloy.Globals.menu && Alloy.Globals.menu.invalidateOptionsMenu();
      }
    }
    
    if (OS_IOS){
      currentCtrl.trigger('createOptionsMenu', e);
    }
  };
  
  /**
   * opens a new controller in drawer.contentView
   * and closes the old controller
   * @param {Alloy.Controller} Controller
   * @param {Boolean} wether this controller should be added to the backstack (defaults to true)
   */
  Alloy.Globals.open = function(_ctrl, _backstack) {
  
    if (currentCtrl) {
      Alloy.Globals.contentView.remove(currentCtrl.getView());
      _.isFunction(currentCtrl.cleanup) && currentCtrl.cleanup();
    }
  
    currentCtrl = _ctrl;
    Alloy.Globals.contentView.add(currentCtrl.getView());
    currentCtrl.init();
    
    if (_backstack && _.has(currentCtrl, 'id')){
	  !_.contains(backstack, currentCtrl.id) && backstack.push(currentCtrl.id);
	}
  };
  
  /**
   * closes current controller and re-opens the previous one
   * if backstack isn't empty
   */
  Alloy.Globals.back = function(){
    
    backstack.pop();
    
    if (!_.isEmpty(backstack)){
      var previousCtrlId = _.last(backstack);
      Alloy.Globals.menu.select(previousCtrlId, function(){
        Alloy.Globals.optionsMenu();
      }, false);
    }else{
      Ti.Android.currentActivity.finish();
    }
    
  };
  
})();