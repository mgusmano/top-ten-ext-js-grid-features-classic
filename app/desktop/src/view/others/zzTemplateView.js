Ext.define("TopTenExtJsGridFeaturesClassic.view.grid.TemplateView", {
    extend: "Ext.grid.Panel",
    xtype: 'TemplateView',
    title: "TemplateView",
    store: {
        data: [
            { name: "Lisa", email: "lisa@simpsons.com", phone: "555-111-1224" },
            { name: "Bart", email: "bart@simpsons.com", phone: "555-222-1234" },
            {
                name: "Homer",
                email: "homer@simpsons.com",
                phone: "555-222-1244",
            },
            {
                name: "Marge",
                email: "marge@simpsons.com",
                phone: "555-222-1254",
            },
        ],
    },
    columns: [
        { text: "Name", dataIndex: "name" },
        { text: "Email", dataIndex: "email" },
        { text: "Phone", dataIndex: "phone" },
    ],
});
