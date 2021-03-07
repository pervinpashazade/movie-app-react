import React, { useState } from 'react';
//components
import ProModal from '../ProModal';
import AuthModals from '../ProModal/authModals'
//style
import './style.css'

function ProLoginBtn() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => { setShowModal(true) }} className="btn-sign-in">
                <i className="icon ion-ios-log-in"></i>
                <span>sign in</span>
            </button>
            <ProModal showModal={showModal} setShowModal={setShowModal}>
                <AuthModals content={'ProLogin'} />
            </ProModal>
        </>
    )
}

export default ProLoginBtn;