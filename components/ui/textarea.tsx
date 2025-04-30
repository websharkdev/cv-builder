import * as React from 'react';

import { cn } from '@/lib/utils';

type EndAdornment = {
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.SyntheticEvent) => void;
};

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  endAdornments?: EndAdornment;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, endAdornments, ...props }, ref) => {
    return (
      <div className="group relative">
        <textarea
          className={cn(
            'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-background dark:hover:bg-input',
            className,
          )}
          ref={ref}
          {...props}
        />
        {endAdornments?.children ? (
          <div
            className={`absolute right-0 top-0 z-10 flex size-10 cursor-pointer items-center justify-center rounded-r ${endAdornments.className}`}
            onClick={endAdornments.onClick}
          >
            {endAdornments.children}
          </div>
        ) : null}
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
