/**
 * @author Suryasnata Nayak
 */
import React from 'react';
import DropToUpload from 'react-drop-to-upload';

/**
 * @Component DropForUpload
 * This Component is used for uploading files
 * Simple drag and drop the files to this Component
 */
class DropForUpload extends React.Component {

    state = {
        files: []
    }

    handleDrop = (files) => {
        // var formData = new FormData();

        // files.forEach((file, index) => {
        //     formData.append('file' + index, file);
        //     console.log(file)
        // });

        // fetch('/upload', {
        //     method: 'POST',
        //     body: data
        // });
        // console.log("HERE")
        var filesDropped = [];

        for (var i = 0; i < files.length; i++) {
            filesDropped.push(files[i])
        }

        this.setState({
            files: filesDropped,
            fileErrors: []
        })
    }

    handleSelectedFile = event => {

        var files = [];

        for (var i = 0; i < event.target.files.length; i++) {
            files.push(event.target.files[i])
        }

        this.setState({
            files: files,
            fileErrors: []
        })
    }

    deleteUploadedFile = (key) => {
        var files = this.state.files;
        files.splice(key, 1);
        this.setState({
            files: files
        })
    }

    handleUpload = () => {
        var formData = new FormData();

        this.state.files.forEach((file, index) => {
            formData.append('file' + index, file);
        });

        //TODO

        // fetch('/upload', {
        //     method: 'POST',
        //     body: formData
        // });
    }

    render() {

        return (
            <div>
                <div>
                    <DropToUpload onDrop={this.handleDrop}>

                        <div style={{ width: "300px", height: "140px", border: "1px solid black", marginBottom: "10px", backgroundColor: "#eee" }}>
                            <div className="container">
                                <p style={{ marginTop: "60px", marginLeft: "80px" }}>
                                    <i className="fa fa-upload" aria-hidden="true">&nbsp; Drop Files here</i>
                                </p>
                            </div>
                        </div>
                    </DropToUpload>
                </div>

                {/* Seperation of line */}
                <div style={{ marginRight: "400px" }}>
                    <hr className="hr-text" data-content="OR" />
                </div>

                <div style={{ marginLeft: "20px" }}>
                    <input
                        type="button"
                        className="uploadButton"
                        value="Select files for uploading here"
                        onClick={() => this.fileInput.click()}
                    />

                    <input
                        style={{ display: "none", float: "left" }}
                        type="file"
                        onChange={this.handleSelectedFile}
                        multiple
                        ref={fileInput => this.fileInput = fileInput}
                    />

                    <div style={{ marginTop: "10px" }}>
                        <span>
                            {
                                this.state.files[0] !== undefined
                                    ?
                                    (
                                        this.state.files.map((file, key) => {
                                            return (
                                                <div key={key}>
                                                    <i style={{ color: "black" }}>{key + 1}.)</i>&nbsp;<span style={{ color: "red" }}>{file["name"]}</span>
                                                    &nbsp; <b style={{ cursor: "pointer", textDecoration: "underline" }} onClick={this.deleteUploadedFile}>X</b><br />
                                                </div>
                                            )
                                        })
                                    )
                                    :
                                    ""
                            }
                            {
                                this.state.files[0] !== undefined
                                    ?
                                    (
                                        <input
                                            type="button"
                                            className="finalUploadButton"
                                            value="Upload"
                                            onClick={this.handleUpload}
                                        />) : ("")
                            }
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default DropForUpload;