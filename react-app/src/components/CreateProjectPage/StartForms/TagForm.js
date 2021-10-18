import React from "react";
import { useSelector } from 'react-redux';
import './css/drop-down.css';

const TagForm = ({ tag, handleChange, currentStep }) => {
  //Return no JSX if not on this step yet
  const tags = useSelector(state => Object.values(state.tags));
  if (currentStep !== 1) {
    return null
  }

  return (
    <div className='start-form-container'>
      <div className='start-form-spacer'>
        <div className='start-form-content'>
          <h2 className='start-form-heading'>First, let's get you set up.</h2>
          <h3 className='start-form-sub-heading'>Pick a project category to connect with a specific community. You can always update this later.</h3>
          <select
            name='tag'
            value={tag}
            onChange={handleChange}
            className='start-drop-down'
          >
            {
              tags?.map(({ id, title }) =>
                <option value={id} >{title}</option>
              )}
          </select>
        </div>
      </div>
    </div>
  )
}

export default TagForm;
