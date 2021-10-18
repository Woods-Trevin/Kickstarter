import React from "react";
import './FormWrapper.css';

const FormWrapper = ({ header, infoArr, children }) => {
  return (
    <div className='form-wrapper-border'>
      <div className='edit-page-spacer'>
        <div className='form-wrapper-spacer'>
          <div className='form-info-container'>
            <h2 className='form-info-header'>{header}</h2>
            {infoArr.map((info, i) => {
              return <p className='form-info' key={i}>{info}</p>
            })}
          </div>
          <div className='form-wrapper-spacer-2'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormWrapper;
