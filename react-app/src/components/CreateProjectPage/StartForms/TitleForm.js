import React from "react";

const TitleForm = ({ title, handleChange, currentStep}) => {
  //Return no JSX if not on this step yet
  if (currentStep !== 3) {
    return null;
  }

  return (
    <div className='start-form-container'>
      <div className='start-form-spacer'>
        <div className='start-form-content'>
          <h2 className='start-form-heading'>Last one—set a title for your project.</h2>
          <h3 className='start-form-sub-heading'>Give it a title. Something to let others remember you by.</h3>
          <textarea
            name='title'
            value={title}
            onChange={handleChange}
            placeholder='Long Night Of Solace'
            className='start-text-area'
            maxLength={100}
          />
          <div className='start-form-character-count'>{title.length}/100</div>
        </div>
      </div>
    </div>
  )
}

export default TitleForm;
