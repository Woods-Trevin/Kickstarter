import './UpdatesView.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as updateActions from '../../store/update'

function UpdatesView({ id }) {
    const dispatch = useDispatch()
    const [updateDescription, setUpdateDescription] = useState("")
    const [updateTitle, setUpdateTitle] = useState("")
    const currentUser = useSelector(state => state.session.user?.id)
    // const currentProject = useSelector(state => state.project?.id)
    // useEffect(() => {
    // }, [updateTitle, updateDescription])

    function handleUpdateCreation(e) {
        e.preventDefault()
        const payload = {
            title: updateTitle,
            description: updateDescription,
            user_id: currentUser,
            project_id: 1
        }

        dispatch(updateActions.createUpdate(payload))

    }

    return (
        <div>
            <h1>Updates Component</h1>
            <form onSubmit={handleUpdateCreation}>
                <div>
                    <label>
                        Create An Update:
                        <div>
                            <input
                                type="text"
                                name="title"
                                value={updateTitle}
                                placeholder="Title"
                                className="updateTitle_TF"
                                onChange={(e) => setUpdateTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <textarea
                                name="description"
                                value={updateDescription}
                                rows="8"
                                columns="30"
                                placeholder="Add New Update"
                                className="update_TF"
                                onChange={(e) => setUpdateDescription(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <button type="submit" className="createUpdateBtn">Add Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdatesView;
