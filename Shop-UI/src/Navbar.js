import { Link, useMatch, useResolvedPath } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        SARGIN Alışveriş
      </Link>
      <ul>
        <CustomLink to="/Register">Kayıt Ol</CustomLink>
        <CustomLink to="/Login">Giriş Yap</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
