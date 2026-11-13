import "@/app/_styles/globals.css";
import Navigation from "@/app/_component/Navigation";
import Logo from "@/app/_component/Logo";

function layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-[#D4DEE7] min-h-screen">
        <header>
          <Logo />
          <Navigation />{" "}
        </header>
        {children}
      </body>
    </html>
  );
}

export default layout;
