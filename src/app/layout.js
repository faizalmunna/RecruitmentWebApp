
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import "./grid.scss";
import "./layout.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "Job Recruitment App",
  description: "you can search your dream job here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="cf-base">
        <div>
          <div className="position-fixed d-flex justify-content-center custom-z2 bg-white header_wrapper w-100">
            <Header />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
