interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return <div>{color}</div>;
};

export const ChildAsFc: React.FC<ChildProps> = ({
    color,
    onClick,
    children,
}) => {
    return (
        <div>
            {color}
            {children}
            <button onClick={onClick}>Click Me</button>
        </div>
    );
};
