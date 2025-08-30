"use client";
import React, { useState } from "react";

import Link from "next/link";
import { Input } from "@/components/common/Input";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignInForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
    extra: "",
  });

  const validatePassword = (password: string) => {
    if (!password.trim()) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validateForm = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setError({
      email: emailError,
      password: passwordError,
      extra: "",
    });

    return !emailError && !passwordError;
  };

  const handleSubmit = async () => {
    // Reset previous errors
    setError({ email: "", password: "", extra: "" });

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // const result = await submitToBackend(userData);
      const res = await axios.post("/api/login", {
        email,
        password,
      });

      if (res.status === 200) {
        router.push("/dashboard/home");
      } else {
        alert("Invalid credentials");
      }
      router.replace("/dashboard/home"); // Redirect to dashboard or home page
      setIsLoading(false);
    } catch (submitError) {
      console.log("submitError", submitError);
      setError((prev) => ({
        ...prev,
        extra: axios.isAxiosError(submitError)
          ? submitError.response?.data?.message ||
            "An unexpected error occurred. Please try again."
          : "An unexpected error occurred. Please try again.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes with real-time validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error.email) {
      setError((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error.password) {
      setError((prev) => ({ ...prev, password: "" }));
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full gap-4 flex flex-col !p-8  items-center justify-center max-w-3xl bg-primary">
        <p className="font-bold text-2xl text-logo">Log In</p>
        <div className="flex flex-col gap-4 w-full ">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            iconPosition="left"
            variant="outlined"
            error={error.email}
          />

          {/* Password input with auto eye icon */}
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            variant="outlined"
            error={error.password}
          />
        </div>
        <button
          disabled={isLoading}
          className={`w-full  !py-3 ${
            isLoading ? "!bg-logo" : "!bg-logo"
          } !text-white !font-semibold !rounded-2xl cursor-pointer`}
          onClick={handleSubmit}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
        {error.extra && (
          <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{error.extra}</p>
          </div>
        )}
        <p className="text-sm text-secondary">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-primary font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
