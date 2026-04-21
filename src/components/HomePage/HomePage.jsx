import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import Info from '@components/Info/Info';
import styles from './styles.module.scss';
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import HeadinglistProduct from "@components/HeadinglistProduct/HeadinglistProduct";
import { useEffect } from 'react';
import { getProducts } from '@/apis/productService';

function HomePage() {

    useEffect(() => {
       getProducts();
    }, []);
    const {container} = styles;
    return ( 
        < >
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling/>
                <HeadinglistProduct />
                <div styles={{
                    height: '200px'
                }}></div>
            </div>
        </>
     );
}

export default HomePage;