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
// yo chai props ho optional rw required xa temli k k chyenxa tehi garne ho kina darako code dekherw
// aaba hera button ma hami lai k k chinxa vana tw??  aba ytha raixa tehi pass gara props jashari lo gara
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
