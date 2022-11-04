import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';
import Card from '../UI/Card';
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChageHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
    <Card className = 'expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChageHandler}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;
