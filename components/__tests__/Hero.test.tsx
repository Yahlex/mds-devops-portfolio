import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

// Mock de Framer Motion pour éviter les problèmes d'animation dans les tests JSDOM
jest.mock('framer-motion', () => ({
  motion: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    div: ({ children, className, ...props }: any) => {
       // Nettoyage des props spécifiques à Framer Motion qui pourraient être passées
       // eslint-disable-next-line @typescript-eslint/no-unused-vars
       const { initial: _initial, animate: _animate, transition: _transition, whileHover: _whileHover, ...validProps } = props
      return (
        <div className={className} {...validProps}>
          {children}
        </div>
      )
    },
  },
}))

// Mock du composant TechMarquee pour isoler le test de Hero
jest.mock('../TechMarquee', () => {
  return function DummyTechMarquee() {
    return <div data-testid="tech-marquee">TechMarquee Component</div>
  }
})

describe('Hero Component', () => {
  it('renders the main heading properly', () => {
    render(<Hero />)
    
    // Vérifie le titre principal
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Architecturer le Web/i)
    expect(heading).toHaveTextContent(/Maîtriser la Donnée/i)
  })

  it('renders the experience badge', () => {
    render(<Hero />)
    expect(screen.getByText(/Fullstack Developer Junior/i)).toBeInTheDocument()
  })

  it('renders the call to action links', () => {
    render(<Hero />)
    
    // Vérifie le lien de contact
    const contactLink = screen.getByRole('link', { name: /Me Contacter/i })
    expect(contactLink).toHaveAttribute('href', '#contact')
    
    // Vérifie le lien vers la stack
    const stackLink = screen.getByRole('link', { name: /Voir ma Stack/i })
    expect(stackLink).toHaveAttribute('href', '#stack')
  })

  it('renders the tech stack cards (Frontend, Backend, Application)', () => {
    render(<Hero />)
    
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('Application')).toBeInTheDocument()
  })
})
