import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function CountdownBanner() {
    const {container,containerTimer,title,boxBtn} = styles;
    const targetDate = '2026-07-30T00:00:00';
    return ( 
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>Best price this month</p>
        <div className={boxBtn}>
            <Button content={'Buy Now'} />
        </div>
        </div>
     );
}

export default CountdownBanner;