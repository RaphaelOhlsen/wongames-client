import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
  promotionalPrice: 'R$ 200,00'
}

import GameCard from '.'

describe('<Gamecard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    // verifcar se o title renderizou
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    //verifcar se o developer renderizou
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    // verifcar se o img renderizou
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // verifcar se o icon renderizou
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    // verifcar se o preço renderizou
    expect(screen.getByText(props.price)).toBeInTheDocument()
  })
})
