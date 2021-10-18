import './Tags.css'

function TagsModal({ tags, onClose }) {


  return (
    <div className="tags-container">
      <div className="tags-header-inner">
        <h2>Categories</h2>
        <button onClick={onClose}> X </button>
      </div>
      <div className="tags-list">
        {tags.map(tag =>
          <a className="tags-item" href={`/discover?title=${tag.title}`}>{tag?.title}</a>
        )}
      </div>
    </div>
  )
}

export default TagsModal
