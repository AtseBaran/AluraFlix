import React, { useContext } from 'react';
import AppContext from '../Contexto';
import styled from 'styled-components';

const StyledMiniatura = styled.div`
    background-position: center;
    background-image: url(${props => props.src});
    width: 430px;
    height: 320px;
    background-size: cover;
    border: 5px solid ${props => props.color};
    border-radius: 15px;
    position: relative;
`;

const StyledButtons = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    border-top: 5px solid ${props => props.color};
`;   

const StyledButtonDelete = styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 0 0 0 15px;
    width: 50%;
    height: 50px;
    cursor: pointer;
    font-size: 18px;
`;

const StyledButtonEdit = styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 0 0 15px 0;
    width: 50%;
    height: 50px;
    cursor: pointer;
    font-size: 18px;
`;

const StyledIcon = styled.img`
    width: 20px;
    margin-right: 5px;
`;

const Miniatura = ({ video, color }) => {
    const imageDelete = '/img/delete.png';
    const imageEdit = '/img/edit.png';
    
    const { setShowOverlay, setVideoData } = useContext(AppContext);

    return (
        <StyledMiniatura src={video.imagen} color={color}>
            <StyledButtons color={color}>
                <StyledButtonDelete>
                    <StyledIcon src={imageDelete} alt='Borrar' />
                    Borrar
                </StyledButtonDelete>
                <StyledButtonEdit onClick={() => {
                        setVideoData(video);
                        setShowOverlay(true)
                    }}>
                    <StyledIcon src={imageEdit} alt='Editar'/>
                    Editar
                </StyledButtonEdit>
            </StyledButtons>
        </StyledMiniatura>
    );
};

export default Miniatura;