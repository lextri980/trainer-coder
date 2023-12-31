// import ModalDialog from "@mui/material/Dialog";
import { DialogContainer } from "./style";
import IProps from "./interface";
import { Button } from "@mui/material";

export default function Dialog(props: IProps) {
  const { open, title, submitBtn, onCancel, onSubmit, children } = props;

  return (
    <DialogContainer open={open}>
      <div className="dialog-container">
        <h3>{title}</h3>
        <div className="modal-body">
          {children}
        </div>
        <div className="group-btn">
          <Button variant="contained" color="error" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={onSubmit}>
            {submitBtn ?? "OK"}
          </Button>
        </div>
      </div>
    </DialogContainer>
  );
}
