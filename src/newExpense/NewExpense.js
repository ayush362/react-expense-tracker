import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(ExpenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
