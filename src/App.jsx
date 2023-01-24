import React, { useState } from 'react'
import Input from './Input'
import Nav from './Nav'
import Note from './Note'
const App = () => {

    const [one,setOne] = useState("secondary");
    const [theme,setTheme] = useState("black");
    const [note,setNote] = useState([])
    const changeColor = () =>{
        if(one==="secondary"){
            setOne("dark");
            document.body.style.backgroundColor="#343a40";
            document.body.style.color="white";
            setTheme("white");
        }
        else{
            setOne("secondary")
            document.body.style.backgroundColor="white";
            document.body.style.color="black";
            setTheme("black");
        }
    }


    const addNote = (matter) =>{
        setNote((preVal)=>{
            return  [...preVal,matter];
        })
    }

    const removeItems = (id) =>{
        setNote((preVal)=>{
                return preVal.filter((val,index)=>{
                    return index !== id;
                })
        })
    }

    return (
        <>
            <Nav firstOne = {one} sec = {theme}/>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={changeColor} type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
            </div>
            <Input getData = {addNote}/>
            
            {note.map((val,index)=>{
                return <Note
                    key={index}
                    id = {index}
                    title = {val.title}
                    content = {val.task}
                    deleteItems = {removeItems}
                />
            })}
        </>
    )
}

export default App
