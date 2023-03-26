import "./Dialog.scss";

const Dialog = ({title, image, isOpen, onClose}: {title: string, image: string, isOpen: boolean, onClose: (x: boolean) => void}) => {

    return (
        <dialog open={isOpen}>
            <div className="dialog-header">
                <h4>{title}</h4>
                <a onClick={() => onClose(false)}>&times;</a>
            </div>
            <div className="dialog-content">
                <img src={image} />
            </div>
        </dialog>
    );
};

export default Dialog;