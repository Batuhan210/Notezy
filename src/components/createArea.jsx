import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';            // float action button
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }


    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({              
            title: "",
            content: ""
        });
        event.preventDefault();            
    }

    return (
        <div>
            <form className="create-note">
                { isExpanded ? <input  
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    placeholder="Title"
                /> : null }

                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    placeholder="Take a note..."
                    rows={ isExpanded ? 2 : 1 }
                    value={note.content} />

                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}
export default CreateArea;
