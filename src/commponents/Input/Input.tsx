import {FC, InputHTMLAttributes} from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    name: string,
    label: string
}

const Input:FC<IInput> = ({name, label, ...rest}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                {...rest}
            />
        </div>
    );
};

export default Input;