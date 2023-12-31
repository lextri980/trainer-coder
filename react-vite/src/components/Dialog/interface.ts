import { ReactNode } from "react";

export default interface IProps {
  /** Reveal modal if true */
  open: boolean;
  /** Title of modal */
  title?: string;
  /** Text of OK button */
  submitBtn?: string;
  /** Event: Click cancel button */
  onCancel?: () => void;
  /** Event: Click submit button */
  onSubmit?: () => void;
  /** Children */
  children: ReactNode;
}
