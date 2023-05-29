import React from 'react';

interface InputTextProps {
    label: string;
    id:string;
    value:string;
}

export const InputText = ({
    label,
    id,
    value,
    ...props
}:InputTextProps) => {
    return (
        <>
            <label>{label}:</label>
            <input type="text" id={id} name={id} value={value} />
        </>
    )
}