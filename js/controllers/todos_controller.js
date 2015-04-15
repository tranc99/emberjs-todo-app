Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function() {
            // get the todo set by the "New Todo" text field
            var title = this.get('newTitle');
            if (!title.trim) { return; }

            // create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            // clear the "New Todo" text field
            this.set('newTitle', '');

            // save the new model
            todo.save();
        }
    }
})
