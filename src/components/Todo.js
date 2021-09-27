// import React, { Component } from "react";
// import { MdBorderInner, MdDelete, MdEdit } from "react-icons/md";
// import "../App.css";

// export default class Todo extends Component {
//   // onkeyup event
//   onkeyupFunc() {
//     const inputBox = document.querySelector("#inputBox");
//     const addBtn = document.querySelector("#btn_add");
//     let userEnteredValue = inputBox.value; //getting user entered value
//     if (userEnteredValue.trim() != 0) {
//       addBtn.classList.add("active"); //active the add button
//     } else {
//       addBtn.classList.remove("active"); //unactive the add button
//     }
//   }
//   // -----------------------Add--------------

//   addBtnFunc() {
//     const todoList = document.querySelector(".todoList");
//     const inputBox = document.querySelector("#inputBox");
//     const addBtn = document.querySelector("#btn_add");
//     const pendingTasks = document.querySelector(".pendingTasks");
//     let userEnteredValue = inputBox.value;
//     console.log(userEnteredValue);
//     todoList.innerHTML += (
//       <li className="listElement" onClick="markTask(this)">
//         {todoList.innerText}
//         <i className="edit" onClick="editTask(this)">
//           <MdEdit />
//         </i>
//         <span className="icon" onClick="deleteTask(this)">
//           <i>
//             <MdDelete />
//           </i>
//         </span>
//       </li>
//     );
//     inputBox.value = "";
//     addBtn.classList.remove("active");

//     pendingTasks.innerText = todoList.childElementCount;
//   }
//   render() {
//     // getting all required elements
//     const inputBox = document.querySelector("#inputBox");
//     const searchBox = document.querySelector("#searchBox");
//     const addBtn = document.querySelector("#btn_add");
//     const todoList = document.querySelector(".todoList");
//     const deleteAllBtn = document.querySelector(".clearAll");
//     const pendingTasks = document.querySelector(".pendingTasks");

//     return (
//       <div>
//         <div>
//           <div className="todoContainer">
//             <label htmlfor="inputBox">TODO App</label>
//             <br />
//             <input id="searchBox" type="text" placeholder="Searching..." />
//             <hr />
//             <div className="inputField">
//               <input
//                 onKeyUp={this.onkeyupFunc}
//                 id="inputBox"
//                 type="text"
//                 placeholder="Add your new todo"
//               />
//               <button onClick={this.addBtnFunc} id="btn_add">
//                 <i>
//                   <MdBorderInner />
//                 </i>
//               </button>
//             </div>
//             <ul className="todoList">
//               {/* <!-- data are comes from local storage --> */}
//             </ul>
//             <div className="div_footer">
//               <span>
//                 You have <span className="pendingTasks"></span> pending tasks
//               </span>
//               <button className="clearAll">Clear All</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
