import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExportItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };
  return (
    <div className='expense-item'>
      <div className='expense-item__description'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};

export default ExportItem;
