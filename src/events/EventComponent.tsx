const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };

    const onDrageStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log("i`m being draged !!");
        console.log(event);
    };
    return (
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDrageStart}>
                Drae me!
            </div>
        </div>
    );
};

export default EventComponent;
