
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, ProgressBar } from 'react-bootstrap';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [response, setResponse] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:8000/api/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    setUploadProgress(
                        Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    );
                },
            });
            setResponse(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="file-upload">
            <Form>
                <Form.Group controlId="formFile">
                    <Form.Label>Upload .fcs File</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>
                <Button variant="primary" onClick={handleUpload} className="mt-3">Upload</Button>
            </Form>
            {uploadProgress > 0 && (
                <ProgressBar animated now={uploadProgress} className="mt-3" />
            )}
            {response && (
                <div className="response mt-3">
                    <h5>Response:</h5>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default FileUpload;
