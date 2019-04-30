import React from 'react';

const ImageLinkForm =({onInputChange, onButtonSubmit}) =>{
    return (
        <div >
            <p className='f3' style={{display:'flex', justifyContent:'center'}}>
              This Magic Brain will detect faces in your pictures..!!
            </p>
            <div style={{display:'flex', justifyContent:'center'}}>
                <input className='w-25 h-25 shadow-5' type='text' onChange={onInputChange}/>
                <button className=' grow link shadow-5 bg-light-purple pointer' 
                onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;