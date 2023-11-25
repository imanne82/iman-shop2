import Slider from "../../Components/Slider/Slider";
import CategoryBox from "../../Components/CategoryBox/CategoryBox";
import BoxNewProduct from "../../Components/BoxNewProduct/BoxNewProduct";
import TypesCoffee from "../../Components/TypesCoffee/TypesCoffee";
import imgSrcCategory from "../../Components/AppData/ImgSrcCategory";
import imgNewProduct from "../../Components/AppData/ImgNewProduct";
import AccordionTagBox from "../../Components/AccordionTagBox/AccordionTagBox";
const Home = () => {
    return <section className={'homePage'}>
        <Slider></Slider>
        <CategoryBox></CategoryBox>
        <BoxNewProduct title={'جدید ترین محصولات'} src={imgNewProduct.productCoffee}></BoxNewProduct>
        <TypesCoffee title={'انواع قهوه'} src={imgSrcCategory.srcTypeCoffee}></TypesCoffee>
        <TypesCoffee title={'ابزار دم آوری قهوه'} src={imgSrcCategory.srcCoffeeTool}></TypesCoffee>
        <BoxNewProduct title={'جدید ترین دستگاه ها'} src={imgNewProduct.coffeeMachine}></BoxNewProduct>
        <AccordionTagBox></AccordionTagBox>
    </section>
}
export default Home