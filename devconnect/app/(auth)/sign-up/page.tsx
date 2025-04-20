"use client";

import React, { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SignUp: React.FC = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  if (!isLoaded) {
    return null;
  }

  async function SubmitEvent(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;

    setLoading(true);
    try {
      const result = await signUp.create({ emailAddress, password });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_link",
        redirectUrl: `${window.location.origin}/verify-email`,
      });

      setPendingVerification(true);
    } catch (error: any) {
      console.log(JSON.stringify(error, null, 2));
      setError(error.errors[0].message);
    } finally {
      setLoading(false);
    }
  }

  async function onPressVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const completeSignup = await signUp.attemptEmailAddressVerification({ code });

      if (completeSignup.status === "complete") {
        await setActive({ session: completeSignup.createdSessionId });
        router.push("/dashboard");
      } else {
        console.log(JSON.stringify(completeSignup, null, 2));
      }
    } catch (error: any) {
      console.log(JSON.stringify(error, null, 2));
      setError(error.errors[0].message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#441752] to-[#b542d7]">
      <Card className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-[#441752]">
            Sign Up
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 text-center">
            Create an account to get started.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {pendingVerification ? (
            <form onSubmit={onPressVerify}>
              <p className="text-green-600 mb-2">
                Check your email for a verification link or enter the code if prompted.
              </p>
              <Input
                type="text"
                placeholder="Enter verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="mt-4 w-full bg-[#441752] hover:bg-[#360d41] text-white"
              >
                Verify
              </Button>
            </form>
          ) : (
            <form onSubmit={SubmitEvent}>
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <Input
                type="email"
                placeholder="Email Address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
              />

              <div className="relative mt-4">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-[#441752]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <label className="flex items-center space-x-2 mt-4">
                <input type="checkbox" required />
                <span>
                  I agree to the{" "}
                  <a href="/terms" className="text-[#441752] underline hover:text-[#360d41]">
                    Terms and Conditions
                  </a>
                </span>
              </label>

              <Button
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-[#441752] hover:bg-[#360d41] text-white"
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </Button>
            </form>
          )}
        </CardContent>
        
        <CardFooter className="flex items-center text-center">
          <Link href="/login" className="text-[#441752] hover:underline hover:text-[#360d41] text-center">
            Already have an account? Log in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
