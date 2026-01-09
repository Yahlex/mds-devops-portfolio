import { render, screen } from '@testing-library/react'
import Home from '../page'

// Mock des composants enfants pour tester l'assemblage de la page
jest.mock('@/components/Navbar', () => {
  const MockNavbar = () => <div data-testid="navbar">Navbar</div>
  MockNavbar.displayName = 'Navbar'
  return MockNavbar
})
jest.mock('@/components/Hero', () => {
  const MockHero = () => <div data-testid="hero">Hero</div>
  MockHero.displayName = 'Hero'
  return MockHero
})
jest.mock('@/components/TechStack', () => {
  const MockTechStack = () => <div data-testid="tech-stack">TechStack</div>
  MockTechStack.displayName = 'TechStack'
  return MockTechStack
})
jest.mock('@/components/Philosophy', () => {
  const MockPhilosophy = () => <div data-testid="philosophy">Philosophy</div>
  MockPhilosophy.displayName = 'Philosophy'
  return MockPhilosophy
})
jest.mock('@/components/Services', () => {
  const MockServices = () => <div data-testid="services">Services</div>
  MockServices.displayName = 'Services'
  return MockServices
})
jest.mock('@/components/Contact', () => {
  const MockContact = () => <div data-testid="contact">Contact</div>
  MockContact.displayName = 'Contact'
  return MockContact
})
jest.mock('@/components/Footer', () => {
  const MockFooter = () => <div data-testid="footer">Footer</div>
  MockFooter.displayName = 'Footer'
  return MockFooter
})

describe('Home Page', () => {
  it('renders all main sections', () => {
    render(<Home />)

    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('tech-stack')).toBeInTheDocument()
    expect(screen.getByTestId('philosophy')).toBeInTheDocument()
    expect(screen.getByTestId('services')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
