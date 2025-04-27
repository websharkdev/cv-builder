const BSection = ({
    title,
    description,
    children,
}: {
    title: string;
    description?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className="col-span-full grid grid-cols-1 gap-2.5 border-b border-gray-300 pb-5">
            <h3 className="text-sm font-semibold text-pretty">{title}:</h3>
            {description && (
                <p className="text-xs text-gray-600 hyphens-auto font-normal text-pretty leading-relaxed">
                    {description}
                </p>
            )}
            {children}
        </div>
    );
};

export default BSection;
