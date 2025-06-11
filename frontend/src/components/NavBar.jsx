import Link from "next/link";
const NavBar = ({ children }) => {
  return (
    <>
      <h1>NavBar</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="./services">Servicios</Link>
          </li>
          <li>
            <Link href="./cases">Casos de exito</Link>
          </li>
          <li>
            <Link href="./aboutUs">Nosotros</Link>
          </li>
          <li>
            <Link href="./quote">Cotizar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
