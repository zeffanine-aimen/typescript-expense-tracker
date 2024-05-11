import React from "react";
import classes from "../styles/income-expense.module.css";
import { useAppContext } from "../../AppContext";
import { useTranslations } from "next-intl";

export default function IncomeExpense() {
  const globalState = useAppContext();
  const t = useTranslations("Home");
  const income = globalState?.transactions
    ?.filter((t) => t.amount > 0)
    .reduce((a, b) => a + b.amount, 0);
  const expense = globalState?.transactions
    ?.filter((t) => t.amount < 0)
    .reduce((a, b) => a + b.amount, 0);
  return (
    <div className={classes["income-expense__container"]}>
      <div
        className={`${classes["income-expense__child"]} ${classes["income"]}`}
      >
        <h4 className={classes["title"]}>{t("income")}</h4>
        <p className={classes["price_income"]}>${income}</p>
      </div>
      <div className={classes["income-expense__child"]}>
        <h4 className={classes["title"]}>{t("expense")}</h4>
        <p className={classes["price_expense"]}>${expense}</p>
      </div>
    </div>
  );
}
