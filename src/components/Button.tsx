import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps{
  children: ReactNode;
  asChild?: boolean;
}

export function  Button({ children, asChild }:  ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={clsx(
        'text-black font-semibold py-4 px-3 bg-cyan-500 rounded hover:bg-cyan-300 text-sm w-full transition-colors focus:ring-2 ring-white font-sans',
      )}
    >
      {children}
    </Comp>
  )
}