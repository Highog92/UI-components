import indicatorNavStyle from './IndicatorNav.module.scss'
import homeFilled from './NavAssets/HomeFilled.svg'
import homeOutline from './NavAssets/HomeOutline.svg' 
import userFilled from './NavAssets/userFilled.svg'
import userOutline from './NavAssets/userOutline.svg'

export function IndicatorNav() {



    return (
            <nav className={indicatorNavStyle.navigation}>
                <ul>
                    <li className={indicatorNavStyle.active}>
                        <img src={homeOutline} className={indicatorNavStyle.homeIcon}/>
                        <img src={homeFilled} className={indicatorNavStyle.homeActiveIcon}/>
                    </li>
                    <li>
                        <img src={userOutline} className={indicatorNavStyle.userIcon}/>
                        <img src={userFilled} className={indicatorNavStyle.userActiveIcon}/>
                    </li>
                    <li>
                        <img src="" className={indicatorNavStyle.heartIcon}/>
                        <img src="" className={indicatorNavStyle.heartActiveIcon}/>
                    </li>
                    <li>
                        <img src="" className={indicatorNavStyle.folderIcon}/>
                        <img src="" className={indicatorNavStyle.folderActiveIcon}/>
                    </li>
                    <li>
                        <img src="" className={indicatorNavStyle.cogIcon}/>
                        <img src="" className={indicatorNavStyle.cogActiveIcon}/>
                    </li>
                    <div className={indicatorNavStyle.indicator}></div>
                </ul>
            </nav>
    )
}