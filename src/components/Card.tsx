import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
    return (
        <div className='flex flex-col items-center justify-center bg-white w-fit h-fit rounded-xl p-8 shadow-md'>
            {children}
        </div>
    );
};

export default Card;