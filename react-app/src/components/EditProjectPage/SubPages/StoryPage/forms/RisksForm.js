import React from "react";
import FormWrapper from "../../FormWrapper";

const RisksForm = () => {
  const infoArr = [
    'Be honest about the potential risks and challenges of this project and how you plan to overcome them to complete it.'
  ]
  return (
    <FormWrapper header='Risks and challenges' infoArr={infoArr}>

    </FormWrapper>
  )
}

export default RisksForm;
