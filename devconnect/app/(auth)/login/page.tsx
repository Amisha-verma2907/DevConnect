"use client";

import React, { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
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

const Login: React.FC = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  if (!isLoaded) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        console.log(result);
      }
    } catch (err: any) {
      console.error("Login failed:", err);
      setError(err.errors?.[0]?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex top-0 p-0 m-0 items-center justify-center min-h-screen bg-gradient-to-b from-[#441752] to-[#b542d7]">
      <Card className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-[#441752]">
            Log In
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 text-center">
            Welcome back! Log in to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500 mb-2">{error}</p>}

          <form onSubmit={handleSubmit}>
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

            <Button
              type="submit"
              disabled={loading}
              className="mt-4 w-full bg-[#441752] hover:bg-[#3a1346] text-white"
            >
              {loading ? "Logging In..." : "Log In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Link href="/sign-up" className="text-[#441752] hover:underline">
            Don’t have an account? Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
