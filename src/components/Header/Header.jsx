import Boxicon from "./Boxicon/Boxicon";
import { dataBoxicon,dataMenu } from "./constants";
import styles from '@components/Header/styles.module.scss';
import Menu from "./Menu/Menu";
import Logo from "@icons/image/logo_retina.png";
import localicon from "@icons/svgs/localicon.svg";
import phoneicon from "@icons/svgs/phoneicon.svg";
import carticon from "@icons/svgs/carticon.svg";

function MyHeader() {
    const {containerBoxicon,
        containerMenu,
        containerHeader,
        containerBox,
        container }= styles;
    return( 
        <div className={container}>
            <div className={containerHeader}>
            <div className={containerBox}>
                <div className={containerBoxicon}>
                   {
                        dataBoxicon.map((item) => {
                            return <Boxicon type={item.type} href={item.href}/>
                        })
                   }
                </div>
                <div className={containerMenu}>
                    {
                        dataMenu.slice(0, 3).map((item) => {
                           return <Menu content={item.content} href={item.href}/>;
                        })
                    }
                </div>
            </div>
            <div>
                <img src={Logo} alt="logo" style={{
                    width: '153px' ,
                    height: '53px',
                 }} />
            </div>

            <div className={containerBox}>
                <div className={containerMenu}>
                    {
                        dataMenu.slice(3, dataMenu.length).map((item) => {
                           return <Menu content={item.content} href={item.href}/>;
                        })
                    }
                </div>

                <div className={containerBoxicon}>
                   <img width={26} height={26} src={localicon} alt="localicon" />
                    <img width={26} height={26} src={phoneicon} alt="phoneicon" />
                    <img width={26} height={26} src={carticon} alt="carticon" />
                </div>
            </div>
            </div>
        </div>
    );
}

export default MyHeader;