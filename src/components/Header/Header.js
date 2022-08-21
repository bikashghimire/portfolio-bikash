import NavBar from "../Navbar/Navbar";
import "./Header.css";
import { header } from "../../portfolio";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center ">
      <h3>
        {homepage ? (
          <a href="{homepage}" className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <NavBar />
    </header>
  );
};

export default Header;
