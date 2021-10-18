import React from "react";
import SubPageHeader from '../SubPageHeader';
import TitleForm from "./forms/TitleForm";
import CategoryForm from "./forms/CategoryForm";
import VideoForm from "./forms/VideoForm";
import ImageForm from "./forms/ImageForm";
import StartForm from "./forms/StartForm";
import EndForm from "./forms/EndForm";

const BasicsPage = ({ title, description, tag_id, video_src, image_src, start_date, end_date, handleChange }) => {
  return (
    <>
      <SubPageHeader header='Start with the basics' subHeader='Make it easy for people to learn about your project.' />
      <TitleForm title={title} description={description} handleChange={handleChange}/>
      <CategoryForm tag_id={tag_id} handleChange={handleChange}/>
      <VideoForm video_src={video_src} handleChange={handleChange}/>
      <ImageForm image_src={image_src} handleChange={handleChange}/>
      <StartForm start_date={start_date} handleChange={handleChange}/>
      <EndForm end_date={end_date} handleChange={handleChange}/>
    </>
  )
}

export default BasicsPage;
