Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'items',
    template: 'items',
    controller: 'ItemsController'
});