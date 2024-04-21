import { useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Noteblock({ id,title, description, url}) {
    const noteRef = useRef();
    const navigate = useNavigate();
    let data = useMemo(() => {return {id: id,title: title, description: description, url:url}}, [id,title,description, url])
    useEffect(() => {
        const element = noteRef.current;

        const handleClick = () => {
            console.log('clicked')
            navigate('/note', { state:data})
        }
        element.addEventListener('click', handleClick)
        return () => {
            element.removeEventListener('click', handleClick)
        }
    }, [navigate, data])

    return (
        <>
            <div ref={noteRef} className="note-main" >
                <h2>Title : {title} </h2>
                <div dangerouslySetInnerHTML={{__html: description}}/> 
            </div>
        </>
    );
}