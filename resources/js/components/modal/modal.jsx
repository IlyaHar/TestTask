import './modal.css'
import './media.css'

function Modal({active, setActive, children}) {
    return (
        <section className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="container">
                <div className={active ? 'modal__content active' : 'modal__content'} onClick={event => event.stopPropagation()}>
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Modal
