import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/react'
import { Button, Welcome } from '@storybook/react/demo'
import React from 'react'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with an emoji', () => (
    <Button onClick={action('clicked')}>
      <span aria-label="cool button" role="img">
        😎
      </span>
    </Button>
  ))
