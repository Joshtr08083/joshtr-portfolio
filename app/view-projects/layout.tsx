import BackButton from "../components/Buttons/BackButton";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "View Projects",
  description: "View all project pages on the Joshtr site",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="flex w-full flex-col justify-start">
        <BackButton nav classes={"absolute shadow-xl/50"} url={"/"}/>
        {children}
    </div>
  );
}
