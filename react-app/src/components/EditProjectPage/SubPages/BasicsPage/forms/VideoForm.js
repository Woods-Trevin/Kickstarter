import React from "react";
import FormWrapper from "../../FormWrapper";
import '../../TextArea.css';

const VideoForm = ({ video_src, handleChange }) => {
  const infoArr = [
    'Add a video that describes your project.',
    'Tell people what you’re raising funds to do, how you plan to make it happen, who you are, and why you care about this project.',
    'After you’ve uploaded your video, use our editor to add captions and subtitles so your project is more accessible to everyone.'
  ]
  return (
    <FormWrapper header='Project video' infoArr={infoArr}>
      <div className='edit-form-container'>
        <div className='edit-form-title-container'>
          <div className='edit-form-header'>Title</div>
          <textarea
            name='video_src'
            value={video_src}
            onChange={handleChange}
            placeholder='https://www.youtube.com/embed/<video_id>'
            className='edit-form-text-area edit-page-text-area'
            maxLength={100}
          />
          <div className='edit-form-character-count'>{video_src?.length}/100</div>
        </div>
      </div>
    </FormWrapper>
  )
}

export default VideoForm;
