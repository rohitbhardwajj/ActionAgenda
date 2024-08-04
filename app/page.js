"use client";
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [main, setMain] = useState([]);

  const addTask = () => {
    if (title && desc) {
      setMain([...main, { title, desc }]);
      setTitle("");
      setDesc("");
    }
  };

  const dlt = (index) => {
    const copyTask = [...main];
    copyTask.splice(index, 1);
    setMain(copyTask);
  };

  return (
    <>
      <h1 className="d-flex justify-content-center fw-bold p-2 bg-black text-light">Todo-List</h1>
      <div className="inputField">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form my-3 py-2"
            placeholder="Enter Title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="my-3"
            placeholder="Enter Description here..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button type="button" onClick={addTask} className="btn btn-dark my-3 mx-3 rounded">Add Task</button>
        </div>
      </div>

      <div className="list container">
        <div className="td d-flex justify-content-between">
          <h4>Title</h4>
          <h4>Description</h4>
          <h4>Action</h4>
        </div>
        <ul className="list-unstyled my-3">
          {main.map((task, index) => (
            <div className="d-flex justify-content-between align-items-center">
              <div className='d-flex set' >
                <div className="title">
                <h5>{task.title}</h5>
                </div>
                <div className="desc">
                <h6>{task.desc}</h6>
                </div>
              </div>
              <button type="button" className="btn btn-danger" onClick={() => dlt(index)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Page;
