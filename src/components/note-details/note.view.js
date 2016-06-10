var noteView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.noteElem = document.getElementById('note');
        this.titleElem = document.getElementById('title');
        this.descriptionElem = document.getElementById('description');
        this.finishedElem = document.getElementById('finished');
        this.ratingElem = document.getElementById('rating');
        this.duedateElem = document.getElementById('duedate');
        this.createdateElem = document.getElementById('createdate');
        this.categoryElem = document.getElementById('category');

        // on click, increment the current note's counter
        //this.noteImageElem.addEventListener('click', function(){
        //    notesViewModel.incrementCounter();
        //});

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current note
        var currentNote = notesViewModel.getCurrentNote();
        
        this.titleElem.textContent = currentNote.title;
        this.finishedElem.textContent = currentNote.finished;
        this.descriptionElem.textContent = currentNote.description;
        this.ratingElem.textContent = currentNote.rating;
        this.duedateElem.textContent = currentNote.duedate;
        this.createdateElem.textContent = currentNote.createdate;
        this.categoryElem.textContent = currentNote.category;

    }
};
