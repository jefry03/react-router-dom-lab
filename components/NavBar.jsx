import { Link } from "react-router"
function NavBar() {
  return (
    <nav>
       <Link to='/'>homepage</Link>
        <Link to='/products'>products</Link>
        <Link to='/new-product'>new products</Link>
    </nav>
  )
}

export default NavBar
