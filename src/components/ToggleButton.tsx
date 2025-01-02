import React from "react";
import { ToggleButtonProps } from "../types";

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick,
  checked,
  classNames = "",
}) => {
  return (
    <div className={`inline-block ${classNames}`}>
      <input
        type="checkbox"
        role="switch"
        onChange={(e) => onClick(!e.target.checked)}
        checked={checked}
        className={`
          relative inline-block 
          cursor-pointer 
          appearance-none 
          focus:outline-none focus:ring-0

          /* Track (32px x 12px) */
          w-8 h-3 
          rounded-full
          bg-[rgba(26,26,26,0.1)]

          /* The ball/knob (using ::after) */
          after:content-['']
          after:absolute 
          after:top-1/2 after:-translate-y-1/2 
          after:left-0
          after:h-[18px] after:w-[18px]
          after:rounded-full
          after:border after:border-slate-700
          after:bg-white
          after:transition-transform after:duration-200

          /* Move the knob to the right on check */
          checked:after:translate-x-[15px]
        `}
      />
    </div>
  );
};

export default ToggleButton;
