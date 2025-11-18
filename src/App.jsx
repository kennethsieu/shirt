    import React, { useRef, useState} from 'react';
    import Draggable from 'react-draggable';
    import logo from './logo.png';
    import shirt from './shirt.png';
    import "./App.css"
   

    function MyDraggableComponent() {
      const nodeRef = useRef(null);
      const [inverted, setInverted] = useState(false);
      const toggleInvert = () => setInverted(prev => !prev);

      return (

        <div className='page'>
          <div className="shirt-canvas">
            <img src={shirt} alt="shirt" className="shirt" style = {{filter: inverted ? "invert(1)" : "none"}} />
             <Draggable nodeRef={nodeRef}>
              <div ref={nodeRef}>
                <img src={logo} alt="logo" style={{ width: 120, position: "absolute", top: 40, left: 80, cursor: "grab", filter: inverted ? "invert(1)" : "none" }} />
              </div>
            </Draggable>
        </div>
        <button onClick={toggleInvert}>INVERT</button>
        </div>
      );
    }

    export default MyDraggableComponent;