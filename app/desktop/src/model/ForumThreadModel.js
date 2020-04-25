Ext.define('TopTenExtJsGridFeaturesClassic.model.ForumThreadModel', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'title',
            mapping: 'topic_title'
        },
        {
            name: 'forumtitle',
            mapping: 'forum_title'
        },
        {
            name: 'forumid',
            type: 'int'
        },
        {
            name: 'username',
            mapping: 'author'
        },
        {
            name: 'replycount',
            mapping: 'reply_count',
            type: 'int'
        },
        {
            name: 'lastpost',
            mapping: 'post_time',
            type: 'date',
            dateFormat: 'timestamp'
        },
        'lastposter', 'excerpt', 'topic_id'
    ],
    idProperty: 'post_id'
});