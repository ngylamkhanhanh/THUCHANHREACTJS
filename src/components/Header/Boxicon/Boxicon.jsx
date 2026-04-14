import styles from '../styles.module.scss';
import fbicon from '@icons/svgs/facebookicon.svg';
import ytbicon from '@icons/svgs/ytbicon.svg';
import tiktokicon from '@icons/svgs/tiktokicon.svg';

function Boxicon({type, href}) {
    const {boxicon} = styles;

    const handleRenderIcon = (type) => {
        switch(type) {
            case 'fb' :
                return fbicon;
                case 'ytb' :
                return ytbicon;
                case 'tiktok' :
                return tiktokicon;
            
        }
    }

    return ( 
        <div className={boxicon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>);
}

export default Boxicon;