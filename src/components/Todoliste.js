import React, { useState, useEffect } from "react";
import { MdBorderInner, MdDelete, MdEdit } from "react-icons/md";
import "../App.css";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {

  // }, []);

  // onkeyup event--------------------------
  const onkeyupFunc = () => {
    const inputBox = document.querySelector("#inputBox");
    const addBtn = document.querySelector("#btn_add");
    let userEnteredValue = inputBox.value; //getting user entered value
    if (userEnteredValue.trim() !== 0) {
      addBtn.classList.add("active"); //active the add button
    } else {
      addBtn.classList.remove("active"); //unactive the add button
    }
  };
  // -----------------------Add--------------
  const addBtnFunc = () => {
    const inputBox = document.querySelector("#inputBox");
    setTasks([
      { id: tasks.length + 1, title: inputBox.value, done: false },
      ...tasks,
    ]);
    inputBox.value = "";
  };
  //----------------------Delete--------------
  const deleteBtnFunc = (id) => {
    // copy current list of items
    const list = [...tasks];
    // filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    setTasks(updatedList);
  };
  //-----------------Clear-all----------
  const clearBtnFunc = () => {
    // const todoList = document.querySelector(".todoList");
    // todoList.innerHTML = "";
    setTasks([]);
  };
  //-----------------------Mark----------------
  const markFunc = (e) => {
    //setTasks(...tasks, (tasks[e].done = !tasks[e].done));
    //console.log(tasks);
    //setTodo(...todo, todo[index.id].name = editInput.value)
  };
  const markFunc1 = (e) => {
    // if (e.className.includes("lineTrough")) {
    //   e.className.remove("lineTrough");
    // } else {
    //   e.className.add(" lineTrough");
    // }
  };

  return (
    <div>
      <div>
        <div className="todoContainer">
          <label>TODO App</label>
          <br />
          <hr />
          <div className="inputField">
            <input
              onKeyUp={onkeyupFunc}
              id="inputBox"
              type="text"
              placeholder="Add your new todo"
            />
            <button onClick={addBtnFunc} id="btn_add">
              <i>
                <MdBorderInner />
              </i>
            </button>
          </div>
          <ul className="todoList">
            {/* <!-- data are comes from local storage --> */}
            {tasks.map((task) => (
              <li
                key={task.id}
                className={
                  tasks.done ? "listElement lineTrough" : "listElement"
                }
                onClick={() => markFunc1(task.id)}
              >
                {task.title}
                <span className="edit">
                  <i>
                    <MdEdit />
                  </i>
                </span>
                <span className="icon" onClick={() => deleteBtnFunc(task.id)}>
                  <i>
                    <MdDelete />
                  </i>
                </span>
              </li>
            ))}
          </ul>
          <div className="div_footer">
            <span>
              You have <span className="pendingTasks"></span> pending tasks
            </span>
            <button className="clearAll" onClick={clearBtnFunc}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// todoList.innerHTML += `<li class="listElement" onclick="markTask(this)">${userEnteredValue}<i class="edit far fa-edit" onclick="editTask(this)"></i><span class="icon" onclick="deleteTask(this)"><i class="fas fa-trash"></i></span></li>`;
