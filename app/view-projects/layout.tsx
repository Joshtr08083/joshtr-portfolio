
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="flex w-full flex-col justify-start gap-16">
        {children}
    </div>
  );
}
