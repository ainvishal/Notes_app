import { useEffect, useState } from "react";
import axios from 'axios'
import Noteblock from "./noteblock";
import Filter from "./filter";

export default function Dashboard() {
    const [notes, setnotes] = useState([]);
    const [search, setSearch] = useState('');


    // const fetchData = async() => {
    //     const response = await axios.get('http://localhost:3000/api/v1/Notes');
    //     if(response) {
    //         setnotes(response.data)
    //     }
    // }
    useEffect(() => {

        axios.get('http://localhost:3000/api/v1/Notes').then((res) => setnotes( res.data))

        console.log('effect')

    }, [])
    function handleChange(value) {
        const newNotes = []
        axios.get('http://localhost:3000/api/v1/Notes').then((res) => {
            for(let i =0;i<res.data.length; i++) {

                newNotes.push(res.data[i])

            }
            setnotes(newNotes.filter(note => note.title.toLowerCase().includes(value)))
        })
        setSearch(value)        
    }
    function handleAscendingClick() {

        const newNotes = [...notes].sort(function(a,b) { return new Date(a.time) -new Date(b.time)});
        setnotes(newNotes)
    }
    function handleDescendingClick() {

        const newNotes = [...notes].sort(function(a,b)  {return new Date(b.time) -new Date(a.time)});
        setnotes(newNotes)
    }
    return(
        <>
            <Filter value={search} onChange={(e) => handleChange(e.target.value)} onAcsendingclick={handleAscendingClick} onDescendingclick={handleDescendingClick}/>
            <div className="dashboard-main">
                {notes.map(note => <Noteblock key={note.id} id={note.id} title={note.title} description={note.description} url={note.url}/>)}
            </div>
        </>
    );
}