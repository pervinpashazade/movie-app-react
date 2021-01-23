import React, { useState } from 'react';
import './style.css'
import ProModal from '../ProModal';
import ProLogin from '../ProLogin'

function ProLoginBtn(props) {

    const { test } = props;
    const [showModal, setShowModal] = useState(false)

    const modalRef = React.useRef();

    const openModal = () => {
        modalRef.current.openModal()
    };

    // const openModal = () => {
    //     setShowModal(true)
    // };

    // const closeModal = () => {
    //     setShowModal(false)
    // };

    return (
        <>
            <button onClick={openModal} className="btn-sign-in">
                <i className="icon ion-ios-log-in"></i>
                <span>sign in</span>
                {/* <ProModal showModal={showModal} setShowModal={closeModal}> */}
                <ProModal ref={modalRef}>
                    <ProLogin />
                </ProModal>

            </button>

        </>
    )
}

export default ProLoginBtn;