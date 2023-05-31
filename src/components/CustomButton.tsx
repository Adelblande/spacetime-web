"use client";
interface CustomButtonProps {
  value: string;
  background: string;
  textColor: string;
  handleClick?: () => void;
}

export function CustomButton({
  value,
  background,
  textColor,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      className={`h-10 w-20 rounded-md ${background} ${textColor}`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
