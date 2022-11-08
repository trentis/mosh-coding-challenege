import React from 'react'
import { Header, IHeader } from '.'

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    subtitle: {
        control: {
          type: 'text',
        },
      },
  },
}

export const Default = (args: IHeader) => <Header {...args} />
Default.storyName = 'default'
Default.args = {
  title: 'Get back on track',
  subtitle: 'Treatment plan in 24 hours. Treat anxiety, depression & more'
}
