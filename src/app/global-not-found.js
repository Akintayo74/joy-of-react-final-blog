import { Work_Sans, Spline_Sans_Mono } from "next/font/google";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export const metadata = {
  title: '404 - Page not found',
  description: "This page does not exist",
};

export default function GlobalNotFound() {
    return (
        <html>
            <body>
                <h1>404 -- Page not found</h1>
            </body>
        </html>
    )
}