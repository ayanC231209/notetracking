import React from 'react'
import { useState } from 'react'
import API from '../services/api'
import { useEffect } from 'react'

const Notes = () => {

const userEmail=localStorage.getItem("email")
const [notes,setNotes]=useState([])
const [title,setTitle]=useState("")
const [description,setDescription]=useState("")
const [editId,setEditId]=useState(null)

const fetchnotes= async()=>{
const res=await API.get(`/notes/${userEmail}`)
setNotes(res.data)
}

useEffect(()=>{
    fetchnotes()
},[]

)



const addNote=async()=>{
await API.post('/notes',{title,description,userEmail})
setTitle("")
setDescription("")
fetchnotes()

}

const updateNote=async()=>{
await API.put(`/notes/${editId}`,{title,description})
setEditId(null)
setTitle("")
setDescription("")
fetchnotes()


}

const startEdit = (note)=>{
    setEditId(note._id)
    setTitle(note.title)
    setDescription(note.description)
}

const deleteNote =async (id)=>{

    await API.delete(`/notes/${id}`)
    fetchnotes()
}


  return (
    <div>
     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Title</legend>
  <input type="text" className="input" placeholder="Note Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
  
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Note description</legend>
  <textarea className="textarea h-24" placeholder="what are you feeling" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
   
   {editId ?(
    <button class="btn" onClick={updateNote}>Update</button>
   ) :(
    <button class="btn" onClick={addNote}>Add</button>
   )}
</fieldset>

{notes.map((note)=>(
    <div key={note._id}>
        <h4>{note.title}</h4>
        <p>{note.description}</p>
        <button class="btn" onClick={()=>startEdit(note)}>Edit</button>
        <button class="btn " onClick={()=>deleteNote(note._id)}>Delete</button>


    </div>

))}
</div>
  )}
export default Notes
