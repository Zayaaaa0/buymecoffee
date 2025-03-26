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

const usernameSchema = z.object({
  username: z.string().min(2, {
    message: "The username is already taken",
  }),
});

export default function SignUp() {
  const form = useForm<z.infer<typeof usernameSchema>>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof usernameSchema>) {
    console.log(values);
  }
  return (
    <div className="p-[24px] justify-center flex flex-col">
      <div className="justify-end flex">
        <Button variant="secondary">Log in</Button>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
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
                    <Input placeholder="Enter username here" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Continue</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
