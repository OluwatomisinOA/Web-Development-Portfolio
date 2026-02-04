import * as Yup from 'yup';
import { PRIORITIES } from '../constants/priorities';

export function getTodoSchema({ isNew = false } = {}) {

  const deadlineRule = Yup.string()
    .nullable()
    .transform((value, originValue) => originValue === "" ? null : value)
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Deadline should be valid date in YYYY-MM-DD form");
  
  return Yup.object().shape({
    name: Yup.string().
      required("Name is required")
      .min(3, "Name should have minimum length of 3 characters")
      .max(50, "Name should have maximum length of 50 characters"),
    description: Yup.string()
      .max(200, "Name should have maximum length of 200 characters"),
    deadline: isNew ? deadlineRule
      .test("is-future-date", "Deadline can't be date in past",
        (value) => { 
          const today = new Date().toISOString().split("T")[0];
          return value ? value >= today : true;
        }) : deadlineRule,
    priority: Yup.string()
      .required("Priority is not valid value")
      .oneOf(Object.keys(PRIORITIES), "Priority is not valid value"),
  });
}