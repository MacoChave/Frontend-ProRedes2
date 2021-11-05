import './Modal.css'
export const Modal = ({ isOpen, closeModal, title, children }: any) => {

    const handleModalDialogClick = (e: any) => {
        e.stopPropagation()
    }

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal-dialog" onClick={handleModalDialogClick}>
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            <h5> {title} </h5>
                        </div>
                        <button className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body"> {children} </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={closeModal}>
                            Aceptar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}