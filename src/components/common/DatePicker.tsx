"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ThemedDatePicker = ({
  value,
  onChange,
}: {
  value: Date | null;
  onChange: (date: Date | null) => void;
}) => {
  return (
    <div className="w-full">
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select blog date"
        className="!w-full border rounded px-3 py-2 !text-[var(--color-text)] !bg-[var(--color-primary)] focus:outline-none focus:ring-2 !focus:ring-[var(--color-logo)]"
        calendarClassName="!w-full !bg-[var(--color-primary)] !text-[var(--color-text)] border !border-[var(--color-logo)] rounded-lg p-2 shadow-lg"
        dayClassName={(date) =>
          "!hover:bg-[var(--color-logo)] !hover:text-[var(--color-primary)] rounded-full px-2 py-1"
        }
        popperClassName="z-50"
      />
    </div>
  );
};

export default ThemedDatePicker;
