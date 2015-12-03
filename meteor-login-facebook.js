if (Meteor.isClient) {

  Router.route('/', function () {
  this.render('hello');
});

  // counter starts at 0
  Session.setDefault('counter', 0);
  Meteor.subscribe("userData");

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
 
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  ServiceConfiguration.configurations.remove({
    service: 'facebook'
  });
   
  ServiceConfiguration.configurations.insert({
      service: 'facebook',
      appId: '1669053626675197',
      secret: '5df937ac4af53e56b2d6b25712643202'
  });

  Meteor.publish("userData", function () {
    if (this.userId) {
      return Meteor.users.find({_id: this.userId},
                               {fields: {'username': 1, 'things': 1}});
    } else {
      this.ready();
    }
});
}
