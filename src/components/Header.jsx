import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <div className="flex items-center gap-">
          <Link to={"/"}>
            <img src="./ah-logo.png" />
          </Link>
          <img src="./ah-logo.png" />
        </div>
        <nav className="flex items-center gap-4 font-semibold text-sm">
          <Link className="text-primary uppercase">Hastenelerimiz</Link>
          <Link className="text-primary uppercase">Bölümlerimiz</Link>
          <Link className="text-primary uppercase">Doktorlarımız</Link>
          <Link className="text-primary uppercase">Bize Ulaşın</Link>
          <Link className="text-primary uppercase">Kurumsal</Link>
          <Link className="text-primary uppercase">
            Mayo Clinic Sağlık Kütüphanesi
          </Link>
          <Link className="text-primary uppercase">Hastenelerimiz</Link>
        </nav>
        <div className="flex items-center gap-">
          <Link to={"/"}>
            <img src="./ah-logo.png" />
          </Link>
          <img src="./ah-logo.png" />
        </div>
      </div>
    </header>
  );
};
