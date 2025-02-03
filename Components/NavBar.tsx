import "@/css/nav-bar.css";
import localFont from "next/font/local";
import Link from "next/link";

const kenyanCoffee = localFont({ src: "../app/fonts/Kenyan_Coffee_Rg.otf" });

export default function NavBar() {
  return (
    <>
      <Link href={"/home-page"}>
        <section>
          <p className={`logo ${kenyanCoffee.className}`}>
            <span className="initialInLogo">T</span>IMDB
          </p>
        </section>
      </Link>
      <Link href={"/favorites"}>
        <p className={`myFavorites ${kenyanCoffee.className}`}>My Favorites</p>
      </Link>
    </>
  );
}
