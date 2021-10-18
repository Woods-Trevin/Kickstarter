import React from "react";
import FormWrapper from "../FormWrapper";
import './UpdatesForm.css'

const UpdatesForm = ({ newUpdate, handleUpdate }) => {
    const infoArr = [
        'Updates are an integral part of your project.',
        'This is the only way your backers know what you are doing and what is on the horizon for this project'
    ]

    return (
        <FormWrapper header='Create an Update' infoArr={infoArr}>
            <div className='createUpdate_outmost_ctnr'>
                <div className="createUpdate_ctnr" >
                    <label>
                        <div className="createUpdate titleLabel">
                            Enter Title:
                        </div>
                        <div className="createUpdate title_Ctnr">
                            <input
                                type="text"
                                name="title"
                                onChange={handleUpdate}
                                value={newUpdate?.title}
                                placeholder="Title"
                                className="createUpdateTitle_TF"
                            />
                        </div>
                    </label>
                    <label>
                        <div className="createUpdate descriptionLabel">
                            Enter Description:
                        </div>
                        <div className="createUpdate description_Ctnr">
                            <textarea
                                name="description"
                                onChange={handleUpdate}
                                value={newUpdate?.description}
                                rows="8"
                                columns="30"
                                placeholder="Add New Update"
                                className="createUpdateDescription_TF"
                            />
                        </div>
                    </label>
                </div>
            </div>
        </FormWrapper>
    )
}

export default UpdatesForm;
