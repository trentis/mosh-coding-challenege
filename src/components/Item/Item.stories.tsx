import React from 'react'
import { Item, IItem } from '.'

export default {
  title: 'Item',
  component: Item,
  argTypes: {},
}

export const Default = (args: IItem) => <Item {...args} />
Default.storyName = 'default'
Default.args = {
  title: 'Free Doctor Consultation',
  subtitle: 'Treatment plan in 24 hours. Treat anxiety, depression & more',
  img: 'https://picsum.photos/400/400',
  link: {
    title: 'Get Started',
    href: 'https://google.com'
  },
  options: [
    "Personalised treatment options",
	"Video consults and easy check-ins",
	"Medication, prescribed and delivered"
  ]
}
