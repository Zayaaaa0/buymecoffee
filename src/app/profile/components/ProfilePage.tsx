"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProfilePage() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoUrl(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div>
      {step === 1 ? (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-[600px] border border-gray-200 rounded-md p-8">
            <h1 className="text-xl font-medium text-center mb-6">
              Complete your profile page
            </h1>

            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <label htmlFor="photo-upload" className="cursor-pointer">
                  <div className="w-24 h-24 rounded-full border border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                    {photoUrl ? (
                      <img
                        src={photoUrl || "/placeholder.svg"}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <Camera className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </label>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">Add photo</p>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name here"
                  className="w-full border-gray-300"
                />
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  About
                </label>
                <Textarea
                  id="about"
                  placeholder="Write about yourself here"
                  className="w-full border-gray-300 min-h-[100px]"
                />
              </div>

              <div>
                <label
                  htmlFor="social"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Social media URL
                </label>
                <Input
                  id="social"
                  placeholder="https://"
                  className="w-full border-gray-300"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                onClick={() => setStep(2)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800"
                type="submit"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen bg-white">
          <div className="max-w-[600px] w-full px-6">
            <div className="mb-8">
              <h1 className="text-3xl font-medium mb-2">
                How would you like to be paid?
              </h1>
              <p className="text-gray-600">
                Enter location and payment details
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium mb-2"
                >
                  Select country
                </label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="w-full border rounded-md h-12">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your name here"
                    className="w-full px-4 py-3 border rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your name here"
                    className="w-full px-4 py-3 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium mb-2"
                >
                  Enter card number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  className="w-full px-4 py-3 border rounded-md"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="expiryMonth"
                    className="block text-sm font-medium mb-2"
                  >
                    Expires
                  </label>
                  <Select value={expiryMonth} onValueChange={setExpiryMonth}>
                    <SelectTrigger className="w-full border rounded-md h-12">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(
                        (month) => (
                          <SelectItem
                            key={month}
                            value={month.toString().padStart(2, "0")}
                          >
                            {month.toString().padStart(2, "0")}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="expiryYear"
                    className="block text-sm font-medium mb-2"
                  >
                    Year
                  </label>
                  <Select value={expiryYear} onValueChange={setExpiryYear}>
                    <SelectTrigger className="w-full border rounded-md h-12">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from(
                        { length: 10 },
                        (_, i) => new Date().getFullYear() + i
                      ).map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium mb-2"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="CVC"
                    className="w-full px-4 py-3 border rounded-md"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md py-6"
                  variant="secondary"
                  type="submit"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
