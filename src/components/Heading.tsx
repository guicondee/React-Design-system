import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface  HeadingProps{
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  clasName?: string;
}

export function  Heading({ size= 'md', children, asChild, clasName }:  HeadingProps) {
  const Comp = asChild ? Slot : 'h2';
  return (
    <Comp className={clsx(
        'text-gray-100 font-bold font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        clasName,
      )}
    >
      {children}
    </Comp>
  )
}