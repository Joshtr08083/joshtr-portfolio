import BackButton from "../components/Buttons/BackButton";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About",
  description: "About page for Joshua Reid",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="flex w-full flex-col justify-start">
        <BackButton nav classes={"absolute shadow-xl/50"} url={"/"}/>
        {children}
    </div>
  );
}
