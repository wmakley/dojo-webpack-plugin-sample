define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin"
  ], function(declare, _WidgetBase, _TemplatedMixin) {
    return declare("myapp.CustomWidget", [_WidgetBase, _TemplatedMixin], {
        constructor: function () {},

        templateString: '<div>It works!!!</div>'
    });
});