        import * as React from "react";
        import Box from "@mui/material/Box";
        import Typography from "@mui/material/Typography";
        import Modal from "@mui/material/Modal";
        import {Select} from "@/UI-Components/sharedComponents/select";
        import {Input} from "@/UI-Components/sharedComponents/input";

        import {Button} from "@/UI-Components/sharedComponents/button";

        interface ModalProps {
            open: boolean;
            setOpen: React.Dispatch<React.SetStateAction<boolean>>;
            handleClick:any
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
            maxWidth: "90%", // Ensure it doesn't exceed the viewport width
            bgcolor: "white",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
            textAlign: "center",
        };






        const ExpenseModal: React.FC<ModalProps> = ({
              open,
              setOpen,
              handleClick,
              Title,

          }) => {
            const expensesOptions = [
                { value: "salaries", label: "Salaries" },
                { value: "electricity", label: "Electricity" },
                { value: "water", label: "Water" },
                { value: "internet", label: "Internet" },
                { value: "maintenance", label: "Maintenance" },
                { value: "packaging", label: "Packaging" },
                { value: "display", label: "Display" },
                { value: "charity", label: "Charity" },
                { value: "donation", label: "Donation" },
                { value: "socialMedia", label: "Social Media" },
                { value: "food&beverage", label: "Food & Beverage" },
                { value: "withdrawals", label: "Withdrawals" },
                { value: "others", label: "Others" }
            ];
            return (
                <div>
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
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
                                <div>
                                    <Select
                                        name="item"
                                        // id={`item-${index}`}
                                        options={expensesOptions}
                                        // value={item.item}
                                        // onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[220px] mx-3 xl:w-40 mb-0 "

                                    />
                                    <Input
                                        name="desc"
                                        placeholder='Description'
                                        // id={`desc-${index}`}
                                        type="text"
                                        // value={form.desc}
                                        // onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[300px] items-center mx-3 xl:w-40"
                                    />
                                    <Input
                                        name="amount"
                                        placeholder='Amount in $'
                                        // id={`desc-${index}`}
                                        type="number"
                                        // value={form.desc}
                                        // onChange={(e) => handleInputChange(e, index)}
                                        className=" w-[300px] items-center mx-3 xl:w-40"
                                    />
                                </div>
                            </Typography>

                            <div className="mt-6 flex justify-end gap-4">
                                <button
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                                >
                                    Cancel
                                </button>
                                <Button
                                    onClick={async (e) => {
                                        e.preventDefault()
                                        await handleClick();
                                        setOpen(false);
                                    }}
                                    className={`text-white `} type="submit">
                                    Update Invoice
                                </Button>
                            </div>

                        </Box>
                    </Modal>
                </div>
            );
        };

        export default ExpenseModal;
