import React from 'react'
import './style.css'

function ProModal(props) {

    const { showModal, setShowModal } = props;

    // const open = () => {
    //     setShowModal(true)
    //     // document.getElementsByTagName('body')[0].style.margin = "0";
    //     // // document.getElementsByTagName('body')[0].style.height = "100%";
    //     // document.getElementsByTagName('body')[0].style.overflow = "hidden";
    // };

    const close = () => {
        setShowModal(false);
    };

    if (showModal) {
        return (
            <div className={`pro-modal ${showModal ? "active" : ""}`}>
                <div className={"modal-backdrop"} onClick={close} />
                <div className={"modal-wrapper"}>
                    {props.children}
                </div>
            </div>
        )
    }

    return null;

};

export default ProModal