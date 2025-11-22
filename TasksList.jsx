import React, { useState } from 'react'

function TaskItem({ item, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.task);

    function handleSave() {
        const trimmed = text.trim();
        if (!trimmed) return;
        onEdit(item.id, trimmed);
        setIsEditing(false);
    }

    return (
        <div className="my-bg-2 p-2 m-2 text-dark d-flex align-items-center justify-content-between" key={item.id}>
            <div className="d-flex align-items-center">
                <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={item.completed}
                    onChange={() => onToggle(item.id)}
                />
                {isEditing ? (
                    <input
                        type="text"
                        className="form-control"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                ) : (
                    <h5 className={`p-1 mb-0 ${item.completed ? 'completed' : ''}`}>
                        {item.task}
                    </h5>
                )}
            </div>
            <div>
                {isEditing ? (
                    <>
                        <button
                            className="btn btn-sm btn-primary mx-1"
                            type="button"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        <button
                            className="btn btn-sm btn-secondary mx-1"
                            type="button"
                            onClick={() => {
                                setIsEditing(false);
                                setText(item.task);
                            }}
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="btn btn-sm btn-primary mx-1"
                            type="button"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-sm btn-danger mx-1"
                            type="button"
                            onClick={() => onDelete(item.id)}
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

function TasksList({ list, onToggle, onDelete, onEdit }) {
    return (
        <>
            {
                list.length !== 0 ? (
                    list.map(item => (
                        <TaskItem
                            key={item.id}
                            item={item}
                            onToggle={onToggle}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))
                ) : (
                    <div>No Tasks Added</div>
                )
            }
        </>
    )
}

export default TasksList
