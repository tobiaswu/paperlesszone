import React from 'react';
import { PiCheckCircleLight } from 'react-icons/pi';

export const ToastInfo = ({ message }: { message?: string }) => {
  return (
    <div className="toast toast-end z-50">
      <div className="alert alert-info max-w-sm whitespace-pre-wrap">
        <PiCheckCircleLight className="text-2xl" />
        <span>{message}</span>
      </div>
    </div>
  );
};
