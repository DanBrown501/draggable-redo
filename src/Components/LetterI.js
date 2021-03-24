import Draggable from 'react-draggable';
import './Letters.css';



function Letters() {
    return(
        <div className="container">        
            <div >
            <div className="Letters item item-1">
                
          <Draggable><div className="Letter" id="Vowel">I </div></Draggable>
        </div>
        </div>
        </div>
    );
};

export default Letters;