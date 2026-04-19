import styles from './styles.module.scss';
import carticon from '@icons/svgs/carticon.svg';
import hearticon from '@icons/svgs/hearticon.svg';
import phoneicon from '@icons/svgs/phoneicon.svg';

function ProductItem( {src,prevSrc,name, price}) {
    const { boxImg, showImgWhenHover, showFnWhenHover, boxicon, title, prc} = styles;
    return ( 
        <div>
            <div className={boxImg}>
                <img
                    src='./src/assets/Images/Ford Everest Blue.png'
                    alt=''
                />
                <div className={showImgWhenHover}>
                    <img
                    src='http://fordtiengiang.com/wp-content/uploads/2024/07/everest-2022-22.jpg'
                    alt=''
                    />
                </div>
                <div className={showFnWhenHover}> 
                    <div className={boxicon} >
                        <img src={carticon} alt="" />
                    </div>
                    <div className={boxicon} >
                        <img src={hearticon} alt="" />
                    </div>
                    <div className={boxicon} >
                        <img src={phoneicon} alt="" />
                    </div>
                </div>      
            </div>
            <div className={title}>Ford Everest</div>
            <div className={prc}>Starting at: 1.099.000VND</div>
        </div>
     );
}

export default ProductItem;