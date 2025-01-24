import NavBar from "@/Components/NavBar";
import "../css/navbar.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="navContainer">
        <NavBar></NavBar>
      </nav>
      {children}
    </>
  );
};

export default Layout;
