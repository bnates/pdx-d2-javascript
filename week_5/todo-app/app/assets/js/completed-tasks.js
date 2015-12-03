(function($) {

    function CompletedTasks() { };

    CompletedTasks.prototype = {

        config: {
            current: '.current-tasks .item',
            currentBtn: '.current-tasks button',
            completed: '.completed-tasks',
            completedBtn: '.completed-tasks button'
        },

        completeTask: function() {
            var self = this;

            $(this.config.currentBtn).on('click', function() {
                var $item = $(this).parent().find('.item'),
                      $text = $item.text(),
                      $idx = $item.parent().data('idx'),
                      $complete = $(self.config.completed).find('ul');


                $(this).parent().remove();
                localStorage.setItem('item_' + $idx, $text);

                $complete.append('<li>' + $text + '</li>');
            });
        },

        removeAll: function() {

        },

        persist: function() {
            this.completeTask();
        },

        init: function() {
            this.persist();
        }

    }

    var completedTasks = new CompletedTasks();

    $(document).ready(function() {
        completedTasks.init();
    });

}(jQuery));
