"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

// Schema
const usernameSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
});

const emailPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Username form
  const usernameForm = useForm<z.infer<typeof usernameSchema>>({
    resolver: zodResolver(usernameSchema),
    defaultValues: { username: "" },
  });

  // Email/Password form
  const emailPasswordForm = useForm<z.infer<typeof emailPasswordSchema>>({
    resolver: zodResolver(emailPasswordSchema),
    defaultValues: { email: "", password: "" },
  });

  function handleUsernameSubmit(values: z.infer<typeof usernameSchema>) {
    setUsername(values.username);
    setStep(2);
    setError(null);
  }

  async function handleFinalSubmit(
    values: z.infer<typeof emailPasswordSchema>
  ) {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, ...values }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register user");
      }

      const data = await response.json();
      console.log("Registered user:", data);
      router.push("/auth/log-in");
    } catch (err) {
      console.error(err);
      setError(err.message || "Signup failed. Please try again.");
    }
  }

  return (
    <div className="p-6 flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md">
        <Link href="/auth/log-in">
          <Button variant="outline" className="mb-4 w-full">
            Log in
          </Button>
        </Link>

        {step === 1 ? (
          <Form {...usernameForm}>
            <form
              onSubmit={usernameForm.handleSubmit(handleUsernameSubmit)}
              className="space-y-6 bg-white p-6 rounded-xl shadow"
            >
              <p className="text-2xl font-semibold text-center">
                Create Your Account
              </p>
              <FormDescription className="text-center">
                Choose a username for your page
              </FormDescription>

              <FormField
                control={usernameForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Continue
              </Button>
            </form>
          </Form>
        ) : (
          <Form {...emailPasswordForm}>
            <form
              onSubmit={emailPasswordForm.handleSubmit(handleFinalSubmit)}
              className="space-y-6 bg-white p-6 rounded-xl shadow"
            >
              <div className="text-center">
                <h1 className="text-2xl font-bold">Welcome, {username}</h1>
                <p className="text-sm text-gray-600 mt-1">
                  Connect your email and set a password
                </p>
              </div>

              {error && (
                <div className="text-red-500 text-center">
                  <p>{error}</p>
                </div>
              )}

              <FormField
                control={emailPasswordForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        value={email}
                        type="email"
                        placeholder="Enter email here"
                        {...field} // 🟢 энэ хамгийн чухал
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={emailPasswordForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password here"
                        {...field} // 🟢 мөн адил
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}
