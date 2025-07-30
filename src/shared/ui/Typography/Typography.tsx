import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  variant: "bodyText" | "caption" | "h6";
  color: string;
  className?: string;
}

export const Typography = ({ children, variant, color, className = "" }: TypographyProps) => {
  const combinedClassName = `typography-${variant} text-${color} ${className}`;

  return (
    <p className={combinedClassName.trim()}>
      {children}
    </p>
  );
};
