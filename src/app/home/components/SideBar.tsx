"use client";

import { useState } from "react";

import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 days");
  const [selectedAmount, setSelectedAmount] = useState("$1");
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top navigation bar */}

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
