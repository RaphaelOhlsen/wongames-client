import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
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
  })
  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(props.price)

    //Preço não tenha line-trought
    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    //Preço tenha o background secundário
    expect(price).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })
  it('should render price a line-trought in price when promotional', () => {
    // Renderiza o componente (com promotionalPrice)
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    //Preço tenha line-trought
    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    })

    //Preco promocional não vai ter line-through
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
