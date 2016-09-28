import React from 'react';

const Image = ({file, handleRemove}) => {
  return (
    <div className="card image-card-div">
      <div className="pull-right image-card-close-button" 
           onClick={() => handleRemove(file)}>
        <span className="label label-danger">
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </span>
      </div>
      <div>
        <span className="card-title">
          {file.name}
        </span>
      </div>
      <div className="card-content">
        <div className="card-image">      
          <img src={file.preview} />
        </div>
      </div>
    </div>
  );
};

export default Image;
