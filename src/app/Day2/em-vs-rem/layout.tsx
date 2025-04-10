import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${oswald.variable} font-oswald bg-[linear-gradient(to_left,_#c2e59c,_#64b3f4)] text-[16px] antialiased md:font-[25px]`}
    >
      <div className="p-[3em] text-[1em] leading-[1.6] font-light">
        {children}
      </div>
    </div>
  );
}
