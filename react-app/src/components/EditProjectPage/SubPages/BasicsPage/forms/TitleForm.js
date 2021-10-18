import React from "react";
import FormWrapper from "../../FormWrapper";
import '../../TextArea.css';

const TitleForm = ({title, description, handleChange}) => {
  const infoArr = [
    'Write a clear, brief title and subtitle to help people quickly understand your project. Both will appear on your project and pre-launch pages.',
    'Potential backers will also see them if your project appears on category pages, search results, or in emails we send to our community.'
  ];
  return (
    <FormWrapper header='Project title' infoArr={infoArr}>
      <div className='edit-form-container'>
        <div className='edit-form-title-container'>
          <div className='edit-form-header'>Title</div>
          <textarea
            name='title'
            value={title}
            onChange={handleChange}
            placeholder='Papercuts: A Party Game for the Rude and Well-Read'
            className='edit-form-text-area edit-page-text-area'
            maxLength={100}
          />
          <div className='edit-form-character-count'>{title?.length}/100</div>
        </div>
        <div>
          <div className='edit-form-header'>Subtitle</div>
            <textarea
              name='description'
              value={description}
              onChange={handleChange}
              placeholder='Papercuts is a rowdy card game about books and writing brought to you by Electric Literature.'
              className='edit-form-text-area edit-page-text-area'
              id='title-form-sub-title-text-area'
              maxLength={200}
            />
            <div className='edit-form-character-count'>{description?.length}/200</div>
        </div>
      </div>
    </FormWrapper>
  )
}

export default TitleForm;
