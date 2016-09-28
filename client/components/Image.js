import React from 'react';

const Image = ({file, handleRemove}) => {
  const removeButton = handleRemove
    ? (<div className="pull-right image-card-close-button" 
           onClick={() => handleRemove(file)}>
        <span className="label label-danger">
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </span>
      </div>)
    : null;
  return (
    <div className="card image-card-div">
      {removeButton}
      <div>
        <span className="card-title">
          {file.name}
        </span>
      </div>
      <div className="card-content">      
        <img src={file.preview} />
      </div>
    </div>
  );
};

export default Image;
