ItemsController = InfiniteScrollingController.extend({
    template: 'items',
    increment: 16,

    limit: function () {
        return this.state.get('limit') || this.increment;
    },

    subscriptions: function () {
        //Meteor.subscribe('gifsCount')
        return Meteor.subscribe('items',
            {
                sort: {
                    gifName: -1
                },
                limit: this.limit()
            }
        );
    },

    items: function () {
        if (this.ready()) {
            var items = Items.find({}, {
                sort: {
                    createdAt: -1
                },
                limit: this.limit()
            });
        //.fetch();

            console.log('data: ' + items.length);

            //var result = [];
            //for (var i = 0; i < items.length;) {
            //
            //    var gif1 = items[i++];
            //    var gif2 = items[i++];
            //    var gif3 = items[i++];
            //    var gif4 = items[i++];
            //    result[i] = {
            //        column1: (gif1) ? gif1.gifName : '',
            //        column2: (gif2) ? gif2.gifName : '',
            //        column3: (gif3) ? gif3.gifName : '',
            //        column4: (gif4) ? gif4.gifName : ''
            //    };
            //}
            return {
                items: items
            };
        }

    },

    data: function () {
        return this.items();
    },

    count: function () {
        var gifsCount = Counts.get('itemsCount');
        return gifsCount;
    },

    action: function () {
        if (this.ready()) {
            this.render();
        } else {
            this.next();
        }
    }
});