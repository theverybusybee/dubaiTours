import "./globals.scss";
import { montserrat } from "@/app/fonts";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "Tours in Dubai",
  description: "Find your own perfect solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
