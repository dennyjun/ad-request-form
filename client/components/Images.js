import React from 'react';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';
import Request from 'superagent';
import Image from './Image';

class Images extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      progress: 0,
      uploading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFileUpload(file) {
    this.setState({
      uploading: true,
      progress: 0
    })
    Request
      .post('/users/dummy/images/' + file.name.replace(/ /g, '_'))
      .send({file})
      .on('progress', (e) => {
          this.setState({
            progress: e.percent
          });
       })
      .end((err, res) => {
        if (res.ok) {
          console.log('Finished uploading ' + file.name + '!');
        } else {
          console.error('Failed to upload ' + file.name + '!');
        }
        this.setState({
          uploading: false,
          progress: 0
        });
      });
  }

  componentWillMount() {
    // before dom has been rendered
  }

  onDrop(files) {
    this.setState({
      images: this.state.images.concat(files)
    });
    this.handleFileUpload(files[0]);
  }

  handleRemove(file) {
    Request
      .delete('/users/dummy/images/' + file.name.replace(/ /g, '_'))
      .end((err, res) => {
        if (res.ok) {
          for(let i = 0; i < this.state.images.length; ++i) {
            if(file === this.state.images[i]) {
              this.state.images.splice(i, 1);
              break;
            }
          }
          this.setState({
            images: this.state.images
          });
        } else {
          alert('Failed to delete ' + file.name + '!');
        }
      });
  }

  render() {
    const files = this.state.images.map((file) => {
      return (
        <Image 
          key={file.name} 
          file={file} 
          handleRemove={this.handleRemove} />
      );
    });
    const progress = this.state.progress + '%';
    const progressbar = this.state.uploading
      ? (<div className="progress">
          <div className="progress-bar progress-bar-striped active" 
               role="progressbar"
               style={{width: progress}}>
               {progress}
          </div>
        </div>)
      : null;
    return (
      <div className="flex-container">
        <div className="card max-width">
          <div className="card-content">
            <Dropzone 
              multiple={false}
              accept="image/*" 
              onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            {progressbar}
            {files}
            <div className="link-div">
              <Link onClick={this.linkOnClick} 
                    to="/bids" 
                    className="btn btn-primary">Next</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // after dom has been rendered
  }
}

export default Images;
