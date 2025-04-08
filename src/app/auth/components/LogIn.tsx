"use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
import Link from "next/link";

// const formSchema = z.object({
//   email: z.string().min(2, {
//     message: "The username is already taken",
//   }),
// });

// export default function LogIn() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//   }
//   return (
//     <div className="p-[24px] justify-center flex flex-col">
//       <Link href={"/auth/sign-up"}>
//         <Button variant="outline">Sign Up</Button>
//       </Link>
//       <div>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <p className="font-semibold text-[24px]">Welcome back</p>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter email here" {...field} />
//                   </FormControl>

//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit">Continue</Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className=" flex flex-col justify-center">
      {/* Header with sign up button */}
      <header className="p-4 flex justify-end">
        <Link href={"/auth/sign-up"}>
          <Button
            variant="secondary"
            className="bg-gray-100 hover:bg-gray-200 text-black rounded-md font-normal"
          >
            Sign up
          </Button>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-3xl font-medium text-center mb-8">
              Welcome back
            </h1>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-base">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border-gray-300 py-3"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-base">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border-gray-300 py-3"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gray-400 hover:bg-black text-white rounded-md py-3 font-normal"
            >
              Continue
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
