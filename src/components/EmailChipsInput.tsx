import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import xIcon from "../assets/x-icon.svg"

interface EmailChipsInputProps {
  emails: string[];
  setEmails: React.Dispatch<React.SetStateAction<string[]>>;
  maxEmails?: number;
}

const EmailChipsInput: React.FC<EmailChipsInputProps> = ({
  emails,
  setEmails,
  maxEmails = 10,
}) => {
  const [inputValue, setInputValue] = useState("");

  // Basic email validation
  const isValidEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email.trim());
  };

  // Add a new email to the list
  const addEmail = (email: string) => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) return; // ignore empty
    if (emails.length >= maxEmails) return; // don't exceed max

    setEmails((prev) => [...prev, trimmedEmail]);
  };

  // Remove email by index
  const removeEmail = (index: number) => {
    setEmails((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Handle pressing Enter or Space
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // prevent adding space in the input
      addEmail(inputValue);
      setInputValue("");
    }
  };

  // Handle text input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className="
          border border-[#a6bbd1]
          focus-within:border-blue-600 focus-within:border-2 focus-within:outline-none
          rounded-lg w-full h-24
          px-3 py-2
          flex flex-wrap items-start
          overflow-y-auto
          text-xs
        "
    >
      {/* Render chips */}
      {emails.map((email, index) => {
        const isValid = isValidEmail(email);
        return (
          <div
            key={`${email}-${index}`}
            className={`
                flex items-center p-1 m-1 rounded text-xs font-bold
                ${
                  isValid
                    ? "bg-blue-50 text-slate-700 border border-blue-200"
                    : "bg-red-600 text-white border border-red-700"
                }
              `}
          >
            <span>{email}</span>
            <button
              type="button"
              className="ml-2 font-bold hover:opacity-70"
              onClick={() => removeEmail(index)}
            >
              <img src={xIcon} className={`w-2 ${!isValid && "invert"}`}/>
            </button>
          </div>
        );
      })}

      {/* Input for typing new emails (flex-1 to fill remaining space) */}
      <input
        type="text"
        className="flex-1 p-1 m-1 min-w-[80px] outline-none border-none bg-transparent"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default EmailChipsInput;
