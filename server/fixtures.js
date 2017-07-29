// Fixture data
if (Items.find().count() < 800) {
    for (var i = 1; i <= 801; i++) {
        Items.insert({
            value: i
        });
    }
}