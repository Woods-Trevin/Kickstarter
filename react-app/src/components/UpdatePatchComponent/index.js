import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as updateActions from '../../store/update'

import './UpdatePatchComponent.css';

export default function UpdatePatchComponent({ setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId }) {

    const dispatch = useDispatch()

    const currentProject = useSelector(state => state.project.id)
    const updates = useSelector(state => state.project.updates)
    const currentUpdate = updates.find(update => update.id === currentUpdateId)

    const [description, setDescription] = useState(currentUpdate?.description)
    const [title, setTitle] = useState(currentUpdate?.title)

    function handleUpdateUpdate(e) {
        e.preventDefault()

        dispatch(updateActions.patchUpdate({ idx: currentUpdateId, title: title, description: description, project_id: currentProject }))
        setToRenderComponent(true)
        setToRenderDisplay(false)
        setToRenderPatch(false)

    }

    useEffect(() => {

    }, [dispatch, title, description])



    return (
        <div>
            <div className="updatePatch_return_ctnr">
                <li className="updatePatch_return btn-primary" onClick={() => {
                    setToRenderComponent(false)
                    setToRenderDisplay(true)
                    setToRenderPatch(false)
                }}>CANCEL</li>
            </div>
            <form onSubmit={handleUpdateUpdate}>
                <div className="updatePatch_outter_ctnr">
                    <div className="title_ctnr">
                        <label>
                            <div className="titleLabel_ctnr">
                                Enter New Title:
                            </div>
                            <div className="updateTitle_ctnr">
                                <input
                                    type="text"
                                    name="title"
                                    value={title}
                                    placeholder="Title"
                                    className="updateTitle_TF"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </label>
                    </div>
                    <div className="description_ctnr">
                        <label>
                            <div className="descriptionLabel_ctnr">
                                Enter New Description:
                            </div>
                            <div className="updateDescription_ctnr">
                                <textarea
                                    name="description"
                                    value={description}
                                    rows="8"
                                    columns="30"
                                    placeholder="Add New Update"
                                    className="updateDescription_TF"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="createUpdateBtn_ctnr">
                    <button type="submit" className="createUpdateBtn" >Change Update</button>
                </div>
            </form>
        </div>
    )
}
