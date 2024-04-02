    import * as React from "react";
    import Box from "@mui/material/Box";
    import Typography from "@mui/material/Typography";
    import Modal from "@mui/material/Modal";

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

    const buttonStyle = {
        display: "inline-block",
        margin: "10px 8px",
        padding: "8px 16px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    };

    const yesButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#dc3545",
    };

    const noButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#007bff",
    };

    const BasicModal: React.FC<ModalProps> = ({
                                                  open,
                                                  setOpen,
                                                  handleClick,
                                                  Title,
                                                  Body,
                                              }) => {
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
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <b>{Body && Body}</b>
                        </Typography>
                        <div className="flex justify-center items-center gap-x-10 mt-6">
                            <button
                                style={yesButtonStyle}
                                onClick={async (e) => {
                                    e.preventDefault()
                                    await handleClick();
                                    setOpen(false);
                                }}
                            >
                                Yes
                            </button>
                            <button
                                style={noButtonStyle}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                No
                            </button>
                        </div>
                    </Box>
                </Modal>
            </div>
        );
    };

    export default BasicModal;
