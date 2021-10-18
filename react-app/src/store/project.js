import { POST_COMMENT, DELETE_COMMENT, PATCH_COMMENT } from "./comment";
import { CREATE_UPDATE, DELETE_UPDATE, PATCH_UPDATE } from "./update"
import { CREATE_FAQ, PATCH_FAQ, DELETE_FAQ } from "./faq"
const CLEAR_PROJECT = '/project/clearProject'
const GET_PROJECT = 'project/getProject';
const GET_AllPROJECTS = '/project/getAllProjects'
const GET_RANDOM_PROJECTS = '/project/getAllProjects'

export const clear_project = () => {
  return {
    type: CLEAR_PROJECT,
    payload: {},
  };
}

const get_project = (project) => {
  return {
    type: GET_PROJECT,
    payload: project,
  };
}

const get_all_projects = (project) => {
  return {
    type: GET_AllPROJECTS,
    payload: project,
  };
}


const get_random_projects = (project) => {
  return {
    type: GET_RANDOM_PROJECTS,
    payload: project,
  };
}


export const getProject = (projectId) => async dispatch => {
  const response = await fetch(`/api/projects/${projectId}`);
  const data = await response.json();
  dispatch(get_project(data));
  return response;
}


export const getAllProjects = () => async dispatch => {
  const response = await fetch(`/api/projects/`);
  const data = await response.json();
  dispatch(get_project(data.projects));
  return response;
}


export const patchProject = ({ projectId, campaign }) => async dispatch => {
  const response = await fetch(`/api/projects/${projectId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      projectId,
      campaign
    })
  })
  const data = await response.json();
  dispatch(get_all_projects(data.projects));
  return response;
}


export const getRandomProjects = () => async dispatch => {
  const response = await fetch(`/api/projects/random`);


  const data = await response.json()
  dispatch(get_random_projects(data))
  return response
}


const projectReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case CLEAR_PROJECT:
      return action.payload;//Empty object
    case GET_PROJECT:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    case GET_AllPROJECTS:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    case GET_RANDOM_PROJECTS:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    case POST_COMMENT:
      newState = Object.assign({}, state);
      newState.comments.push(action.payload);
      return newState;
    case PATCH_COMMENT:
      newState = Object.assign({}, state);
      for (let i = 0; i < newState.comments.length; i++) {
        if (newState.comments[i].id === action.payload.comment_id) {
          newState.comments[i] = action.payload.data;
          break;
        }
      }
      return newState;
    case DELETE_COMMENT:
      newState = Object.assign({}, state);
      newState.comments = newState.comments.filter(comment => {
        return comment.id !== action.payload;
      })
      return newState
    case DELETE_UPDATE:
      newState = Object.assign({}, state);
      newState.updates = action.payload
      return newState;
    case CREATE_UPDATE:
      newState = Object.assign({}, state);
      newState.updates = action.payload
      return newState;
    case PATCH_UPDATE:
      newState = Object.assign({}, state);
      newState.updates = action.payload
      return newState;
    case CREATE_FAQ:
      newState = Object.assign({}, state);
      newState.faqs = action.payload
      return newState;
    case PATCH_FAQ:
      newState = Object.assign({}, state);
      newState.faqs = action.payload
      return newState;
    case DELETE_FAQ:
      newState = Object.assign({}, state);
      newState.faqs = action.payload
      return newState;
    default:
      return state;
  }
}

export default projectReducer;
