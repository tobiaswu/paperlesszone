import React from 'react';
import { PiXCircleLight } from 'react-icons/pi';

export const ToastError = ({ error }: { error?: string }) => {
  return (
    <div className="toast toast-end z-50">
      <div className="alert alert-error max-w-sm whitespace-pre-wrap">
        <PiXCircleLight className="text-2xl" />
        <span>{error}</span>
      </div>
    </div>
  );
};
