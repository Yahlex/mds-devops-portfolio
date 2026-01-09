import { render, screen } from '@testing-library/react'
import Home from '../page'

// Mock des composants enfants pour tester l'assemblage de la page
jest.mock('@/components/Navbar', () => () => <div data-testid="navbar">Navbar</div>)
jest.mock('@/components/Hero', () => () => <div data-testid="hero">Hero</div>)
jest.mock('@/components/TechStack', () => () => <div data-testid="tech-stack">TechStack</div>)
jest.mock('@/components/Philosophy', () => () => <div data-testid="philosophy">Philosophy</div>)
jest.mock('@/components/Services', () => () => <div data-testid="services">Services</div>)
jest.mock('@/components/Contact', () => () => <div data-testid="contact">Contact</div>)
jest.mock('@/components/Footer', () => () => <div data-testid="footer">Footer</div>)

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
