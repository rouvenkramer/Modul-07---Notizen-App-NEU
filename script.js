
//GLOBAL VARIABLES//

let notes = [];
let dates = [];
let deletednotes = [];
let deleteddates = [];

load();
loadDeleted();

//RENDER NOTES//
function render() {

    document.getElementById('newNoteText').classList.remove('d-none');
    document.getElementById('saveNewNote').classList.remove('d-none');

    let content = document.getElementById('content');
    content.innerHTML = ``;

    let newNoteText = document.getElementById('newNoteText');
    newNoteText.value = ``;

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        const date = dates[i];

        content.innerHTML += `

            <div class="note">

                <div class ="noteHeader">
                    <p>${date}</p>
                    <button id="delete" onclick="deleteNote(${i})"><b>X</b></button>
                </div>

                <b>${note}</b>
                    
            </div>
`;
    }

}


//RENDER DELETED//
function renderDeleted() {

    document.getElementById('newNoteText').classList.add('d-none');
    document.getElementById('saveNewNote').classList.add('d-none');
 

    let content = document.getElementById('content');
    content.innerHTML = ``;

    for (let i = 0; i < deletednotes.length; i++) {
        const delnote = deletednotes[i];
        const deldate = deleteddates[i];

        content.innerHTML += `

            <div class="deletednote">

                <div class ="noteHeader">
                    <p>${deldate}</p>
                    <button id="restore" onclick="restoreNote(${i})">restore</button>
                    <button id="terminate" onclick="terminateNote(${i})">XX</button>
                 </div>

                 <b>${delnote}</b>
            </div>
`;
    }

}

//SAVE NEW NOTE TO ARRAY//
function saveNewNote() {

    let now = new Date;
    let datumAsString = now.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    });

    let newNote = document.getElementById('newNoteText');
    notes.push(newNote.value);
    dates.push(datumAsString);

    save();
    render();
}


//DELETE/MOVE NOTE FROM ARRAY//
function deleteNote(i) {

    const yesDelete = confirm("delete note ?");
    if (yesDelete) {

        deletednotes.push(notes[i]);
        deleteddates.push(dates[i]);
        notes.splice(i, 1);
        dates.splice(i, 1);
        save();
        render();
    }

    else { }
}

//MOVE NOTE TO NOTES ARRAY//
function restoreNote(i) {

    const yesRestore = confirm("restore note ?");
    if (yesRestore) {

        notes.push(deletednotes[i]);
        dates.push(deleteddates[i]);
        deletednotes.splice(i, 1);
        deleteddates.splice(i, 1);
        save();
        renderDeleted();
    }

    else { }
}

//SAVE TO LOCAL STORAGE//
function save() {

    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('notesAsTextSaved', notesAsText);

    let datesAsText = JSON.stringify(dates);
    localStorage.setItem('datesAsTextSaved', datesAsText);

    let deletedNotesAsText = JSON.stringify(deletednotes);
    localStorage.setItem('deletedNotesAsTextSaved', deletedNotesAsText);

    let deletedDatesAsText = JSON.stringify(deleteddates);
    localStorage.setItem('deletedDatesAsTextSaved', deletedDatesAsText);

}

//LOAD FROM LOCAL STORAGE//
function load() {

    let notesAsText = localStorage.getItem('notesAsTextSaved');
    let datesAsText = localStorage.getItem('datesAsTextSaved');

    if (notesAsText && datesAsText) {
        notes = JSON.parse(notesAsText);
        dates = JSON.parse(datesAsText);
    }

}

//LOAD DELETED FROM LOCAL STORAGE//
function loadDeleted() {

    let deletedNotesAsText = localStorage.getItem('deletedNotesAsTextSaved');
    let deletedDatesAsText = localStorage.getItem('deletedDatesAsTextSaved');

    if (deletedNotesAsText && deletedDatesAsText) {
        deletednotes = JSON.parse(deletedNotesAsText);
        deleteddates = JSON.parse(deletedDatesAsText);
    }

}

//TIME STAMP//
function getSaveDate() {
    let now = new Date;
    let datumAsString = now.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    });
    console.log(datumAsString);
}