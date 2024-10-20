import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname

  if(currentPage ==='/'){
    return null;
  }

  return (
    <div className=' bg-dark text-warning nav-bar'>
      <h1>Jordan Reeve</h1>
    <ul className="nav nav-tabs">
      {/* <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Cover
        </Link>
      </li> */}
      <li className="nav-item">
        <Link
          to="/About"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link text-warning'}
        >
          About
        </Link>
      </li>
      
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link text-warning'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link text-warning'}
        >
          Contact
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
