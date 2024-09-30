// Function to add a note
function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if (noteText !== "") {
        const noteList = document.getElementById('noteList');

        // Create a new note element
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        // Create note text
        const notePara = document.createElement('p');
        notePara.textContent = noteText;

        // Create timestamp
        const timePara = document.createElement('p');
        timePara.classList.add('time');
        const currentDate = new Date();
        timePara.textContent = `تمت الإضافة في: ${currentDate.toLocaleString()}`;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "إزالة";
        removeButton.classList.add('remove');
        removeButton.onclick = function() {
            noteDiv.remove();  // Remove the entire note div
        };

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = "تعديل";
        editButton.classList.add('edit');
        editButton.onclick = function() {
            // Put the note text back into the textarea for editing
            noteInput.value = notePara.textContent;
            // Add a save button or use the same add button to save changes
            noteInput.focus();  // Focus on the text area to start editing

            // Change the add button to a save button temporarily
            const saveButton = document.createElement('button');
            saveButton.textContent = "حفظ التعديلات";
            saveButton.classList.add('save');
            document.body.appendChild(saveButton);

            // Function to save the edited note
            saveButton.onclick = function() {
                notePara.textContent = noteInput.value;  // Update the note with new content
                noteInput.value = "";  // Clear the textarea
                saveButton.remove();   // Remove the save button after saving
            };
        };

        // Append the note, timestamp, remove and edit buttons to the noteDiv
        noteDiv.appendChild(notePara);
        noteDiv.appendChild(timePara);
        noteDiv.appendChild(editButton);
        noteDiv.appendChild(removeButton);

        // Append the noteDiv to the note list
        noteList.appendChild(noteDiv);

        // Clear the text area
        noteInput.value = "";
    }
}
