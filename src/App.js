import React from 'react'
import ProModal from './components/Lib/ProModal'

// vendors
import './assets/vendors/css/bootstrap-reboot.min.css'
import './assets/vendors/css/bootstrap-grid.min.css'
import './assets/css/content.css'
import './assets/css/master.css';

import Layout from './Layout'

function App() {

  const modalRef = React.useRef();

  return (
    <div>
      <Layout />
      <ProModal ref={modalRef}>
        <h1>Modal Header!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt
          libero voluptatum accusamus quia porro, doloribus ut, ex dolor temporibus
          enim voluptatibus debitis corporis totam quas veritatis iste molestiae corrupti?
                    </p>
      </ProModal>
    </div>
  );
}

export default App;
