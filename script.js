
//GLOBAL VARIABLES//

let notes = [];
let dates = [];
let deletednotes = [];
let deleteddates = [];

load();
loadDeleted();

//RENDER NOTES//
function render() {

    let content = document.getElementById('content');
    content.innerHTML = ``;

    let newNoteText = document.getElementById('newNoteText');
    newNoteText.value = ``;

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];

        content.innerHTML += `

            <div class="note">
                <b>${note}</b>
                <button id="delete" onclick="deleteNote(${i})">X</button>
            </div>
`;
    }
    document.getElementById('home').classList.add('d-none');
    document.getElementById('trash').classList.remove('d-none');
}

//RENDER DELETED//
function renderDeleted() {

    let content = document.getElementById('content');
    content.innerHTML = ``;



    for (let i = 0; i < deletednotes.length; i++) {
        const delnote = deletednotes[i];

        content.innerHTML += `

            <div class="note">
                <b>${delnote}</b>
                <button id="delete" onclick="deleteNote(${i})">restore</button>
            </div>
`;
    }

    document.getElementById('trash').classList.add('d-none');
    document.getElementById('home').classList.remove('d-none');
}

function saveNewNote() {

    let newNote = document.getElementById('newNoteText');
    notes.push(newNote.value);

    save();
    render();
}

function deleteNote(i) {

    const yesDelete = confirm("delete note ?");
    if (yesDelete) {

        deletednotes.push(notes[i]);
        notes.splice(i, 1);
        save();
        render();
    }

    else { }
}

function save() {

    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('notesAsTextSaved', notesAsText);

    let deletedNotesAsText = JSON.stringify(deletednotes);
    localStorage.setItem('deletedNotesAsTextSaved', deletedNotesAsText);

}

function load() {

    let notesAsText = localStorage.getItem('notesAsTextSaved');
    let deletedNotesAsText = localStorage.getItem('deletedNotesAsTextSaved');

    if (notesAsText && deletedNotesAsText) {
        notes = JSON.parse(notesAsText);
        deletenotes = JSON.parse(deletedNotesAsText);
    }

}

function loadDeleted() {

    let deletedNotesAsText = localStorage.getItem('deletedNotesAsTextSaved');

    if (deletedNotesAsText) {
        deletednotes = JSON.parse(deletedNotesAsText);
    }

}

function getSaveDate() {
    let now = new Date;
    let datumAsString = now.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    console.log(datumAsString);
}