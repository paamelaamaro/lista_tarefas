$(document).ready(function() {
    // Adicionar nova tarefa
    $('#add-task').click(function() {
        var taskText = $('#new-task').val().trim();

        if (taskText) {
            var newTask = $('<li>').text(taskText);
            
            var removeButton = $('<button>')
                .text('Remover')
                .addClass('remove')
                .click(function() {
                    $(this).parent().remove();
                });


            var completeButton = $('<button>')
                .text('Concluída')
                .click(function() {
                    $(this).parent().toggleClass('completed');
                });


            newTask.append(completeButton).append(removeButton);


            $('#task-list').append(newTask);


            $('#new-task').val('');
        }
    });

    
    $('#new-task').keypress(function(event) {
        if (event.which === 13) {
            $('#add-task').click();
        }
    });
});