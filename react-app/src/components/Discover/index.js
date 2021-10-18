import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAllProjects } from "../../store/project";
import { getTags } from "../../store/tag";
import './Discover.css';


function Discover(){
  const dispatch = useDispatch();
  const projects = useSelector(state => Object.values(state.project));
  const tags = useSelector(state => Object.values(state.tags));
  const params = new URLSearchParams(useLocation().search)
  const title = params.get('title');
  const [currTag, setCurrTag] = useState(title);

  const handleChange = (e) => {
    setCurrTag(e.target.value)
  }

  useEffect(() => {
    dispatch(getAllProjects())
    dispatch(getTags())
  }, [dispatch])

  const projectsByTag = projects.filter((project) => project.tag === currTag )
  let numProj = projectsByTag.length;

  return(
    <div className="discover-container">
      <div className="discover-header">
        <div className="discover-header-inner">
          <div>Show me</div>
          <select value={currTag} onChange={handleChange}>
            {tags?.map((tag) =>
              <option class="discover-option" value={tag.title}>{tag.title}</option>
            )}
          </select>
          <div>
            projects
          </div>
        </div>
      </div>
      <div className="discover-results">
        <div className="discover-numproj">Explore {numProj} projects</div>
        <div className="discover-results-cards-container">
          {projectsByTag?.map((project) =>
            <a href={`/projects/${project.id}`} className="discover-card">
              <img className="discover-thumbnail" src={project.image_src} alt=""></img>
              <div className="discover-title">
                {project.title}
              </div>
              <div className="discover-desc">
                {project.description}
              </div>
              <div className="discover-funding-info">
                <div className="discover-curr-pledge">
                  ${project.current_funding} pledged
                </div>
                <div>
                  {((project.current_funding / project.pledge_goal)*100).toFixed(1)} % Funded
                </div>
                <div>
                  Ends {new Date(project.end_date).toDateString()}
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Discover
