import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders name of card', () => {
    render(
      <Card
        title="Saranda - The beach of southern Albania"
        text="This is the info-text about the location above"
        images="image per card"
      />
    )
    expect(
      screen.getByRole('heading', {
        name: 'Saranda - The beach of southern Albania',
      })
    ).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(1)
  })
})
