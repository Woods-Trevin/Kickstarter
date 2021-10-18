import React, { useState, useEffect } from 'react';
import Logo from '../Navigation/logo';
import NavItem from './NavItem';
import '../Navigation/Navigation.css';
import './EditProjectPage.css';
import { NavLink, Route, Redirect, useRouteMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProject } from '../../store/project';
import { getTags } from '../../store/tag';
import BasicsPage from './SubPages/BasicsPage';
import FundingPage from './SubPages/FundingPage';
import StoryPage from './SubPages/StoryPage';
import UpdatesPage from './SubPages/UpdatesPage';

const EditProjectPage = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams()
  const { path, url } = useRouteMatch(); //Allows for backwards compatibility of route names
  const user = useSelector(state => state.session.user);
  const project = useSelector(state => state.project);
  const [formData, setFormData] = useState({
    ...project
  })
  const [newUpdate, setNewUpdate] = useState();

  useEffect(() => {
    dispatch(getProject(projectId));
    dispatch(getTags())
  }, [dispatch, projectId])
  useEffect(() => {
    setFormData({
      ...project,
    });
    setNewUpdate({
      title: '', description: '',
      project_id: projectId, user_id: user?.id,
    });
  }, [project, projectId, user])

  //If the current user does not own the project
  //Dont' show them the page

  //Controls changes of the project object
  const handleChange = e => {
    const { name, value } = e.target;
    const oldState = { ...formData };
    setFormData({
      ...oldState,
      [name]: value
    })
  }

  //Controls changes of the update object
  const handleUpdate = e => {
    const { name, value } = e.target;
    const oldState = { ...newUpdate };
    setNewUpdate({
      ...oldState,
      [name]: value
    })
  }

  //Controls changes of formData.description due to CktEditors form not having a name attribute
  const handleRTE = (data) => {
    const name = "campaign";
    const oldState = {...formData};
    setFormData({
      ...oldState,
      [name]: data
    })
  }

  const errorMessage = async response => {
    //Takes in a response object and returns a string containg
    //all the errors
    const data = await response.json();
    const errors = data.errors;
    return errors.reduce((accum, error) => {
      return accum + '\n' + error;
    });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    //Post to new update
    if (window.location.pathname === `${url}/updates`) {
      const response = await fetch(`/api/updates/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUpdate)
      });
      if (response.ok) {
        alert('Update posted!')
        setNewUpdate({
          title: '', description: '',
          project_id: projectId, user_id: user.id,
        });
      } else {
        alert(errorMessage(response));
      }
    } else { //Put project
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData
        })
      });
      if (response.ok) {
        alert('Project saved');
      } else {
        alert(errorMessage(response))
      }
    }

  }

  if (!user) {
    return <Redirect to='/login' />
  }

  //If the user does not own the project redirect them to the home page
  if (Object.keys(project).length !== 0 && project.user_id !== user.id) {
    return <Redirect to='/' />
  }

  return (
    <form onSubmit={handleSubmit}>
      <nav className='nav-bar'>
        <div className=''>
          <NavLink to='/' className='nav-button' exact={true}>
            <Logo />
          </NavLink>
        </div>
        <div className='edit-page-buttons'>
          <NavLink to={`/projects/${projectId}`} className='btn-primary edit-project-next edit-project-view-button'>
            View Project
          </NavLink>
          <button type='submit' className='btn-primary edit-project-next'>
            Save
          </button>
        </div>
      </nav>
      <div className='shadow-wrapper'>
        <div className='edit-page-spacer'>
          <div className='edit-page-items-container'>
            <NavItem emoji='✍️' text='Basics' link={`${url}/basics`} />
            <NavItem emoji='📊' text='Funding' link={`${url}/funding`} />
            <NavItem emoji='📝' text='Updates' link={`${url}/updates`} />
            <NavItem emoji='📖' text='Story' link={`${url}/story`} />
            {/* <NavItem emoji='👥' text='People' link={`${url}/people`} />
            <NavItem emoji='💰' text='Payment' link={`${url}/payment`} />
            <NavItem emoji='📢' text='Promotion' link={`${url}/promotion`} /> */}
          </div>
        </div>
      </div>
      <Route path={`${path}/basics`}>
        <BasicsPage handleChange={handleChange}
          title={formData.title}
          description={formData.description}
          tag_id={formData.tag_id}
          video_src={formData.video_src}
          image_src={formData.image_src}
          start_date={formData.start_date}
          end_date={formData.end_date}
        />
      </Route>
      <Route path={`${path}/funding`}>
        <FundingPage handleChange={handleChange}
          pledge_goal={formData.pledge_goal}
        />
      </Route>
      <Route path={`${path}/updates`}>
        <UpdatesPage newUpdate={newUpdate} handleUpdate={handleUpdate}/>
      </Route>
      <Route path={`${path}/story`}>
        <StoryPage
          campaign={formData.campaign}
          handleRTE={handleRTE}
        />
      </Route>
      <Route path={`${path}/people`}>people</Route>
      <Route path={`${path}/payment`}>payment</Route>
      <Route path={`${path}/promotion`}>promotion</Route>
    </form>
  )
}

export default EditProjectPage;
