import * as React from 'react';

import { cn } from '@/lib/utils';

type EndAdornment = {
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.SyntheticEvent) => void;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  endAdornments?: EndAdornment;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, endAdornments, ...props }, ref) => {
    return (
      <div className="relative w-full rounded-md border border-input shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:bg-background dark:hover:bg-input">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {endAdornments ? (
          <div
            className={`absolute right-0 top-1/2 z-10 flex size-10 h-full -translate-y-1/2 cursor-pointer items-center justify-center rounded-r ${endAdornments.className}`}
            onClick={endAdornments.onClick}
          >
            {endAdornments.children}
          </div>
        ) : null}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
