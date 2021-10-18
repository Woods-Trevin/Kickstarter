import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as updateActions from '../../store/update'

import './UpdatesComponent.css'


export default function UpdatesComponent({ id, setCurrentUpdateId, setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId, setUpdateNumber }) {
    const projectUpdates = useSelector(state => state.project.updates)
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const [reload, setReload] = useState(false);


    useEffect(() => {

        setReload(false)

    }, [dispatch, reload])


    return (
        <div className="updates_outter_container">
            {projectUpdates?.map((update, idx) =>
                <div key={update.id} className='updates_inner_container'>
                    <div className='updates_container'>
                        <div className='updateBtn_container'>
                            <li className="updateInfo btn-primary" onClick={() => {
                                setCurrentUpdateId(update.id)
                                setToRenderComponent(false)
                                setToRenderDisplay(true)
                                setToRenderPatch(false)
                                setUpdateNumber(idx)
                                setReload(true)
                            }}>
                                READ MORE
                            </li>
                            {user && <li className="updateInfo btn-primary" onClick={() => {
                                dispatch(updateActions.deleteUpdate({ idx: update.id }))
                                setReload(true)
                            }}>
                                DELETE
                            </li>}
                        </div>
                        <li className='updateInfo updateNumber'>Update #{idx + 1}</li>
                        <li className='updateInfo projectTitle'>{update.title}</li>
                        <li className='updateInfo projectOwner'>{update.username}</li>
                        <li className='updateInfo projectDescription'>{update.description}</li>
                    </div>
                </div>
            )}
        </div>
    )
}
