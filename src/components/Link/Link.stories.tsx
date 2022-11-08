import React from 'react'
import { Link, ILink } from '.'

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    href: {
        control: {
          type: 'text',
        },
      },
  },
}

export const Default = (args: ILink) => <Link {...args} />
Default.storyName = 'default'
Default.args = {
  title: 'Get Started',
  href: 'https://google.com.au'
}
