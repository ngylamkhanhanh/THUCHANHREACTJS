import Button from '@components/Button/Button';
import styles from './styles.module.scss';

function Banner () {
    const {container, content, title,des} = styles;
    return ( 
        <div className={container}>
            <div className={content}>
                <h1 className={title}>Welcome to CLICKCAR</h1>
                <div className={des}>
                    “CLICKCAR – Find your car fast.”
                </div>
                <Button content={'Go to Shop'} />
            </div>
        </div>
     );
}

export default Banner ;