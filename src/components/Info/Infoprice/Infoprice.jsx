import styles from '../styles.module.scss';

function Infoprice({content, description, src}) {
    console.log(content,description,src);
    const {containerPrice, containerContent,title,des} = styles;
    return ( 
        <div className={containerPrice}>
            <img width={40} height={41} src={src} alt="priceicon" />

            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={des}>{description}</div>
            </div>
        </div>
     );
}

export default Infoprice;
