import "./globals.css"
import { Hachi_Maru_Pop, Noto_Sans_JP } from "next/font/google";

const HachiMaruPopFont = Hachi_Maru_Pop({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-HachiMaruPop",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp'
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={`${HachiMaruPopFont.variable} ${notoSansJP.variable}`}>
        {children}
      </body>
    </html>
  );
}
