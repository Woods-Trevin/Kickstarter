import React from "react";

//Wrapper functional component
//All the forms have this same HTML structure and style,
//so we use this wrapper component to give each child the same style
const Wrapper = ({ children }) => {
  return (
    <div className='start-form-container'>
      <div className='start-form-spacer'>
        <div className='start-form-content'>
          <h2 className='start-form-heading'>First, let's get you set up.</h2>
          <h3 className='start-form-sub-heading'>Pick a project category to connect with a specific community. You can always update this later.</h3>
          {
            React.Children.map(children, (child) => {
              React.cloneElement(child, {
                
              })
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Wrapper;
