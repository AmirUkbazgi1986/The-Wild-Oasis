import "@/app/_styles/globals.css";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";

// Font optimazation and downloading from google
const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// setting the metadata

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by mountains and dark forests ",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin_Sans.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
