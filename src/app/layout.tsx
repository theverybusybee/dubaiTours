import "./globals.scss";
import { montserrat } from "@/app/fonts";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children, authModules
}: {
  children: React.ReactNode;
  authModules: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Providers>
          {children}
          {authModules}
        </Providers>
      </body>
    </html>
  );
}
