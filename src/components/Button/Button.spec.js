import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders a children text', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })
})
