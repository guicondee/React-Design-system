import { TextInput, TextInputInput, TextInputInputProps, TextInputRootProps } from './TextInput'
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Input placeholder='type your e-mail adress' />
        <TextInput.Icon>  
          <Envelope />
        </TextInput.Icon> 
     </>
   )
  },
  argTypes: {
    children: {
      table: {
        disable: true, 
      }
     },
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
