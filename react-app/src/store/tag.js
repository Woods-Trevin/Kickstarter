const GET_TAGS = 'tag/getTags'

const get_tags = (tags) => {
  return {
    type: GET_TAGS,
    payload: tags,
  };
}

export const getTags = () => async dispatch => {
  const response = await fetch('/api/tags/');
  const data = await response.json();
  dispatch(get_tags(data.tags));
}

const tagReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_TAGS:
      newState = Object.assign({}, state);
      newState = action.payload;
      return newState
    default:
      return state;
  }
}

export default tagReducer;
