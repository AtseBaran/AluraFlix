import React from 'react';
import styled from 'styled-components';
import './Banner.css';

const StyledBanner = styled.div`
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-image: url('./img/banner.png');
    width: 100%;
    height: auto;
`;

const Banner = () => {
    return (
        <StyledBanner>
            <div className="text-container">
                <div className='categoria'>Front End</div>
                <h1>Challenge React</h1>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div className="image-container">
                <img src="./img/video.png" alt="Imagen" />
            </div>
        </StyledBanner>
    );
};

export default Banner;