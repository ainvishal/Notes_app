import { useNavigate } from "react-router";


export default function NewNotesbutton() {
    const navigate = useNavigate()
    return(
        <>
            <div className="create-button">
                <button onClick={() => {
                    navigate('/note',{state:{id:null,title:'',description:'',url:''}})
                }}>Create New Notes</button>
            </div>
        </>
    );
}