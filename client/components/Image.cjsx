React = require 'react'

module.exports = React.createClass
  displayName: 'Image'
  render: ->
    removeButton = if !this.props.handleRemove then null else 
      (<div className="pull-right image-card-close-button" 
           onClick={() => this.props.handleRemove(this.props.file)}>
        <span className="label label-danger">
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </span>
      </div>)
    return (
      <div className="card image-card-div">
        {removeButton}
        <div className="card-content">      
          <div className="card-title img-file-name">
            {this.props.file.name}
          </div>
          <img src={this.props.file.preview} />
        </div>
      </div>
    )
