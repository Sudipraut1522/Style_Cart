import React from "react";

type buttonProps = {
  type?: string;
  labelName: string;
  labelClassName?: string;
  onClick?: () => void;
  className: string;
  icones?: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<buttonProps> = ({
  type = "submit",
  labelClassName,
  labelName,
  onClick,
  className,
  icones,
  disabled,
  ...props
}) => {
  return (
    <div className=" ">
      <button
        className={`cursor-pointer text-sm  border-none ${className}`}
        onClick={onClick}
        {...props}
        disabled={disabled}
      >
        <div className="flex items-center gap-2">
          <div className={`${labelClassName}`}>{labelName}</div>
          <div className="flex gap-2">{icones && <span>{icones}</span>}</div>
        </div>
      </button>
    </div>
  );
};

export default Button;
