import { useState } from "react";
import ReactPlayer from "react-player";

export default function Videofield({url, seturl}) {
    
    const [isValid, setvalid] = useState(true);
    const [show, setshow] = useState(false);
    return(
        <>
            <div className="video-field">
                <input type="text" value={url} onChange={(e) => seturl(e.target.value)}/>
                <button onClick={() => {
                    if( url.includes("https://")) {
                        setvalid(true);
                        setshow(true);
                    }
                    else{
                        setvalid(false)
                    }
                }}>Click</button>
                <button onClick={() => setshow(false)}>Hide</button>
                {!isValid && <p>Invalid url</p>}
                {(isValid && show)? <ReactPlayer  url={url} controls={true} width={"300px"} height={"200px"}/> :
                null}
            </div>
        </>
    );
}