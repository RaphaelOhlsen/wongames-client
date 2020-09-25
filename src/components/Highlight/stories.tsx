import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead está de volta!',
    subtitle: 'Venha conhecer as novas aventuas de John Marston',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
// Default.args = {
//   title: 'Read Dead está de volta!',
//   subtitle: 'Venha conhecer as novas aventuas de John Marston',
//   backgroundImage: '/img/red-dead-img.jpg',
//   buttonLabel: 'Buy now',
//   buttonLink: '/rdr2'
// }
