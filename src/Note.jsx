import React from 'react'

const Note = (props) => {

    const remove = () => {
        props.deleteItems(props.id)
    }

    return (
        <>
            <div className="container my-5" >
                <h4>{props.title}</h4>
                <span>{props.content}</span>
                <i className="fa-solid fa-trash mx-5" onClick={remove}></i>
            </div>
        </>
    )
}

export default Note
