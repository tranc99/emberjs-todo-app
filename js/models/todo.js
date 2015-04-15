Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'Learn Russian',
        isCompleted: true
    },
    {
        id: 2,
        title: 'aerospace, electronics, engineering math',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Some cutting edge engineering!',
        isCompleted: false
    }
];
