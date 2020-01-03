import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const ProjectFormCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  
  .projectForm {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

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
    }
  }
`;

export const AddProject = () => {

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
          <label>
            upload image
              </label>

          <label>
            Date picker
              </label>
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