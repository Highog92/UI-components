import inputs from './Input.module.scss'

 function Input() {

    return (
        <>
            <div className={inputs.inputField}>
                <input type="text" required />
                <label>Enter Email</label>
            </div>
        </>
    )
}
export default Input