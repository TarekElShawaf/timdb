import "../css/navbar.css";
import localFont from "next/font/local";
import SearchBar from "@/Components/SearchBar";
import Link from "next/link";

const kenyanCoffee = localFont({ src: "../../fonts/Kenyan_Coffee_Rg.otf" });

const NavBar = async () => {
  return (
    <>
      <Link href={"/"}>
        <p className={`logo ${kenyanCoffee.className}`}>
          <span className="initialInLogo">T</span>IMDB
        </p>
      </Link>

      <Link href={"/favorites"}>
        <p className={`myFavorites ${kenyanCoffee.className}`}>My Favorites</p>
      </Link>
    </>
  );
};

export default NavBar;
