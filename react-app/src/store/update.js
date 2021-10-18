export const CREATE_UPDATE = 'update/CREATE_UPDATE';
export const DELETE_UPDATE = 'update/DELETE_UPDATE';
export const PATCH_UPDATE = 'update/PATCH_UPDATE';

const create_update = (update) => {
    return {
        type: CREATE_UPDATE,
        payload: update,
    };
}

const delete_update = (message) => {
    return {
        type: DELETE_UPDATE,
        payload: message
    }
}

const patch_update = (update_id) => {
    return {
        type: PATCH_UPDATE,
        payload: update_id
    }
}


export const createUpdate = (body) => async (dispatch) => {
    const response = await fetch(`/api/updates/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(create_update(data));
        return response
    }
};

export const deleteUpdate = (body) => async (dispatch) => {
    const response = await fetch(`/api/updates/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(delete_update(data))
        return data
    }
}

export const patchUpdate = (body) => async (dispatch) => {
    const response = await fetch(`/api/updates/${body.idx}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idx: body.idx,
            title: body.title,
            description: body.description,
            project_id: body.project_id,
        })
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(patch_update(data))
        return data
    }
}
