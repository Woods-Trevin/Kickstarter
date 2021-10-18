import React from "react";
import FormWrapper from "../../FormWrapper";

const EndForm = ({ end_date, handleChange}) => {
  const infoArr = [
    'Set a time limit for your campaign. You won’t be able to change this after you launch.'
  ]
  const formatted_date = new Date(end_date)
  return (
    <FormWrapper header='Target end date' infoArr={infoArr}>
      <div className='calendar-conatiner'>
        <div className='calendar-label'>Month / Day / Year </div>
        <input
          type="date"
          name="end_date"
          value={formatted_date}
          onChange={handleChange}
          className='calendar-input' />
      </div>
    </FormWrapper>
  )
}

export default EndForm;
