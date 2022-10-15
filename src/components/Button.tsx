import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  asChild?: boolean;
}

export function  Button({ children, asChild, className, ...props }:  ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={clsx(
        'text-black font-semibold py-3 px-4 bg-cyan-500 rounded hover:bg-cyan-300 text-sm w-full transition-colors focus:ring-2 ring-white font-sans',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}