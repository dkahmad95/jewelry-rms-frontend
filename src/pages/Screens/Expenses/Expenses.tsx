import { lusitana } from "@/UI-Components/sharedComponents/fonts";
import { Button } from "@/UI-Components/sharedComponents/button";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ExpenseModal from "@/UI-Components/expenses/CreateExpenseModal";
import ExpensesTable from "@/UI-Components/expenses/ExpensesTable";
export default function Expenses() {
  const [open, setOpen] = useState(false);

  return (
    <main className="w-full">
      <div className="flex flex-col w-full items-center justify-between gap-y-2 md:flex-row ">
        <h1 className={`${lusitana.className} text-2xl`}>Expenses</h1>
      </div>
      <div className="my-4 flex items-center justify-end gap-2 md:mt-8">
        <ExpenseModal open={open} setOpen={setOpen} Title={"Create Expense"} />
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            setOpen(true);
          }}
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="hidden md:block">Create Expense</span>
          <PlusIcon className="h-5 md:ml-4" />
        </Button>
      </div>

      <ExpensesTable />
    </main>
  );
}
