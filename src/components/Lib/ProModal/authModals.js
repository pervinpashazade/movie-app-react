import React, { useState } from 'react'
//components
import { ModalBody } from 'reactstrap';
import ProLogin from '../ProAuth/ProLogin'
import ProRegister from '../ProAuth/ProRegister'
import ForgotPassword from '../ProAuth/ForgotPassword'

function AuthModals(props) {

    const { content } = props;

    const [component, setComponent] = useState(content)

    function renderContent() {
        switch (component) {
            case 'ProRegister':
                return <ProRegister setModalComponent={setComponent} />;
            case 'ForgotPassword':
                return <ForgotPassword setModalComponent={setComponent} />;
            default:
                return <ProLogin setModalComponent={setComponent} />;
        }
    }

    return (
        <>
            <ModalBody>
                {renderContent()}
            </ModalBody>
        </>
    )
}

export default AuthModals
