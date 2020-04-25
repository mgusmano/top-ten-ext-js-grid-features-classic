Ext.define("TopTenExtJsGridFeaturesClassic.store.NavigationTree", {
    extend: "Ext.data.TreeStore",

    storeId: "NavigationTree",
    root: {
        expanded: true,
        children: [
            {
                text: "PowerPoint Slides",
                view: "slides.SlidesView",
                leaf: true,
                iconCls: "x-fa fa-desktop",
                routeId: "slides",
            },
            {
                text: "Basic Grid",
                view: "grid.BasicGridView",
                leaf: true,
                iconCls: "x-fa fa-table",
                routeId: "basicGrid",
            },
            {
                text: "Buffered Store",
                view: "grid.ForumThreadView",
                leaf: true,
                iconCls: "x-fa fa-table",
                routeId: "gridForumThreadView",
            },
            {
                text: "Buffered Rendering",
                view: "grid.BufferedRenderingView",
                leaf: true,
                iconCls: "x-fa fa-fast-forward",
                routeId: "bufferedRendering",
            },
            {
                text: "New Grid Features",
                view: "grid.GridFeaturesView",
                leaf: true,
                iconCls: "x-fa fa-table",
                routeId: "gridFeatures",
            },
            {
                text: "Widget Grid",
                view: "grid.WidgetGridView",
                leaf: true,
                iconCls: "x-fa fa-table",
                routeId: "widgetGrid",
            },
            {
                text: "Salesperson Sales Grid",
                view: "grid.SalespersonSalesView",
                leaf: true,
                iconCls: "x-fa fa-dollar",
                routeId: "salespersonSales",
            },
            {
                text: "Pivot Salesperson Sales",
                view: "pivot.PivotView",
                leaf: true,
                iconCls: "x-fa fa-calculator",
                routeId: "pivot",
            },
            {
                text: "Remote Pivot",
                view: "pivot.RemotePivotView",
                leaf: true,
                iconCls: "x-fa fa-calculator",
                routeId: "remotepivot",
            },
            {
                text: "Chart Integration",
                view: "pivot.ChartIntegrationView",
                leaf: true,
                iconCls: "x-fa fa-bar-chart",
                routeId: "chartIntegration",
            },
            {
                text: "Country Sales Grid",
                view: "grid.CountrySalesGridView",
                leaf: true,
                iconCls: "x-fa fa-dollar",
                routeId: "countrySalesGrid",
            },
            {
                text: "Country Sales Pivot",
                view: "pivot.CountrySalesPivotView",
                leaf: true,
                iconCls: "x-fa fa-calculator",
                routeId: "countrySalesPivot",
            },
            {
                text: "Pivot Appearance",
                view: "pivot.PivotAppearanceView",
                leaf: true,
                iconCls: "x-fa fa-video-camera",
                routeId: "pivotAppearance",
            },
            {
                text: "Configurator/Exporter",
                view: "pivot.PivotConfiguratorView",
                leaf: true,
                iconCls: "x-fa fa-pencil-square-o",
                routeId: "pivotConfiguratorView",
            },
        ],
    },
    // fields: [
    //     {
    //         name: 'text'
    //     }
    // ]
});
