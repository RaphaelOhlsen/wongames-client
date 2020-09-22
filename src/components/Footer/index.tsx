import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const socialLinks = [
  {
    label: 'Instagran',
    link: 'https://www.instagram.com/won-games'
  },
  {
    label: 'Twitter',
    link: 'https://www.twitter.com/won-games'
  },

  {
    label: 'Facebook',
    link: 'https://www.youtube.com/won-games'
  }
]

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Collumn>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact Us
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Collumn>
      <S.Collumn>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          {socialLinks.map(({ label, link }, index) => (
            <a
              key={`social-${index}`}
              href={link}
              target="_blank"
              rel="noopenner, noreferrer"
            >
              {label}
            </a>
          ))}
        </nav>
      </S.Collumn>
      <S.Collumn>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Collumn>
      <S.Collumn aria-labelledby="footer-contact">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Loren ipsum dolor sit.</span>
        <span>Loren ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Collumn>
    </S.Content>

    <S.Copyright>Won Games 2020 © All rights reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
