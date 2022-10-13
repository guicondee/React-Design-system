
import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';
 

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return(
    <div   
      className=
        'py-4 px-3 h-12 w-full rounded bg-gray-800 flex items-center gap-3 flex-row-reverse focus-within:ring-2 ring-cyan-300'   
    > {props.children}
    </div>
  )
}

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputRootProps) {
return (
  <Slot className='w-6 h-6 text-gray-400 '> 
  {props.children}
  </Slot>
)
}
TextInputIcon.displayName = 'TextInputIcon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}


export function TextInputInput(props: TextInputInputProps) {
  return (
      <input className="bg-transparent outline-none flex-1  text-gray-100 text-xs placeholder:text-gray-400"
        {...props}
      />  
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}