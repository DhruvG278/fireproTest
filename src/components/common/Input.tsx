import React, { useState, forwardRef } from "react";
import { Eye, EyeOff, Mail, Lock, User, Search } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onIconClick?: () => void;
  variant?: "default" | "outlined" | "filled";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      icon,
      iconPosition = "right",
      onIconClick,
      variant = "outlined",
      className = "",
      type = "text",
      ...props
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Handle password visibility toggle
    const handlePasswordToggle = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    // Determine the actual input type
    const inputType = type === "password" && isPasswordVisible ? "text" : type;

    // Auto-generate password visibility icon for password inputs
    const displayIcon =
      type === "password" && !icon ? (
        <button
          type="button"
          onClick={handlePasswordToggle}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      ) : (
        icon
      );

    const handleIconClick = () => {
      if (type === "password" && !icon) {
        handlePasswordToggle();
      } else if (onIconClick) {
        onIconClick();
      }
    };

    const baseClasses =
      "!w-full !px-4 !py-3 !text-base !transition-all !duration-200 focus:!outline-none disabled:!opacity-50 disabled:!cursor-not-allowed !appearance-none !box-border text-text-primary placeholder:text-text-primary";

    const variantClasses = {
      default:
        "!border-0 !border-b-2 !border-gray-200 !bg-transparent focus:!border-blue-500 !rounded-none",
      outlined:
        "!border-2 !border-solid !border-gray-300 !rounded-lg !bg-primary focus:!border-logo focus:!ring-2 focus:!ring-logo hover:!border-gray-400",
      filled:
        "!border-2 !border-solid !border-transparent !bg-gray-100 !rounded-lg focus:!bg-white focus:!border-blue-500 focus:!ring-2 focus:!ring-blue-500/20 hover:!bg-gray-200",
    };

    const errorClasses = error
      ? "!border-red-500 focus:!border-red-500 focus:!ring-red-500/20"
      : "";

    const paddingClasses =
      iconPosition === "left" && displayIcon
        ? "!pl-12"
        : iconPosition === "right" && displayIcon
        ? "!pr-12"
        : "";

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary mb-2">
            {label}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            className={`${baseClasses} ${variantClasses[variant]} ${errorClasses} ${paddingClasses} ${className}`}
            style={{
              // Force styles to override browser defaults
              width: "100%",
              padding: "12px 16px",
              fontSize: "16px",
              lineHeight: "1.5",

              border:
                variant === "outlined"
                  ? "2px solid #d1d5db"
                  : variant === "filled"
                  ? "2px solid transparent"
                  : "none",
              borderBottom:
                variant === "default" ? "2px solid #d1d5db" : undefined,
              borderRadius: variant === "default" ? "0" : "8px",
              backgroundColor:
                variant === "filled"
                  ? "#f3f4f6"
                  : variant === "outlined"
                  ? "#ffffff"
                  : "transparent",
              outline: "none",
              transition: "all 0.2s ease-in-out",
              boxSizing: "border-box",
              margin: 0,
              fontFamily: "inherit",
              WebkitAppearance: "none",
              MozAppearance: "textfield",
              appearance: "none",
              paddingLeft:
                iconPosition === "left" && displayIcon ? "48px" : "16px",
              paddingRight:
                iconPosition === "right" && displayIcon ? "48px" : "16px",
              ...(error && {
                borderColor: "#ef4444",
              }),
            }}
            onBlur={(e) => {
              // Reset focus styles
              if (variant === "outlined") {
                e.target.style.borderColor = error ? "#ef4444" : "#d1d5db";
                e.target.style.boxShadow = "none";
              } else if (variant === "filled") {
                e.target.style.backgroundColor = "#f3f4f6";
                e.target.style.borderColor = "transparent";
                e.target.style.boxShadow = "none";
              } else {
                e.target.style.borderBottomColor = error
                  ? "#ef4444"
                  : "#d1d5db";
              }
              props.onBlur?.(e);
            }}
            {...(props as any)}
          />

          {displayIcon && (
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 ${
                iconPosition === "left" ? "left-3" : "right-3"
              } ${onIconClick || type === "password" ? "cursor-pointer" : ""}`}
              onClick={handleIconClick}
            >
              {displayIcon}
            </div>
          )}
        </div>

        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

// Example usage component
const InputExamples = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Input Component Examples
      </h2>

      {/* Email input with icon */}
      <Input
        label="Email address"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<Mail size={20} className="text-gray-400" />}
        iconPosition="left"
        variant="outlined"
      />

      {/* Password input with auto eye icon */}
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
      />

      {/* Search input with custom icon */}
      <Input
        label="Search"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={<Search size={20} className="text-gray-400" />}
        iconPosition="left"
        variant="filled"
      />

      {/* Input with error state */}
      <Input
        label="Username"
        type="text"
        placeholder="Enter username"
        error="Username is required"
        icon={<User size={20} className="text-gray-400" />}
        iconPosition="right"
        variant="outlined"
      />

      {/* Different variants showcase */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>

        <Input placeholder="Default variant" variant="default" />

        <Input placeholder="Outlined variant" variant="outlined" />

        <Input placeholder="Filled variant" variant="filled" />
      </div>
    </div>
  );
};

export default InputExamples;
