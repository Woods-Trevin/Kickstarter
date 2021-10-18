
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Start.css';
import TagForm from './StartForms/TagForm';
import DescriptionForm from './StartForms/DescriptionForm';
import TitleForm from './StartForms/TitleForm';

const CreateProjectPage = () => {
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ tag: '', description: '', title: '' })
  const totalSteps = 3;
  //The disabled attribute is true if the current steps data is falsey
  let isDisabled = !formData[Object.keys(formData)[currentStep - 1]];

  const prevStep = e => {
    e.preventDefault()
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1)
    }
  }

  const nextStep = e => {
    e.preventDefault()
    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    const oldState = { ...formData }
    setFormData({
      ...oldState,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(user.id, 'user id post');
    const response = await fetch('/api/projects/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
        tag_id: formData.tag,
        user_id: user.id,
      })
    });

    const project = await response.json();
    history.push(`/projects/${project.id}/edit/basics`);
  }


  if (!user) {
    history.push('/login')
  }

  return (
    <div className='start-container'>
      <div className='start-step-count'>{currentStep} of {totalSteps}</div>
      <form onSubmit={handleSubmit}>
        <TagForm tag={formData.tag} handleChange={handleChange} currentStep={currentStep} />
        <DescriptionForm description={formData.description} handleChange={handleChange} currentStep={currentStep} />
        <TitleForm title={formData.title} handleChange={handleChange} currentStep={currentStep} />
        <div>
          <div className='start-form-spacer'>
            <div className='start-form-button-container'>
              {
                currentStep < totalSteps
                  ? <button type="submit" className={isDisabled ? 'disabled' : 'start-form-next-btn'} onClick={nextStep} disabled={isDisabled}>Next</button>
                  : <button type='submit' className={isDisabled ? 'disabled' : 'start-form-next-btn'} disabled={isDisabled}>Continue</button>
              }
              {
                currentStep > 1
                && <span className='start-form-back-btn' onClick={prevStep}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                  </svg>
                  <span className='start-form-back-btn-text'>Prev</span>
                </span>
              }
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateProjectPage;
