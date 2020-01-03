import React from 'react';
import styled from 'styled-components';
import { Input, Upload, Icon, message } from 'antd';

const { Dragger } = Upload;

const ProjectFormCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  
  .projectForm {
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin: 3em;

    .leftForm {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 2em;

        span {

          .labelText {
            font-weight: 600;
          }
        }

        input {
          padding-left: 1em;
          border-radius: 0.3em;
          border: none;
          background: #f2f2f2;
          width: 300px;
          color: #6d6d6d;
        }

      }

      .rightForm {
        display: flex;
        flex-direction: column;

        span.ant-upload.ant-upload-drag {
          
        }

      }
    }
  }
`;

export const AddProject = () => {

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <ProjectFormCon>
      <form className="projectForm">
        <div className="leftForm">
          <label>
            <span className="labelText">
              Project Name
            </span>
            <br />
            <Input />
          </label>

          <label>
            <span className="labelText">
              Describe your project in one sentence
            </span>
            <br />
            <Input />
          </label>

          <label>
            <span className="labelText">
              Give more details about your project
            </span>
            <br />
            <Input />
          </label>

          <label>
            <span className="labelText">
              Pick required roles
            </span>
            <span className="supportText">(8 roles maximum)</span><br />
            <Input />
          </label>

          <label>
            <span className="labelText">
              Describe your project in one sentence
            </span>
            Project Name<br />
            <Input />
          </label>
        </div>

        <div className="rightForm">
          <div style={{ width: "200px" }}>

            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Maximum file size 12MB</p>
            </Dragger>
          </div>

          <div>
            Date picker
          </div>
        </div>
      </form>

      <div>
        <button>Create Project</button>
        <button>Cancel</button>
      </div>

    </ProjectFormCon>
  )
}

export default AddProject;