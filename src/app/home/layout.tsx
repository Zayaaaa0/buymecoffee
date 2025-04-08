import Header from "@/app/profile/components/Header";
import Sidebar from "./components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen flex-col">
      <Header />

      {children}
    </div>
  );
}
