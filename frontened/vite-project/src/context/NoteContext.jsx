

import { children, createContext, useEffect, useState } from "react";
import BACKENF_URL from "../api/url";

export const NoteContext = createContext();

export const NoteProvider=({children}) =>{

    const [notes,setNotes] = useState([]);
const [loading,setLoading] = useState(true);

const getNotes = async() =>{
    setLoading(true);
    try {
        const response = await BACKENF_URL.get("/getnote");
        setNotes(response.data)
    } catch (error) {
        console.log("Error fetching notes",error);
    } finally{
        setLoading(false)
    }
}
useEffect( ()=>{
    getNotes();
}, [])


const createNote = async(note) =>{
    const res = await BACKENF_URL.post("/createnote",note)
    setNotes([res.data,...notes])
}

const updateNote = async(id, updateNote) =>{
    const res = await BACKENF_URL.put(`/updatenote/${id}`,updateNote)
    setNotes(notes.map((note) =>(note._id===id ? res.data : note)))
}

const deleteNote = async(id) =>{
    const res = await BACKENF_URL.delete(`/deletenote/${id}`)
    setNotes(notes.filter((note) =>(note._id!==id)))
}

return (
    <NoteContext.Provider value = {{notes,loading,createNote,updateNote,deleteNote}}>
          {children}
    </NoteContext.Provider>
)
}