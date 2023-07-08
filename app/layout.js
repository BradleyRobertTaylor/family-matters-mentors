import MainNavigation from "@/components/navigation/MainNavigation";

import "./global.css";
import {
  Playfair_Display,
  Allura,
  Inter,
  Poppins,
  Open_Sans,
  Amatic_SC,
} from "next/font/google";
import Footer from "@/components/Footer/Footer";

// const inter = Inter({ subsets: ["latin"] });

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const amatic_sc = Amatic_SC({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "700"],
  display: "swap",
});

export const allura = Allura({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
  display: "swap",
});

const metadata = {
  title: "Family Matters & Mentors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
