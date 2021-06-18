import Card from './Card'
import imageFile from './../../images/Saranda.jpg'

export default {
  title: 'Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  images: imageFile,
  title: 'Saranda - South Albania',
  text: 'This is the info-text about the location above',
}
