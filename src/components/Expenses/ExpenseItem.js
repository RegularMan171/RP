// import {useState} from 'react';

import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  
  // const [title, setTitle] = useState(props.title);
  //always returns 2 values

  // const clickHandler = () => {
  //   setTitle('New title');
  //   console.log(title)
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
        {/* we do not add parenthesis after clickHandler because
        js runs it when jsx runs not when the click occurs if we add parenthesis */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
