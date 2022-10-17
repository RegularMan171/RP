import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <Card className = 'expenses'>
      {/* <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem> */}
    {props.items.map((e) => (
        <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
      ))}
    </Card>
  );
}

export default Expenses;
