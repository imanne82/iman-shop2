import './CategoryBox.css'
import CategoryProduct from "../CategoryProduct/CategoryProduct";
import Title from "../Title/Title";
import images from '../AppData/ImgSrcCategory'

const CategoryBox = () => {
    return <div className={'container'}>
        <Title title={'دسته بندی محصولات'}></Title>
        <div className={'categoryBox'}>
            {images.srcCategory.image.map((category, index) => <CategoryProduct key={index} title={category.title}
                                                                         imgSrc={category.imgSrc}/>)}
        </div>
    </div>
}
export default CategoryBox