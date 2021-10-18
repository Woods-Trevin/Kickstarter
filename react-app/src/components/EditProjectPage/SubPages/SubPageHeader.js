import React from "react";
import '../EditProjectPage.css';
import './SubPageHeader.css';

const SubPageHeader = ({ header, subHeader}) => {
  return (
    <div className='sub-page-header-border'>
      <div className='edit-page-spacer'>
        <div className='sub-page-header-spacer'>
          <div className='sub-page-header-container'>
            <h1 className='sub-page-header'>{header}</h1>
            <div className='sub-page-sub-heading'>{subHeader}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubPageHeader;
