import React, { forwardRef, useImperativeHandle } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const ProModal = forwardRef((props, ref) => {

    const [display, setDisplay] = React.useState(false);

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            close: () => close()
        }
    });

    const open = () => {
        setDisplay(true)
        document.getElementsByTagName('body')[0].style.margin = "0";
        // document.getElementsByTagName('body')[0].style.height = "100%";
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
    };

    const close = () => {
        setDisplay(false);
    };

    if (display) {
        return (ReactDOM.createPortal(
            <div className={`pro-modal ${display ? "active" : ""}`}>
                <div className={"modal-backdrop"} />
                <div className={"modal-wrapper"}>
                    {props.children}
                </div>
            </div>, document.getElementById("modal-root"))
        )
    }

    return null;

})

// return (
//     <>
//         {!showModal ? null :
//             ReactDOM.createPortal(
//                 <div className="pro-modal">
//                     <div className="modal-backdrop"></div>
//                     <div className="modal-wrapper"
//                         // style={{
//                         //     // opacity: showModal ? "1" : "0"
//                         // }}
//                         >
//                         {children}
//                     </div>
//                 </div>, document.getElementById('modal-root'))
//         }
//     </>
// )
// };

// function ProModal(props) {

//     const {
//         showModal,
//         setShowModal,
//         children
//     } = props;

//     React.useEffect(() => {
//         console.log("showModal", showModal)
//     }, [showModal])

//     if (React.Children.count(children) === 0) {
//         return null;
//     }


//     if (showModal) {
//         return ReactDOM.createPortal(
//             <div className={"pro-modal"}>
//                 <div onClick={setShowModal} className={"modal-backdrop"} />
//                 <div className={"modal-wrapper"}>
//                     {props.children}
//                 </div>
//             </div>, document.getElementById("modal-root"))
//     }

//     return null;

//     // return (
//     //     <>
//     //         {!showModal ? null :
//     //             ReactDOM.createPortal(
//     //                 <div className="pro-modal">
//     //                     <div className="modal-backdrop"></div>
//     //                     <div className="modal-wrapper"
//     //                         // style={{
//     //                         //     // opacity: showModal ? "1" : "0"
//     //                         // }}
//     //                         >
//     //                         {children}
//     //                     </div>
//     //                 </div>, document.getElementById('modal-root'))
//     //         }
//     //     </>
//     // )
// }

export default ProModal