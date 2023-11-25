import './TypesCoffee.css'
import Title from "../Title/Title";
import BoxType from "../BoxType/BoxType";
const TypesCoffee = (props) => {
    return <div className="container">
        <Title title={props.title}></Title>
        <div className={'container-type'}>
            {props.src.src.map((src, index) => {
                return <BoxType key={index} src={src.imgSrc}></BoxType>

            })}
        </div>
    </div>
}
export default TypesCoffee