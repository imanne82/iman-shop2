import './BoxNewProduct.css'
import Title from "../Title/Title";
// import images from "../AppData/ImgSrcCategory";
import SliderProduct from "../SliderProduct/SliderProduct";

const BoxNewProduct = (props) => {
    return <div className={'container'}>
        <Title title={props.title}></Title>
        <SliderProduct src={props.src}></SliderProduct>
    </div>
}
export default BoxNewProduct