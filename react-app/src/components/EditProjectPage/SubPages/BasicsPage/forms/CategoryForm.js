import React from "react";
import { useSelector } from "react-redux";
import FormWrapper from "../../FormWrapper";
import '../CategoryForm.css';

const CategoryForm = ({ tag_id, handleChange }) => {
  const infoArr = [
    'Choose the category that most closely aligns with your project.',
    'Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory.',
    'You’ll be able to change the category and subcategory even after your project is live.'
  ];
  const tags = useSelector(state => Object.values(state.tags))
  return (
    <FormWrapper header='Projects category' infoArr={infoArr}>
      <div>
        <select
          name='tag_id'
          value={tag_id}
          onChange={handleChange}
          className='category-form-dropdown'
        >
          {
            tags?.map(({ id, title }) =>
              <option value={id} key={id} >{title}</option>
          )}
        </select>
      </div>
    </FormWrapper>
  )
}

export default CategoryForm;
