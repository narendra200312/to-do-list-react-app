import React, { useState } from 'react'
import Input from './Input'
import TasksList from './TasksList'

export default function CardList() {
    const [list, setList] = useState([]);

    // add task (already had this logic)
    function receive(obj) {
        setList([...list, obj]);
    }

    // toggle completed
    function handleToggle(id) {
        setList(prev =>
            prev.map(item =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    }

    // delete task
    function handleDelete(id) {
        setList(prev => prev.filter(item => item.id !== id));
    }

    // edit task text
    function handleEdit(id, newText) {
        setList(prev =>
            prev.map(item =>
                item.id === id ? { ...item, task: newText } : item
            )
        );
    }

    return (
        <>
            <div className="container-fluid card0">
                <div className="row">
                    <div className="col-4 m-auto">
                        <div className="card">
                            <div className="card-header text-center my-bg text-white">
                                <h2>Tasks</h2>
                            </div>
                            <div className="card-body">
                                <Input function1={receive} />
                            </div>
                            <div className="card-footer text-center">
                                <TasksList
                                    list={list}
                                    onToggle={handleToggle}
                                    onDelete={handleDelete}
                                    onEdit={handleEdit}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
