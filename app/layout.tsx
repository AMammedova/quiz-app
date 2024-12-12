import { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/shared/components/ui/provider";
import rubikFont from "./fonts/font";
import EllipseTop from "@/shared/images/EllipseTop";
import EllipseBottom from "@/shared/images/EllipseBottom";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Quiz App",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={rubikFont.variable}>
        <StoreProvider>
          <Provider>
            <EllipseTop />
            <EllipseBottom />
            {children}
          </Provider>
        </StoreProvider>
      </body>
    </html>
  );
}
