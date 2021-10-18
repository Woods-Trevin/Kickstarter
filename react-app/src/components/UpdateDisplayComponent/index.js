import { useSelector } from 'react-redux'
import './UpdateDisplayComponent.css';

export default function UpdateDisplayComponent({ setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId, updateNumber }) {

    const updates = useSelector(state => state.project.updates);
    const chosenUpdate = updates.find(update => update.id === currentUpdateId);
    const user = useSelector(state => state.session.user)

    return (
        <div className="root-container">
            <div className="updateDisplay outter_container">
                <div className="updateDisplay inner_Container">
                    <li className="updateDisplayNum item">UPDATE #{updateNumber}</li>
                    <li className="updateDisplayTitle item">{chosenUpdate.title}</li>
                    <div className="user_ctnr">
                        <img className="updateDisplayImg item" src={'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'} alt="" />
                        <li className="updateDisplayUsername item">{chosenUpdate.username}</li>
                        <li className="creatorTag" > Creator </li>
                    </div>
                    <div className="updateDisplayDescriptionCtnr">
                        <li className="updateDisplayDescription item">{chosenUpdate.description}</li>
                    </div>
                    <div className="updateDisplayBtn_ctnr">
                        <li className="updateBtn btn btn-primary" onClick={() => {
                            setToRenderComponent(true)
                            setToRenderDisplay(false)
                            setToRenderPatch(false)
                        }}>
                            <p className="updateBtn leftArrow">{'<'}</p> {'All updates'}
                        </li>
                        {user && <li className="updateBtn editBtn" onClick={() => {
                            setToRenderComponent(false)
                            setToRenderDisplay(false)
                            setToRenderPatch(true)
                        }}>
                            {'Edit'}
                        </li>}
                    </div>
                </div>
            </div>
        </div>
    )
}
