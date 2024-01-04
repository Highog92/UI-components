import inputs from './Input.module.scss'

export function Input() {

    return (
        <>
            <div className={inputs.inputField}>
                <input type="text" required />
                <label>Enter Email</label>
            </div>
        </>
    )
}