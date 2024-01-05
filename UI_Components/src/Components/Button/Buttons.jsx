import buttons from './Buttons.module.scss'
import HouseSVG from '../../assets/MaterialSymbolsLightHomeOutline.svg'

function UIbuttons() {

    return (
        <>
            <button className={buttons.button1}><img src={HouseSVG} />Button 1</button>
            <button className={buttons.button2}><img src={HouseSVG} />Button 2</button>
            <button className={buttons.button3}><img src={HouseSVG} />Button 3</button>
            <button className={buttons.button4}>Button 4</button>

            <div class="container">
                <a class="button" href="#" style="--color:#1e9bff;">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Button
                </a>
                <a class="button" href="#" style="--color: #ff1867;">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Button
                </a>
                <a class="button" href="#" style="--color: #6eff3e;">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Button
                </a>
            </div>
        </>
    )
}
export default UIbuttons