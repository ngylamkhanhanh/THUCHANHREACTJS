import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from "./styles.module.scss";
import Info from '@components/Info/Info';
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import HeadinglistProduct from "@components/HeadinglistProduct/HeadinglistProduct";

function HomePage() {
    const {container} = styles 
    return ( 
        < >
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling/>
                <HeadinglistProduct />
            </div>
        </>
     );
}

export default HomePage;