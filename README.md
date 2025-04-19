This app provides a user-friendly interface for adding new notes with a title and content.

Features:
1. Dynamic Expansion: The input field for the note title appears dynamically when the user clicks on the text area.
2. Form Submission: Users can submit their notes using a floating action button (FAB) with a plus icon.
3. Auto-Clear Form: After submitting a note, the input fields are automatically cleared.
4. Smooth Animation: The FAB button uses a Zoom animation for a smooth user experience.

State Management:
isExpanded: Tracks whether the form is expanded to show the title input field.
note: Stores the current note's title and content.
Event Handlers:

expand(): Expands the form to show the title input field when the text area is clicked.
handleChange(event): Updates the note state as the user types in the input fields.
submitNote(event): Sends the note data to the parent component via the onAdd prop and resets the form fields.
Props:
onAdd: A function passed from the parent component to handle adding a new note.

Dependencies
Material-UI: Used for the floating action button (Fab) and the zoom animation (Zoom).
React State Hooks: Used to manage the component's state.

![Screenshot 2025-04-19 174445](https://github.com/user-attachments/assets/36f9fe5d-e1e9-450b-8863-9b6638708ea5)
