export default function Navbar({ onNavigate }) {
  const handleNavigation = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <header>
      <div className="logo">
        <h1 style={{ cursor: "pointer" }} onClick={(e) => handleNavigation(e, "home")}>
          The Ugly Five Safari
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleNavigation(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={(e) => handleNavigation(e, "gallery")}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavigation(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
