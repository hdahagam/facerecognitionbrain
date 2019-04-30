import React from 'react';
import brain from './brain.jpg';

const Logo =() =>{
    return (
        <div className='ma4 mt0 grow shadow'>
         <img alt ='logo' src = {brain} height = '150' width = '150' />
        </div>
    );
}

export default Logo;