import { OpenModalButton } from './Button';

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="wordmark">
          <span className="wordmark__ring" aria-hidden="true" />
          <span className="wordmark__name">CloudEmployee</span>
        </a>
        <nav aria-label="Main" className="navbar__nav">
          <a href="#how" className="navlink">How it works</a>
          <a href="#pricing" className="navlink">Pricing</a>
          <a href="#faq" className="navlink">FAQ</a>
        </nav>
        <OpenModalButton size="md">Start a search</OpenModalButton>
      </div>
    </header>
  );
}
