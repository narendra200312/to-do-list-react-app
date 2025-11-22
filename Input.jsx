import React, { useState } from 'react'

function Input({ function1 }) {
    const [input, setInput] = useState("");

    function handleInput(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!input.trim()) return;

        let obj = {
            id: Math.random() * 10000,
            task: input.trim(),
            completed: false
        };
        function1(obj);
        setInput("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="d-flex">
                    <input
                        type="text"
                        className='form-control w-75 m-2'
                        placeholder='Enter a Task'
                        value={input}
                        onChange={handleInput}
                    />
                    <button className='btn btn-primary m-2 my-bg'>Add Task</button>
                </div>
            </form>
        </>
    )
}

export default Input
