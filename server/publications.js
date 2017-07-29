// https://github.com/percolatestudio/publish-counts

Meteor.publish('items', function (options) {

    Counts.publish(this, 'itemsCount', Items.find({}, {
        noReady: true
    }));

    return Items.find({}, options);
});