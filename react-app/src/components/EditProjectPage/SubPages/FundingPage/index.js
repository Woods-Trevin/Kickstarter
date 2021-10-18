import React from "react";
import SubPageHeader from '../SubPageHeader';
import FundingForm from "./FundingForm";

const FundingPage = ({ pledge_goal, handleChange }) => {
  return (
    <>
      <SubPageHeader header='Let’s talk about money' subHeader='Plan and manage your project’s finances.' />
      <FundingForm pledge_goal={pledge_goal} handleChange={handleChange} />
    </>
  )
}

export default FundingPage;
