import React from "react";
import FormWrapper from "../../FormWrapper";
import '../Calendar.css';

const StartForm = ({ start_date, handleChange}) => {
  const infoArr = [
    'We’ll provide you with recommendations on when to complete steps that may take a few days to process. You can edit this date up until the moment you launch your project, which must always be done manually.',
    'We won’t automatically launch your project.'
  ]
  return (
    <FormWrapper header='Target launch date' infoArr={infoArr}>
      <div className='calendar-conatiner'>
        <div className='calendar-label'>Month / Day / Year </div>
        <input
          type="date"
          name="start_date"
          value={start_date}
          onChange={handleChange}
          className='calendar-input' />
      </div>
    </FormWrapper>
  )
}

export default StartForm;
