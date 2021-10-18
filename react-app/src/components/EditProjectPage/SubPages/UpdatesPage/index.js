import React from "react";
import SubPageHeader from '../SubPageHeader';
import UpdatesForm from './UpdatesForm';

const UpdatesPage = ({ newUpdate, handleUpdate }) => {
  return (
    <>
      <SubPageHeader header='Keep people up to date' subHeader='Let people know of any changes going on with your project.' />
      <UpdatesForm newUpdate={newUpdate} handleUpdate={handleUpdate} />
    </>
  )
}

export default UpdatesPage;
