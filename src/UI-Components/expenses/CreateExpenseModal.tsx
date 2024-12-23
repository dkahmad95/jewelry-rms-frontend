import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Select } from "@/UI-Components/sharedComponents/select";
import { Input } from "@/UI-Components/sharedComponents/input";

import { Button } from "@/UI-Components/sharedComponents/button";
import { createExpense, getExpenses } from "@/lib/apiCalls/expensesAPIs";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Form, Formik } from "formik";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  Title?: string;
  Body?: string;
  id?: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "90%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  textAlign: "center",
};

const ExpenseModal = ({ open, setOpen, Title }: ModalProps) => {
  const expensesOptions = [
    { value: "Salaries", label: "Salaries" },
    { value: "Electricity", label: "Electricity" },
    { value: "Water", label: "Water" },
    { value: "Internet", label: "Internet" },
    { value: "Maintenance", label: "Maintenance" },
    { value: "Packaging", label: "Packaging" },
    { value: "Display", label: "Display" },
    { value: "Charity", label: "Charity" },
    { value: "Social_media", label: "Social Media" },
    { value: "Food_and_beverage", label: "Food & Beverage" },
    { value: "Withdrawals", label: "Withdrawals" },
    { value: "Others", label: "Others" },
  ];

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Expense name is required"),
    description: Yup.string().required("Description is required"),
    value: Yup.number()
      .typeError("Value must be a number")
      .required("Value is required"),
  });
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <b>{Title && Title}</b>
        </Typography>
        <Formik
          initialValues={{
            name: "",
            description: "",
            value: 0,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("values", values);
            try {
              await createExpense(dispatch, values);
              await getExpenses(dispatch);
              alert("Expense created successfully!");
              setOpen(false);
            } catch (error) {
              console.error("Error:", error);
              alert("Failed to create interfaces. Please try again.");
            } finally {
              setSubmitting(false);
            }
            console.log("values", values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <Form>
              <div className=" flex-grow-0 flex-col items-center justify-center">
                <div className="flex flex-col gap-2">
                  <Select
                    id="name"
                    label="Select Expense"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    options={expensesOptions}
                    className="w-[300px]"
                    required
                  />
                  {errors.name && touched.name && (
                    <div className="text-red-500 text-xs">{errors.name}</div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    id="description"
                    name="description"
                    label="Description"
                    placeholder="Description"
                    type="text"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-[300px]"
                  />
                  {errors.description && touched.description && (
                    <div className="text-red-500 text-xs">
                      {errors.description}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    id="value"
                    name="value"
                    label="Value in $"
                    placeholder="value"
                    type="number"
                    value={values.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-[300px]"
                    required
                  />
                  {errors.value && touched.value && (
                    <div className="text-red-500 text-xs">{errors.value}</div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <Button
                  onClick={() => setOpen(false)}
                  className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                  Cancel
                </Button>
                <Button
                  className={`text-white `}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Create
                </Button>
              </div>
            </Form>
          )}
        </Formik>{" "}
      </Box>
    </Modal>
  );
};

export default ExpenseModal;
