Ext.define('TopTenExtJsGridFeaturesClassic.view.grid.DragAndDropViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.DragAndDropViewController',

  beforeRender: function() {
    var store = this.lookup('grid').store,
        data = (this.myData = []),
        obj;
    store.each(function(rec) {
      data.push(obj = Ext.apply({}, rec.data));
      delete obj.id;
    });
  },

  boxReady: function() {
    var form = this.lookup('form'),
        body = form.body;
    this.formPanelDropTarget = new Ext.dd.DropTarget(body, {
      ddGroup: 'grid-to-form',
      notifyEnter: function(ddSource, e, data) {
        body.stopAnimation();
        body.highlight();
      },
      notifyDrop: function(ddSource, e, data) {
        var selectedRecord = ddSource.dragData.records[0];
        form.getForm().loadRecord(selectedRecord);
        return true;
      }
    });
  },

  destroy: function() {
    var target = this.formPanelDropTarget;
    if (target) {
      target.unreg();
      this.formPanelDropTarget = null;
    }
    this.callParent();
  }
});