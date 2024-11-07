import Link from "next/link";

const DropdownBtn = () => (
  <div className="dropdown-btn">
    <span className="fas fa-chevron-down" />
  </div>
);

export const OnePageMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <Link href="#hero">Home</Link>
      </li>
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#resume">Resume</Link>
      </li>
      <li>
        <Link href="#services">Services</Link>
      </li>
      <li>
        <Link href="#skills">Skills</Link>
      </li>
      <li>
        <Link href="#portfolio">Projects</Link>
      </li>
      <li>
        <Link href="#blog">Blog</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  );
};

const MultiMenu = () => {
  return (
    <ul className="navigation clearfix">
      <li>
        <Link href="/">Home</Link> {/* Enlace a la página principal */}
      </li>
      <li>
        <Link href="/about">About</Link> {/* Enlace a la página de 'About Me' */}
      </li>
      <li>
        <Link href="/services">Services</Link> {/* Enlace a la página de 'Services' */}
      </li>
      <li>
        <Link href="/skills">Skills</Link> {/* Enlace a la página de 'Skills' */}
      </li>
      <li>
        <Link href="/projects">Projects</Link> {/* Enlace a la página de 'Projects' */}
      </li>
      <li>
        <Link href="/blog">Blog</Link> {/* Enlace a la página de 'Blog' */}
      </li>
      <li>
        <Link href="/contact">Contact</Link> {/* Enlace a la página de 'Contact' */}
      </li>
    </ul>
  );
};
export { MultiMenu };
export default MultiMenu;
