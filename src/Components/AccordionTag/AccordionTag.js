import {useState} from 'react'
import './AccordionTag.css'
import arrowBottom from '../../img/line-angle-down-icon.svg'


const AccordionTag = (props) => {
    const [display, setDisplay] = useState('none')
    const Handler = () => {
        setDisplay(display === 'block' ? 'none' : 'block')
    }
    return <div id="accordion">
        <div id="btn" onClick={Handler}><img src={arrowBottom} alt="down"/><h4>{props.header}</h4>
        </div>
        <div id="text" style={{display: display}}>
            <span>{props.text}</span>
        </div>
    </div>
}
export default AccordionTag