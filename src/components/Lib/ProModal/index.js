import React, { useState } from 'react'
//components
import { Modal } from 'reactstrap';
//style
import './style.css'

function ProModal(props) {
    const { showModal, setShowModal } = props;
    const {
        className
    } = props;

    React.useEffect(() => {
        setModal(showModal)
    }, [showModal])

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
        setShowModal(!showModal)
    };

    if (showModal) {
        return (
            <div>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    {props.children}
                </Modal>
            </div>
        );
    }

    return null
};

export default ProModal