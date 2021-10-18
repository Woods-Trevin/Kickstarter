export const POST_COMMENT = 'project/postComment';
export const PATCH_COMMENT = 'project/patchComment';
export const DELETE_COMMENT = 'project/deleteComment';

export const post_comment = comment => {
  return {
    type: POST_COMMENT,
    payload: comment,
  };
}

export const postComment = (description, project_id, user_id) => async dispatch => {
  const response = await fetch('/api/comments/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      project_id,
      user_id,
      description,
    })
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(post_comment(data));
    return data;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred with posting comment. Please try again.']
  }
}

const patch_comment = comment => {
  return {
    type: PATCH_COMMENT,
    payload: comment,
  }
}

export const patchComment = (description, project_id, user_id, comment_id) => async dispatch => {
  const response = await fetch(`/api/comments/${comment_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      project_id,
      user_id,
      description,
    })
  });
  if (response.ok) {
    const data = await response.json()
    const payload = {
      data,
      comment_id,
    }
    dispatch(patch_comment(payload));
    return data;
  } else {
    return ['An error occurred with patching comment. Please try again.']
  }
}

export const delete_comment = comment_id => {
  return {
    type: DELETE_COMMENT,
    payload: comment_id,
  }
}

export const deleteComment = comment_id => async dispatch => {
  const response = await fetch(`/api/comments/${comment_id}`, {
    method: 'DELETE'
  })
  if (response.ok) {
    dispatch(delete_comment(comment_id));
    return null
  } else {
    return ['An error occured. Please try again']
  }
}
