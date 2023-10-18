
import React from "react";
import './CustomInput.css';

const CustomInput = (props) => {
    const {type, label, i_id } = props
    // let fieldname = type.toString()
    return (
        <div className=''>
           <input type={type} className="input-control" id={i_id} placeholder={label} required />
        </div>
    )
}

export default CustomInput;