import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>Trending</Link>{" "}
      <Link to={"/search_movie"}>Recherche</Link>
    </nav>
  );
};

export default Navbar;
