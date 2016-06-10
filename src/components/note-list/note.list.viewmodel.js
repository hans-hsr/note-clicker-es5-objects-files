var notesViewModel = {

    init: function() {
        // set our current note to the first one in the list
        noteModel.currentNote = noteModel.notes[0];

        // tell our views to initialize
        notesListView.init();
        noteView.init();
    },

    getCurrentNote: function() {
        return noteModel.currentNote;
    },

    getNotes: function() {
        return noteModel.notes;
    },

    // set the currently-selected note to the object passed in
    setCurrentNote: function(note) {
        noteModel.currentNote = note;
    },

    // increments the counter for the currently-selected note
    incrementCounter: function() {
        noteModel.currentNote.clickCount++;
        noteView.render();
    }
};




