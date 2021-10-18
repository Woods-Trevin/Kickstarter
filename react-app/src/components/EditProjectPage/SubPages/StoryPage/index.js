import React from "react";
import SubPageHeader from '../SubPageHeader';
import RisksForm from "./forms/RisksForm";
import StoryForm from "./forms/StoryForm";

const StoryPage = ({campaign, handleRTE}) => {
  return (
    <>
      <SubPageHeader header='Introduce your project' subHeader='Tell people why they should be excited about your project. Get specific but be clear and be brief.' />
      <StoryForm campaign={campaign} handleRTE={handleRTE}/>
      <RisksForm />
    </>
  )
}

export default StoryPage;
