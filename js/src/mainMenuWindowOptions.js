(function($) {

  $.MainMenuWindowOptions = function(options) {

    jQuery.extend(true, this, {
      menuContent:           null,
      windowOptionsMenuCls: 'window-options-menu'
    }, options);

    this.html = this.html || '<div/>';

    this.render();
    this.attachEvents();
  };


  $.MainMenuWindowOptions.prototype = {

    render: function() {
      this.html = $.Templates.mainMenu.windowOptionsMenu({
        windowOptionsMenuCls: this.windowOptionsMenuCls
      });
    },


    attachEvents: function() {
      var elCascadeAll          = '.' + this.windowOptionsMenuCls + ' .cascade-all',
          elTileAllVertically   = '.' + this.windowOptionsMenuCls + ' .tile-all-vertically',
          elTileAllHorizontally = '.' + this.windowOptionsMenuCls + ' .tile-all-horizontally',
          elStackAll2Cols       = '.' + this.windowOptionsMenuCls + ' .stack-all-vertically-2-cols',
          elStackAll3Cols       = '.' + this.windowOptionsMenuCls + ' .stack-all-vertically-3-cols',
          elCloseAll            = '.' + this.windowOptionsMenuCls + ' .close-all',
          _this                 = this;

      jQuery(document).on('click', elCascadeAll, function() {
        $.viewer.layout.cascadeAll();
      });

      jQuery(document).on('click', elTileAllVertically, function() {
        $.viewer.layout.tileAllVertically();
      });

      jQuery(document).on('click', elTileAllHorizontally, function() {
        $.viewer.layout.tileAllHorizontally();
      });

      jQuery(document).on('click', elStackAll2Cols, function() {
        $.viewer.layout.stackAllByColumns(2);
      });

      jQuery(document).on('click', elStackAll3Cols, function() {
        $.viewer.layout.stackAllByColumns(3);
      });

      jQuery(document).on('click', elCloseAll, function() {
        $.viewer.layout.closeAll();
      });
    }

  };

}(Mirador));