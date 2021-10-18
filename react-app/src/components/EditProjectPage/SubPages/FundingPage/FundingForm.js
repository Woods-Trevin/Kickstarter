import React from "react";
import FormWrapper from "../FormWrapper";
import './FundingForm.css';

const FundingForm = ({ pledge_goal, handleChange }) => {
  const infoArr = [
    'Set an achievable goal that covers what you need to complete your project.',
    'Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.'
  ]
  return (
    <FormWrapper header='Funding goal' infoArr={infoArr}>
      <div className='edit-form-container'>
        <div className='edit-form-title-container'>
          <div className='edit-form-header'>Goal amount</div>
          <div className='flex-center'>
            <div className='funding-goal-emoji'>$</div>
            <input
              name='pledge_goal'
              value={pledge_goal}
              onChange={handleChange}
              placeholder='$1 - $9,999,999'
              className='edit-form-text-area edit-page-text-area'
              tpye='number'
              min='1'
              max='9999999'
              maxLength={7}
            />
          </div>
          <div className='edit-form-character-count'>{pledge_goal?.length}/7</div>
        </div>
      </div>
    </FormWrapper>
  )
}

export default FundingForm;
