import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import sheldon from "../assets/images/sheldon.png";

const Home = () => {
  return (
    <StyledContainer>
      <div className="is-home-project-card">
        <div className="flx-top-sb">
          <div className="card-thumbnail">
            <img src={sheldon} alt="Lolz" />
          </div>
          <button className="upvote-btn flx-center-sb">
            <span>22</span>
            <Icon type="up-circle" />
          </button>
        </div>

        <div className="card-description">
          <h2>Underdogs</h2>
          <h3>M-Reel</h3>
          <p>A music service that recognises your preference and recommends songs based on your listening pattern</p>
        </div>
      </div>

      <div className="is-home-project-card">
        <div className="flx-top-sb">
          <div className="card-thumbnail">
            <img src={sheldon} alt="Lolz" />
          </div>
          <button className="upvote-btn flx-center-sb">
            <span>22</span>
            <Icon type="up-circle" />
          </button>
        </div>

        <div className="card-description">
          <h2>Underdogs</h2>
          <h3>M-Reel</h3>
          <p>A music service that recognises your preference and recommends songs based on your listening pattern</p>
        </div>
      </div>

      <div className="is-home-project-card">
        <div className="flx-top-sb">
          <div className="card-thumbnail">
            <img src={sheldon} alt="Lolz" />
          </div>
          <button className="upvote-btn flx-center-sb">
            <span>22</span>
            <Icon type="up-circle" />
          </button>
        </div>

        <div className="card-description">
          <h2>Underdogs</h2>
          <h3>M-Reel</h3>
          <p>A music service that recognises your preference and recommends songs based on your listening pattern</p>
        </div>
      </div>

      <div className="is-home-project-card">
        <div className="flx-top-sb">
          <div className="card-thumbnail">
            <img src={sheldon} alt="Lolz" />
          </div>
          <button className="upvote-btn flx-center-sb">
            <span>22</span>
            <Icon type="up-circle" />
          </button>
        </div>

        <div className="card-description">
          <h2>Underdogs</h2>
          <h3>M-Reel</h3>
          <p>A music service that recognises your preference and recommends songs based on your listening pattern</p>
        </div>
      </div>

      <div className="is-home-project-card">
        <div className="flx-top-sb">
          <div className="card-thumbnail">
            <img src={sheldon} alt="Lolz" />
          </div>
          <button className="upvote-btn flx-center-sb">
            <span>22</span>
            <Icon type="up-circle" />
          </button>
        </div>

        <div className="card-description">
          <h2>Underdogs</h2>
          <h3>M-Reel</h3>
          <p>A music service that recognises your preference and recommends songs based on your listening pattern</p>
        </div>
      </div>

      <div className="is-home-project-card">
        <div className="flx-top-sb">
          <div className="card-thumbnail">
            <img src={sheldon} alt="Lolz" />
          </div>
          <button className="upvote-btn flx-center-sb">
            <span>22</span>
            <Icon type="up-circle" />
          </button>
        </div>

        <div className="card-description">
          <h2>Underdogs</h2>
          <h3>M-Reel</h3>
          <p>A music service that recognises your preference and recommends songs based on your listening pattern</p>
        </div>
      </div>

      <div className="is-home-project-card">
        <div className="flx-top-sb">
          <div className="card-thumbnail">
            <img src={sheldon} alt="Lolz" />
          </div>
          <button className="upvote-btn flx-center-sb">
            <span>22</span>
            <Icon type="up-circle" />
          </button>
        </div>

        <div className="card-description">
          <h2>Underdogs</h2>
          <h3>M-Reel</h3>
          <p>A music service that recognises your preference and recommends songs based on your listening pattern</p>
        </div>
      </div>
    </StyledContainer>
  )
}

export default Home;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    max-width: 650px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    max-width: 350px;
    grid-template-columns: 1fr;
  }

  & > div.is-home-project-card {
    background: #fff;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0px 0px 4px rgba(82, 68, 110, 0.3);
  }

  .flx-top-sb {
    display: flex;
    justify-content: space-between;
    align-items: top;
  }

  .flx-center-sb {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-thumbnail {
    height: 80px;
    width: 80px;
    border-radius: 5px;
    position: relative;

    img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .card-description {
    margin: 1.5rem 0 0;
    color: #000;

    h2,
    h3 {
      font-weight: 700; 
    }

    h2 {
      font-size: 1.5rem;
      text-transform: uppercase;
    }

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-weigt: 600;
      font-weight: 1.2rem;
      margin-bottom: 0;
    }
  }

  .upvote-btn {
    border: 1px solid #101010;
    border-radius: 5px;
    padding: .25rem 1.15rem;
    min-width: 60px;
    height: 30px;
    background: transparent;

    span {
      display: inline-block;
    }
  }

`
