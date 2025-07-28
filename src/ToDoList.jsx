import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [
                updatedTasks[index + 1],
                updatedTasks[index],
            ];
            setTasks(updatedTasks);
        }
    }

    return (
        <>
            <div className="text-center mt-24">
                <h1 className="text-6xl">To Do List</h1>
                <input
                    className="text-4xl p-3 border-2 border-gray-600 text-black"
                    type="text"
                    placeholder="Enter a task.."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="text-3xl font-bold px-5 py-3 text-white border-none rounded cursor-pointer transition-all ease-linear bg-green-500 hover:bg-green-800"
                    onClick={addTask}
                >
                    Add
                </button>

                <ol className="p-0">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className="text-4xl font-bold p-4 bg-white mb-3 border-2 border-gray-800 rounded-r-md flex items-center justify-center w-3/6 m-auto"
                        >
                            <span>{task}</span>
                            <button
                                className="text-3xl font-bold px-5 py-3 text-white border-none rounded cursor-pointer transition-all ease-linear px-3 py-2 text-xl ml-3 bg-red-500 hover:bg-red-800"
                                onClick={() => deleteTask(index)}
                            >
                                delete
                            </button>
                            <button
                                className="text-3xl font-bold px-5 py-3 text-white border-none rounded cursor-pointer transition-all ease-linear px-3 py-2 text-xl ml-3 bg-blue-500 hover:bg-blue-800"
                                onClick={() => moveTaskUp(index)}
                            >
                                👆
                            </button>
                            <button
                                className="text-3xl font-bold px-5 py-3 text-white border-none rounded cursor-pointer transition-all ease-linear px-3 py-2 text-xl ml-3 bg-blue-500 hover:bg-blue-800"
                                onClick={() => moveTaskDown(index)}
                            >
                                👇
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default ToDoList;
