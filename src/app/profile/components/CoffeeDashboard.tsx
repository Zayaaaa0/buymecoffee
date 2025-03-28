"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import Link from "next/link";

export default function CoffeeDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 days");
  const [selectedAmount, setSelectedAmount] = useState("$1");
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top navigation bar */}
      <header className="flex items-center justify-between border-b h-14 px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
          <span className="font-medium">buymecoffee.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Jake" />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 p-6 max-w-3xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Jake"
              />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold text-lg">Jake</h1>
              <p className="text-sm text-gray-500">
                buymecoffee.com/becomejake1
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2 rounded-md">
            <Share2 className="h-4 w-4" />
            Share page link
          </Button>
        </div>

        {/* Earnings section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">Earnings</h2>
            <Button variant="outline" size="sm" className="gap-1">
              {selectedPeriod}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-3xl font-bold">$450</h3>
          </div>
        </div>

        {/* Recent transactions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg">Recent transactions</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                {selectedAmount}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="border-b p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-md h-8 w-8 flex items-center justify-center text-xs font-medium">
                    CN
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Guest</p>
                        <p className="text-xs text-gray-500">
                          instagram.com/weeklyday
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="$1" checked />
                        <label htmlFor="$1" className="text-sm">
                          $1
                        </label>
                      </div>
                    </div>
                    <p className="text-sm mt-2">
                      Thank you for being so awesome everyday! You always manage
                      to brighten up my day when I'm feeling down. It isn't that
                      much money it's all I can contribute at the moment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 rounded-md h-8 w-8 flex items-center justify-center text-xs font-medium">
                    CN
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Guest</p>
                        <p className="text-xs text-gray-500">
                          instagram.com/weeklyday
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="font-medium">+ $1</p>
                        <p className="text-xs text-gray-500">10 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Filter options */}
          <div className="mt-4 border rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Checkbox id="$1-filter" checked />
              <label htmlFor="$1-filter" className="text-sm">
                $1
              </label>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Checkbox id="$2-filter" />
              <label htmlFor="$2-filter" className="text-sm">
                $2
              </label>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Checkbox id="$5-filter" />
              <label htmlFor="$5-filter" className="text-sm">
                $5
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="$10-filter" />
              <label htmlFor="$10-filter" className="text-sm">
                $10
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar navigation */}
      <div className="fixed left-0 top-14 bottom-0 w-64 border-r bg-white p-4 hidden md:block">
        <nav className="space-y-1">
          <Link
            href="#"
            className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100"
          >
            Explore
          </Link>
          <Link
            href="#"
            className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 gap-1"
          >
            View page <ExternalLink className="h-3 w-3" />
          </Link>
          <Link
            href="#"
            className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100"
          >
            Account settings
          </Link>
        </nav>
      </div>
    </div>
  );
}
