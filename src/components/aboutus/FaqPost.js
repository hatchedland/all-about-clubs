import { useState } from "react";
import { KnowMore, KnowMoreDark} from "../icons/Icons";
import '../clubupdates/ClubUpdates.css';
import "./AboutUs.css";
const Faqpost = (props) => {
  const [show, setShow] = useState(false);
  const displayHandler = () => {
    setShow((prev) => !prev);
  };
  // const arrow =  document.getElementById('Arrow')
  return (
    <div>
      <div className="faq-question" style={ ( props.id % 2 != 0) ? {backgroundColor: '#222', color: '#fff'} : null }>
        <p >{props.question}</p>
        
  {/* {(props.id % 2 == 0) ? arrow.style.fill = '#fff' : null } */}
        <div onClick={displayHandler} className="know-more">
          <div style={show ? {transform: 'rotate(180deg)'}: null }>{ ( props.id % 2 == 0) ? <KnowMore /> : <KnowMoreDark /> }</div>
          
        </div>
      </div>

      {show ? <p className="faq-answer">{props.answer}</p> : ""}
    </div>
  );
};
export default Faqpost;