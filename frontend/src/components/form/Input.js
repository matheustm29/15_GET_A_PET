import styles from './Input.module.css';

function Input({type, text, name, placeholder, handleOnChange, value, multiple}) {
    return (
        <div>
            <label htmlFor={name}>{text}:</label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                {...Input(multiple ? {multiple} : '')}
            />
        </div>
    )
}

export default Input;