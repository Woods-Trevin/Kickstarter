export const GET_FAQ = 'update/GET_FAQ';
export const CREATE_FAQ = 'update/CREATE_FAQ';
export const PATCH_FAQ = 'update/PATCH_FAQ';
export const DELETE_FAQ = 'update/DELETE_FAQ';

export const get_faq = (faqs) => {
    return {
        type: GET_FAQ,
        payload: faqs
    }
}
export const create_faq = (faq) => {
    return {
        type: CREATE_FAQ,
        payload: faq,
    };
}


export const patch_faq = (faq) => {
    return {
        type: PATCH_FAQ,
        payload: faq
    }
}

export const delete_faq = (faq) => {
    return {
        type: DELETE_FAQ,
        payload: faq
    }
}


export const getFAQs = (body) => async (dispatch) => {
    const response = await fetch(`/api/faqs/`)

    if (response.ok) {
        const data = await response.json()
        dispatch(get_faq(data))
        return data
    }
}


export const createFAQ = (body) => async (dispatch) => {
    const response = await fetch(`/api/faqs/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(create_faq(data));
        return response
    }
};


export const patchFAQ = (body) => async (dispatch) => {
    console.log(body.idx)
    const response = await fetch(`/api/faqs/${body.idx}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(patch_faq(data))
        return data
    }
}

export const deleteFAQ = (body) => async (dispatch) => {
    console.log(body.idx)
    const response = await fetch(`/api/faqs/${body.idx}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(delete_faq(data))
        return data
    }
}

// export default function faqReducer(state = {}, action) {
//     let newState;
//     switch (action.type) {
//         case GET_FAQ:
//             newState = Object.assign({}, state);
//             newState = action.payload;
//             return newState;
//         case CREATE_FAQ:
//             newState = Object.assign({}, state);
//             newState = action.payload;
//             return newState;
//         case PATCH_FAQ:
//             newState = Object.assign({}, state);
//             newState = action.payload;
//             return newState;
//         case DELETE_FAQ:
//             newState = Object.assign({}, state);
//             newState = action.payload;
//             return newState;
//         default:
//             return state;
//     }
// }