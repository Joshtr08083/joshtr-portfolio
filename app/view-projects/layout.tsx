import BackButton from "../components/Buttons/BackButton";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "View Projects",
  description: "View all project pages on the Joshtr site",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="flex w-full flex-col justify-start gap-16 relative">
        <BackButton classes={"absolute top-4 left-4 px-6 shadow-xl/50"}/>
        {children}
    </div>
  );
}
