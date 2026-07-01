import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | JOSHTR',
    default: 'JOSHTR'
  },
  description: "JOSHTR projects website page",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <div className="cuttingMatBack">
          <div className="cuttingMatGrid cuttingMatLine"></div>
          <div className="cuttingMatAngleLine cuttingMatLine" style={{'--angle': '30deg'} as React.CSSProperties}></div>
          <div className="cuttingMatAngleLine cuttingMatLine" style={{'--angle': '60deg'} as React.CSSProperties}></div>
          <div className="cuttingMatAngleLine cuttingMatLine" style={{'--angle': '45deg'} as React.CSSProperties}></div>
          <div className="cuttingMatCircle cuttingMatLine"></div>

          <div className="childrenContent">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
