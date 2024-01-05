import darkmode from './Darkmode.module.scss'
function Darkmode() {

    return (
        <>

            <div className={darkmode.darkmode}>
                    <input type="checkbox" id={darkmode.darkMode} />
                    <label htmlFor="darkmode"></label>
                <div className={darkmode.background}></div>
            </div>
        </>
    )
}
export default Darkmode