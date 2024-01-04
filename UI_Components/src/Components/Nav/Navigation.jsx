import navStyle from './navigation.module.scss'
import HouseSVG from './MaterialSymbolsLightHomeOutline.svg'


export function Navigation() {

    return (
        <section className={navStyle.navigation}>
            <nav>
                <img src={HouseSVG} alt="" />
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Other stuff</li>
                </ul>
            </nav>
        </section>
    )
}