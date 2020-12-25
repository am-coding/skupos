import { FC } from 'react';

interface inputProps {
    placeholder: string,
}

const Input: FC <inputProps> = ({placeholder}) => {
    return (
        <>
            <input placeholder={placeholder} className="bg-white rounded-full p-3 pr-44 mb-6 placeholder-black::placeholder border-2" />
        </>
    )
}

export default Input;
