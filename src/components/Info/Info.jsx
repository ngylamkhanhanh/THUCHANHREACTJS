import Infoprice from "@components/Info/Infoprice/Infoprice";
import { dataInfo } from "@components/Info/constant";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";


function Info() {
    const {container} = styles;
    return ( 
        
        <MainLayout> 
            <div className={container}>
                    {dataInfo.map((item) => {
                        return <Infoprice 
                            content={item.title} 
                            description={item.description} 
                            src={item.src} 
                        />;
                    })}
            </div>
        </MainLayout>
     );
}

export default Info;