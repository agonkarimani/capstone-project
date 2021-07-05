import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the Navbar', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    )

    const navbar = screen.getByRole('navbar')
    expect(navbar).toBeInTheDocument()
  })

  it('has at least one nav link', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    )
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})
