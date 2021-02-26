import React, { useState } from 'react';
import './style.css'
import ProModal from '../ProModal';
import AuthModals from '../ProModal/authModals'

function ProLoginBtn() {

    const [showModal, setShowModal] = useState(false);

    React.useEffect(() => {
        console.log("showModal", showModal);
    }, [showModal])

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