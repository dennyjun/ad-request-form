React = require 'react'
Link = require('react-router').Link
Request = require 'superagent'
Dropzone = require 'react-dropzone'
Image = require './Image.cjsx'

module.exports = React.createClass
  displayName: 'Images'
  getInitialState: -> 
    images: [],
    progress: 0,
    uploading: false
  handleChange: (event) ->
    this.state[event.target.name] = event.target.value
    this.setState this.state
  handleFileUpload: (file) ->
    setState = this.setState.bind this
    setState
      uploading: true
      progress: 0
    Request
      .post '/images/' + file.name.replace(/ /g, '_')
      .send {file}
      .on 'progress', (e) ->
        setState
          progress: e.percent
      .end (err, res) ->
        if (res.ok) 
          console.log 'Finished uploading ' + file.name + '!'
        else
          console.error 'Failed to upload ' + file.name + '!'
        setState
          uploading: false
          progress: 0
  onDrop: (files) ->
    this.setState
      images: this.state.images.concat files
    this.handleFileUpload files[0]  
  handleRemove: (file) ->
    this.setState
      uploading: true
    ((images, setState) ->  
      Request
        .delete '/images/' + file.name.replace(/ /g, '_')
        .end (err, res) ->
          if (res.ok)
            i = 0
            while i < images.length
              if file == images[i]
                images.splice i, 1
                break
              ++i
            setState
              images: images
          else
            alert 'Failed to delete ' + file.name + '!'
          setState
            uploading: false
    )(this.state.images, this.setState.bind(this))
  render: ->
    
    files = ((images, fn) ->
      return images.map (file) ->
        return (
          <Image 
            key={file.name} 
            file={file} 
            handleRemove={fn} />
        )
    )(this.state.images, this.handleRemove)
    progress = this.state.progress + '%'
    progressbar = if !this.state.uploading then null else
      (<div className="progress">
          <div className="progress-bar progress-bar-striped active" 
               role="progressbar"
               style={{width: progress}}>
               {progress}
          </div>
        </div>)
    return (
      <div className="flex-container">
        <div className="card max-width">
          <div className="card-content">
            <div className="card-title">
              <span>Images</span>
            </div>
            <div className="drop-zone-div">
              <Dropzone 
                multiple={false}
                accept="image/*" 
                onDrop={this.onDrop}>
                <div className="drop-zone-text-div">Drop file or click here to upload.</div>
              </Dropzone>
            </div>
            {progressbar}
            {files}
            <div className="link-div">
              <Link onClick={this.linkOnClick} 
                    to="/bids" 
                    className="btn btn-primary"
                    disabled={this.state.uploading}>Next</Link>
            </div>
          </div>
        </div>
      </div>
    )
