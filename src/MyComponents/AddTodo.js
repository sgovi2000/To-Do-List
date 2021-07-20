// import React from "react";
import React, { useState } from 'react';

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or description can not be blank");
            setTitle("");
        setDescription("");
        }
        else{
        props.addTodo(title, description);
        setTitle("");
        setDescription("");
        }
    }

    return (
        <div className="container my-3">
            <form onSubmit={submit}>
                <h3>Add ToDo!</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        ToDo title:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value = {title} onChange = {(e)=> setTitle(e.target.value)}
                        id="title"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        ToDo Description:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value = {description} onChange = {(e)=> setDescription(e.target.value)}
                        id="description"
                    />
                </div>

                <button type="submit" className="btn btn-sm btn-success">
                    Add ToDo
                </button>
            </form>
        </div>
    );
};



