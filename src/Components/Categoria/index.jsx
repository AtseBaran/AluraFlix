import React from 'react';
import styled from 'styled-components';
import Miniatura from '../Miniatura';
import { Link } from 'react-router-dom';

const StyledCategoria = styled.div`
    margin: 45px;
    box-sizing: border-box;
`;

const StyledMiniaturas = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 10px 0px;
`;

const StyledTituloCategoria = styled.div`
    font-size: 32pt;
    color: white;
    background-color: ${props => props.color};
    font-weight: bold;
    border-radius: 5px;
    width: 432px;
    height: 70px;
    display: block;
    text-align: center;
    line-height: 70px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;

const Categoria = ({id, titulo, color, videos}) => {
    return (
        <StyledCategoria>
            <StyledLink to={`/Categoria/${id}`} >
                <StyledTituloCategoria color={color}>{titulo}</StyledTituloCategoria>
            </StyledLink>
            <StyledMiniaturas>
                {videos.filter(video => video.categoria == id).map((video) => (
                    <Miniatura key={video.id} video={video} color={color}/>
                ))}
            </StyledMiniaturas>
        </StyledCategoria>
    );
};

export default Categoria;