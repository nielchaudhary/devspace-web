import React, { CSSProperties, ComponentPropsWithoutRef } from 'react';

import { cn } from '../../lib/utils';

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<'button'> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#ffffff',
      shimmerSize = '0.05em',
      shimmerDuration = '5s',
      borderRadius = '100px',
      background = 'rgba(0,0,0,1)',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            '--spread': '90deg',
            '--shimmer-color': shimmerColor,
            '--radius': borderRadius,
            '--speed': shimmerDuration,
            '--cut': shimmerSize,
            '--bg': background,
            fontWeight: 'bold',
            color: 'white',
            fontSize: '1rem',
            padding: '10px 35px',
          } as CSSProperties
        }
        className={cn(
          'group relative z-40 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black',
          'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}

        <div
          className={cn(
            'insert-0 absolute size-full',

            'rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]',

            'transform-gpu transition-all duration-1000 ease-in',

            'group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]',

            'group-active:shadow-[inset_0_-10px_10px_#ffffff3f]'
          )}
        />

        <div
          className={cn(
            'absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]'
          )}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = 'ShimmerButton';
