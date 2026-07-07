
import BackButton from "@/app/components/Buttons/BackButton";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="flex w-full flex-col justify-start relative">
        <BackButton nav classes={"absolute shadow-xl/50"} url="/view-projects"/>
        {children}
    </div>
  );
}
