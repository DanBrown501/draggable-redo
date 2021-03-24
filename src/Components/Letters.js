import Draggable from 'react-draggable';
import './Letters.css';
import LetterA from './LetterA'



function Letters() {
    return(
        <div className="container">        
            <div >
            <div className="Letters item item-1">
                
          <Draggable><span className="Letter" id="Vowel">A </span></Draggable>
          <span className="Letter">B </span> 
          <span className="Letter">C </span> 
          <span className="Letter">D </span> 
          <span  className="Letter" id="Vowel">E </span>
        </div>
        
        </div>
        <div >
            <div className="Letters item item-2">
          <span><LetterA></LetterA></span>
          <span className="Letter">B </span> 
          <span className="Letter">C </span> 
          <span className="Letter">D </span> 
          <span  className="Letter" id="Vowel">E </span>
        </div>
        </div>
        <div>
            <div className="Letters item item-3">
          <span  className="Letter" id="Vowel">A </span> 
          <span className="Letter">B </span> 
          <span className="Letter">C </span> 
          <span className="Letter">D </span> 
          <span  className="Letter" id="Vowel">E </span>
        </div>
        </div>
        <div>
            <div className="Letters item item-4">
          <span  className="Letter" id="Vowel">A </span> 
          <span className="Letter">B </span> 
          <span className="Letter">C </span> 
          <span className="Letter">D </span> 
          <span  className="Letter" id="Vowel">E </span>
        </div>
        </div>
        <div>
            <div className="Letters item item-5">
          <span   className="Letter" id="Vowel">A </span> 
          <span className="Letter">B </span> 
          <span className="Letter">C </span> 
          <span className="Letter">D </span> 
          <span  className="Letter" id="Vowel">E </span>
        </div>
        </div>
        </div>

        
        
    );
};

export default Letters;