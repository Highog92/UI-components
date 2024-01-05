import navStyle from './navigation.module.scss'
import HouseSVG from './MaterialSymbolsLightHomeOutline.svg'


function Navigation() {

    return (
        <section >
            <nav className={navStyle.navigation}>
                <img src={HouseSVG} />
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Other stuff</li>
                </ul>
            </nav>
        </section>
    )
}

export default Navigation