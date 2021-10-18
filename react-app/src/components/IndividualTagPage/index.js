import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProjects } from "../../store/project"

function IndividualTagPage({tagId, tagTitle}){
  const dispatch = useDispatch();
  const projects = useSelector(state => Object.values(state.project))

  useEffect(() => {
    dispatch(getAllProjects())
  }, [dispatch])

  const projectsByTag = projects.filter((project) => project.tag === tagTitle )

  return(
    <div>
      Hello World
      <div>
        {tagTitle}
      </div>
      {projectsByTag.map((project) =>
        <div>
          {project.title}
        </div>
      )}
    </div>

  )
}

export default IndividualTagPage
