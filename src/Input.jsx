import React, { useState } from 'react'

const Input = (props) => {

    const [matter, setMatter] = useState({
        title: "",
        task: ""
    })

    const getVal = (event) => {

        const {name,value} = event.target;
        
        setMatter((preVal)=>{
            return{
                ...preVal,
                [name] : value
            };
        });
    };

    const generateItems = () =>{

        if(matter.title.length === 0){
            return " ";
        }
        else{
            props.getData(matter)
            setMatter({
                title: "",
                task : ""
            });
        }
        
    }

    return (
        <>
            <div className="container my-3">
                
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your title" onChange={getVal} name="title" value={matter.title} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Task</label>
                        <textarea className="form-control" placeholder='Enter your task' id="exampleFormControlTextarea1" onChange={getVal} name="task" value={matter.task} rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={generateItems}>Add</button>
                
            </div>
        </>
    )
}

export default Input
