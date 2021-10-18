import React from "react";
import './css/text-area.css';

const DescriptionForm = ({ description, handleChange, currentStep}) => {
  //Return no JSX if not on this step yet
  if (currentStep !== 2) {
    return null;
  }

  return (
    <div className='start-form-container' id='start-form-description-form-container'>
      <div className='start-form-spacer'>
        <div className='start-form-content'>
          <h2 className='start-form-heading'>Describe what you’ll be creating.</h2>
          <h3 className='start-form-sub-heading'>And don’t worry, you can edit this later, too.</h3>
          <div>
          <textarea
            name='description'
            value={description}
            onChange={handleChange}
            placeholder='A novel written in three languages.'
            className='start-text-area'
            maxLength={200} //Same max length as the db column
          />
          <div className='start-form-character-count'>{description.length}/200</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionForm;
