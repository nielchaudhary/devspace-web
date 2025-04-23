import { cn } from '../../lib/utils';
import React, { MouseEvent, useState, useRef } from 'react';

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
  duration?: number;
}

export const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ className, children, rippleColor = '#ffffff', duration = 600, onClick, ...props }, ref) => {
    const [ripples, setRipples] = useState<
      Array<{ x: number; y: number; size: number; id: number }>
    >([]);
    const cleanupIds = useRef<number[]>([]);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const newRipple = { x, y, size, id: Date.now() };
      setRipples((prev) => [...prev, newRipple]);

      cleanupIds.current.forEach((id) => clearTimeout(id));
      cleanupIds.current = [];

      const timeoutId = window.setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
      }, duration);

      cleanupIds.current.push(timeoutId);

      onClick?.(event);
    };

    // Clean up timeouts on unmount
    React.useEffect(() => {
      return () => {
        cleanupIds.current.forEach((id) => clearTimeout(id));
      };
    }, []);

    return (
      <button
        className={cn('relative overflow-hidden', className)}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute animate-ripple rounded-full opacity-30"
            style={{
              width: ripple.size,
              height: ripple.size,
              top: ripple.y,
              left: ripple.x,
              backgroundColor: rippleColor,
              transform: 'scale(0)',
              animationDuration: `${duration}ms`,
            }}
          />
        ))}
      </button>
    );
  }
);

RippleButton.displayName = 'RippleButton';
