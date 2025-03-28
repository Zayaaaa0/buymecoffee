"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const usernameSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const emailPasswordSchema = z.object({
  email: z.string().min(12, {
    message: "Username must be at least 12 characters.",
  }),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const router = useRouter();
  const usernameForm = useForm<z.infer<typeof usernameSchema>>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: "",
    },
  });
  const emailPasswordForm = useForm<z.infer<typeof emailPasswordSchema>>({
    resolver: zodResolver(emailPasswordSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleUsernameSubmit(values: z.infer<typeof usernameSchema>) {
    console.log(values.username);
    emailPasswordForm.reset();
    setStep(2);
  }
  function handleFinalSubmit(values: z.infer<typeof emailPasswordSchema>) {
    console.log({ username, ...values });
    router.push("auth/log-in");
  }
  return (
    <div className="p-[24px] justify-center flex flex-col">
      <Link href={"/auth/log-in"}>
        <Button variant="outline">Log in</Button>
      </Link>
      {step === 1 ? (
        <div>
          <Form {...usernameForm}>
            <form
              onSubmit={usernameForm.handleSubmit(handleUsernameSubmit)}
              className="space-y-8"
            >
              <FormField
                control={usernameForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <p className="font-semibold text-[24px]">
                      Create Your Account
                    </p>
                    <FormDescription>
                      Choose a username for your page
                    </FormDescription>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter username here"
                        name="username"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Continue</Button>
            </form>
          </Form>
        </div>
      ) : (
        <div>
          <div>
            <h3>Welcome,{username}</h3>
            <p>Connect email and set a password</p>
          </div>
          <Form {...emailPasswordForm}>
            <form
              onSubmit={emailPasswordForm.handleSubmit(handleFinalSubmit)}
              className="space-y-8"
            >
              <FormField
                control={emailPasswordForm.control}
                name={"email"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
