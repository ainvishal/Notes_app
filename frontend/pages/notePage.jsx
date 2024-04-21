import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Inputfield from "../components/inputComponents/inputfield";
import Texteditor from "../components/inputComponents/texteditor";
import Videofield from "../components/inputComponents/videofield";

export default function NotePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;

    const id = data.id;
    const [titlename, settitle] = useState(data.title);
    const [descname, setdescription] = useState(data.description)
    const [url, seturl] = useState(data.url);


    return(
        <>
            <div className="main-page">
                <div className="note-page">
                    <h1>Enter the Notes </h1>
                    <Inputfield name={"title"} value={titlename} onChange={(e) => settitle(e.target.value)} />
                    <Texteditor value={descname} onChange={setdescription}/>
                    {/* <ReactPlayer url={"https://www.youtube.com/watch?v=Kbfp88Y6G6Q"} controls={true}/> */}
                    <Videofield url={url} seturl={seturl}/>
                    {/* <video width={250} height={100} controls><source src="" type="video/mp4"/></video> */}
                    {id===null ? <button onClick={async() => {
                       const newTime = new Date();
                       const response = await axios.post('http://localhost:3000/api/v1/Notes',{
                        title:titlename,
                        description:descname,
                        url:url,
                        time: newTime
                       })
                       
                       if(response) {
                        console.log(response)
                       }
                       else{
                        console.error('error occured while updating data')
                       }
                       navigate('/')
                    }}>Create new note</button> : <button onClick={async() => {
                        const newTime = new Date();
                        const response = await axios.put('http://localhost:3000/api/v1/Notes',{
                         id:id,
                         title:titlename,
                         description:descname,
                         url:url,
                         time: newTime
                        })
                        
                        if(response) {
                         console.log(response)
                        }
                        else{
                         console.error('error occured while updating data')
                        }
                        navigate('/')
                     }}>Update</button>}

                </div>
            </div>
        </>
    );
}