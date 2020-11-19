import Logo from './Logo'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="mx-4 mt-3 d-flex w-100 justify-content-between">
      <Logo />
      <Navigation />
      <style jsx>{`
        header {
          border-bottom: 2px solid #539DC2;
        }
      
      `}</style>
    </header>
  )
}