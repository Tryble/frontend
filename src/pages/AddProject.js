import React from 'react';
import styled from 'styled-components';
import { Input, Upload, Icon, message, DatePicker, Button } from 'antd';
import OptionsPicker from '../components/OptionsPicker';


const { Dragger } = Upload;
const { TextArea } = Input;

const ProjectFormCon = styled.div`
  display: flex;
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
          &.labelText {
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

        textArea {
          padding-left: 1em;
          border-radius: 0.3em;
          border: none;
          background: #f2f2f2;
          width: 300px;
          color: #6d6d6d;
        }

      }

      &.rightForm {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const DatePickerCon = styled.div`
  margin-top: 2em;

  .startDate {
    margin-bottom: 1em;
  }

  input {

    &.ant-calendar-picker-input {
      width: 200px;
    }
  }
`;

const UploadImageCon = styled.div`
  width: 200px;
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: flex-end;


  button {
    &.ant-btn.create {
      background: #392959;
      color: #fff;
      margin-right: 1em;
    }

    &.ant-btn.cancel {
      border: 2px solid #392959;
      color: #392959;
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

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  }

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
            <TextArea rows={4} />
          </label>

          <label>
            <span className="labelText">
              Pick required roles
            </span>
            <span className="supportText">(8 roles maximum)</span><br />
            <OptionsPicker />
          </label>
        </div>

        <div className="rightForm">
          <UploadImageCon>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Maximum file size 12MB</p>
            </Dragger>
          </UploadImageCon>

          <DatePickerCon>
            <div className="startDate">
              Start Date<br />
              <DatePicker onChange={onChange} />
            </div>

            <div className="endDate">
              End Date<br />
              <DatePicker onChange={onChange} />
            </div>
          </DatePickerCon>
        </div>
      </form>

      <BottomDiv>
        <Button className="create">
          Create Project
            <Icon type="check" />
        </Button>

        <Button className="cancel">
          Cancel
        </Button>
      </BottomDiv>

    </ProjectFormCon>
  )
}

export default AddProject;