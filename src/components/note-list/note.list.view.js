var notesListView = {

    init: function() {
        // store the DOM element for easy access later
        this.notesListElem = document.getElementById('notes-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var note, elem, i;
        // get the notes we'll be rendering from the notesViewModel
        var notes = notesViewModel.getNotes();

        // empty the note list
        this.notesListElem.innerHTML = '';

        // loop over the notes
        for (i = 0; i < notes.length; i++) {
            // this is the note we're currently looping over
            note = notes[i];

            // make a new note list item and set its text
            elem = document.createElement('li');
            elem.textContent = note.title;

            // on click, setCurrentNote and render the noteView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the note variable to the click event function)
            elem.addEventListener('click', (function(noteCopy) {
                return function() {
                    notesViewModel.setCurrentNote(noteCopy);
                    noteView.render();
                };
            })(note));

            // finally, add the element to the list
            this.notesListElem.appendChild(elem);
        }
    }
};