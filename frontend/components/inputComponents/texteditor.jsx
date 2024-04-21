import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function Texteditor({value, onChange}) {

    
    return(
        <>
            <div className="text-editor">
                <p>Description: </p>  
                <ReactQuill className='editor' theme='snow' value={value} onChange={onChange}/>
            </div>
        </>
    );

}