Template.items.helpers({

    moreResults: function () {
        var ctrl = Iron.controller();
        return ctrl.state.get('limit') < ctrl.count();
    }
});

Template.items.events({
    'click #showMoreResults': function (e) {
        e.preventDefault();
        var ctrl = Iron.controller();
        ctrl.state.set('limit', ctrl.state.get('limit') + ctrl.increment);
    },

    'click #facebook-login': function (event) {
        Meteor.loginWithFacebook({}, function (err) {
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },

    'click #logout': function (event) {
        Meteor.logout(function (err) {
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});

