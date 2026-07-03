
import BackButton from "@/app/components/Buttons/BackButton";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="flex w-full flex-col justify-start gap-16 relative">
        <BackButton classes={"absolute top-4 left-4 px-6 shadow-xl/50"}/>
        {children}
    </div>
  );
}
