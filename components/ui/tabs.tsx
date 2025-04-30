'use client';
import { IconSizeDefault, IconStrokeWidthDefault } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import * as React from 'react';

interface Tab {
    title: string;
    icon: LucideIcon;
}

type TabItem = Tab;

interface ExpandableTabsProps {
    tabs: TabItem[];
    className?: string;
    activeColor?: string;
    onChange: (index: number) => void;
    selected: number;
}

const buttonVariants = {
    initial: {
        gap: 0,
        paddingLeft: '.5rem',
        paddingRight: '.5rem',
    },
    animate: (isSelected: boolean) => ({
        gap: isSelected ? '.5rem' : 0,
        paddingLeft: isSelected ? '1rem' : '.5rem',
        paddingRight: isSelected ? '1rem' : '.5rem',
    }),
};

const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: 'max-content', opacity: 1 },
    exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: 'spring', bounce: 0, duration: 0.6 };

export function ExpandableTabs({
    tabs,
    className,
    activeColor = 'text-primary',
    onChange,
    selected,
}: ExpandableTabsProps) {
    return (
        <div className={cn('flex flex-wrap items-center gap-2', className)}>
            {tabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                    <motion.button
                        key={tab.title}
                        variants={buttonVariants}
                        initial={false}
                        animate="animate"
                        custom={selected === index}
                        onClick={() => onChange(index)}
                        transition={transition}
                        className={cn(
                            'relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300',
                            selected === index
                                ? cn('bg-muted', activeColor)
                                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                        )}
                    >
                        <Icon size={IconSizeDefault} strokeWidth={IconStrokeWidthDefault} />
                        <AnimatePresence initial={false}>
                            {selected === index && (
                                <motion.span
                                    variants={spanVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={transition}
                                    className="truncate whitespace-nowrap text-xs"
                                >
                                    {tab.title}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                );
            })}
        </div>
    );
}
