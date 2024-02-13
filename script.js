
//GLOBAL VARIABLES//

let notes = ['note01', 'note02', 'note03'];


function render() {

    let content = document.getElementById('content');
    content.innerHTML = ``;

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];

        content.innerHTML += `

            <div class="note">

                <b>${note}</b>

                <button id="delete" onclick="deleteNote(${i})">X</button>

            </div>

`;
    }
}

function saveNewNote(){

    let newNote = document.getElementById('newNoteText');

    notes.push(newNote.value);

    render();

}

function deleteNote(i){
notes.splice(i,1);
render();
}