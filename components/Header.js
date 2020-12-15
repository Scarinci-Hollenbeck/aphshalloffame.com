import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="d-flex w-100 justify-content-between">
      <Logo />
      <Navigation />
      <style jsx>
        {`
          header {
            border-bottom: 2px solid #539dc2;
          }
        `}
      </style>
    </header>
  );
}
