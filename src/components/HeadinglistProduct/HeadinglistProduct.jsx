import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import MainLayout from "@components/Layout/Layout";
import styles from './styles.module.scss';
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";

function HeadinglistProduct() {
    const {container, containerItem} = styles;
    const targetDate = '2026-07-30T00:00:00';
    return ( 
        <MainLayout> 
           {/*<CountdownTimer targetDate={targetDate} />*/}
           <div className={container}>
                <CountdownBanner />

                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
           </div>
        </MainLayout>
     );
}

export default HeadinglistProduct ;