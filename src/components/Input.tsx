import React, { ChangeEvent } from "react";

interface InputProps {
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  type: string;
  numbersOnly?: boolean;
}

const isNumber = (e: React.KeyboardEvent) => {
  const number_regex = /^[0-9,]$/; // menerima comma, dan number

  if (!number_regex.test(e.key)) {
    e.preventDefault();
  }
};

const Input = (props: InputProps) => {
  const { className, onChange, value, type, numbersOnly } = props;

  return (
    <input
      onChange={onChange}
      value={value}
      onKeyDown={numbersOnly ? isNumber : () => {}}
      type={type}
      className={"border rounded-md p-3 border-white/80 " + className}
    />
  );
};

export default Input;
