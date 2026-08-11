import Background from "./Background";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Shared page wrapper that provides the dark background,
 * navbar, and footer for all pages.
 */
export default function PageLayout({ children }) {
  return (
    <>
      <Background />
      <div className="relative z-20 flex-1 w-full">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}