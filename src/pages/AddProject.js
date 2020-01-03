import React from 'react';
import styled from 'styled-components';

const ProjectFormCon = styled.div`
  display: flex;

  .projectForm {
    display: flex;
    justify-content: space-between;

    .leftForm {
      flex-direction: column;
    }
  }
`;

export const AddProject = () => {

  return (
    <ProjectFormCon className="addProject">
      <form className="projectForm">
        <div className="leftForm">
          <label>
            Project Name
          <input type="text" />
          </label>

          <label>
            Describe your project in one sentence
          <input type="text" />
          </label>

          <label>
            Give more details about your project
          <input type="text" />
          </label>

          <label>
            Pick required roles <span>(8 roles maximum)</span>
            <input />
          </label>

          <label>
            Project Name
          <input />
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

    </ProjectFormCon>
  )
}

export default AddProject;