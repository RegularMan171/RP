import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';
import Card from '../UI/Card';
import { useState } from "react";

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChageHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }
  
  return (
    <div>
    <Card className = 'expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChageHandler}/>
      {props.items.map((e) => (
        <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
      ))}
    </Card>
    </div>
  );
}

export default Expenses;
