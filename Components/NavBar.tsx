import "@/css/nav-bar.css";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";

const kenyanCoffee = localFont({ src: "../app/fonts/Kenyan_Coffee_Rg.otf" });

export default function NavBar() {
  return (
    <>
      <Link href={"/home-page"}>
        <section className="logo-container">
          <Image
            src="/Logo-black.png"
            alt={"Webiste logo"}
            width={40}
            height={40}
          ></Image>
          <p className={`logo ${kenyanCoffee.className}`}>
            <span className="initials-in-logo">T</span>IMDB
          </p>
        </section>
      </Link>
      <SearchBar></SearchBar>
      <Link href={"/favorites"} className="logo-container">
        <p className={`nav-favories-button`}>Favorites</p>
        <Image
          src="/heart.png"
          alt={"Favoirites icon"}
          width={20}
          height={20}
          style={{ marginTop: "6px" }}
        ></Image>
      </Link>
    </>
  );
}
