import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../Navbar'

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, initial, animate, exit, ...props }: any) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

// Mock ThemeToggle
jest.mock('../ThemeToggle', () => ({
  ThemeToggle: () => <button data-testid="theme-toggle">Theme Toggle</button>,
}))

describe('Navbar Component', () => {
  it('renders the branding logo correctly', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /ALEXIS REMY/i })).toBeInTheDocument()
  })

  it('renders all navigation links on desktop', () => {
    render(<Navbar />)
    const links = ['Expertise', 'Stack', 'Philosophie', 'Services', 'Contact']
    
    links.forEach(linkText => {
      // On cherche les liens. Note: ils peuvent être dupliqués si le menu mobile est rendu mais caché par CSS
      // En desktop (hidden md:block), ils sont visibles.
      // Le composant rend les liens mobiles seulement si isOpen est true.
      // Donc ici on devrait en avoir qu'un set.
      expect(screen.getByRole('link', { name: linkText })).toBeInTheDocument()
    })
  })

  it('toggles mobile menu when clicking hamburger button', () => {
    render(<Navbar />)
    
    // Le menu mobile ne devrait pas être visible initialement (isOpen = false)
    // On vérifie qu'on ne voit pas une copie des liens qui serait dans le menu mobile
    const links = screen.getAllByRole('link', { name: 'Expertise' })
    expect(links).toHaveLength(1) // Seulement celui du desktop

    // Clic sur le bouton menu (hamburger)
    // Le bouton est visible seulement en mobile via CSS, mais dans JSDOM (qui ne gère pas le CSS layout), il est dans le DOM.
    // On cherche le bouton qui contient l'icône Menu ou X.
    // Lucide Icons rend des SVG. Le bouton a "onClick"
    const buttons = screen.getAllByRole('button')
    // Le ThemeToggle est mocké et est un bouton aussi.
    // Le bouton hamburger est celui qui n'est pas le ThemeToggle.
    // On peut chercher par le <Menu /> icon si on ne le mock pas, mais Lucide rend un svg.
    // Le plus simple est de checker le bouton qui n'est pas le theme toggle.
    const menuButton = buttons.find(btn => btn.getAttribute('data-testid') !== 'theme-toggle')
    
    if (menuButton) {
      fireEvent.click(menuButton)
    }

    // Maintenant le menu doit être ouvert
    // On devrait avoir 2 liens "Expertise" (Desktop + Mobile)
    const linksAfterClick = screen.getAllByRole('link', { name: 'Expertise' })
    expect(linksAfterClick).toHaveLength(2)
  })
})
