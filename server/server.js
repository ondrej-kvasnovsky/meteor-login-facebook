Meteor.startup(function () {
    ServiceConfiguration.configurations.remove({
        service: 'facebook'
    });

    ServiceConfiguration.configurations.insert({
        service: 'facebook',
        appId: '1669053626675197',
        secret: '5df937ac4af53e56b2d6b25712643202'
    });
});

//Meteor.publish("userData", function () {
//    if (this.userId) {
//        return Meteor.users.find(
//            {_id: this.userId},
//            {fields: {'username': 1, 'things': 1}}
//        );
//    } else {
//        this.ready();
//    }
//});