import React, { useState } from 'react'
//
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './style.css'

function ProModal(props) {

    const { showModal, setShowModal } = props;

    //new

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
                {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    {props.children}
                </Modal>
            </div>
        );
    }

    return null


    //old

    // // const open = () => {
    // //     setShowModal(true)
    // //     // document.getElementsByTagName('body')[0].style.margin = "0";
    // //     // // document.getElementsByTagName('body')[0].style.height = "100%";
    // //     // document.getElementsByTagName('body')[0].style.overflow = "hidden";
    // // };
    // const close = () => {
    //     setShowModal(false);
    // };
    // if (showModal) {
    //     return (
    //         <div className={`pro-modal ${showModal ? "active" : ""}`}>
    //             <div className={"modal-backdrop"} onClick={close} />
    //             <div className={"modal-wrapper"}>
    //                 {props.children}
    //             </div>
    //         </div>
    //     )
    // }
    // return null;

};

export default ProModal