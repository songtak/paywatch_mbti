import React, { useState, useEffect } from "react";
import { Alert } from "@mui/material";

interface Props {
  title: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Toast = ({ title, isOpen, setIsOpen }: Props) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 1500);
    }
  }, [isOpen]);

  return (
    <div className="toast_wrapper">
      {isOpen && (
        <Alert
          severity="success"
          icon={false}
          color="info"
          sx={{ maxWidth: 300, margin: "auto" }}
        >
          {title}
        </Alert>
      )}
    </div>
  );
};

export default Toast;
