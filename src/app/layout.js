import CustomNavbar from "@/components/CustomNavbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/context/userProvider";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ToastContainer />
          <CustomNavbar />
          <div className="mt-3">{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
