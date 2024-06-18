import React, { useContext, useState } from 'react';
import AppContext from '../Contexto';
import styled from 'styled-components';

const StyledOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 30px;
    box-sizing: border-box;
`;

const StyledFormContainer = styled.div`
    background-color: #03122f;
    padding: 50px 20px;
    border-radius: 15px;
    border: 5px solid #6bd1ff;
    width: 50%;
    position: relative;
`;

const StyledTitle = styled.h2`
    color: #6bd1ff;
    text-align: left;
    text-transform: uppercase;
    font-size: 30pt;
`;

const StyledLabel = styled.label`
    color: white;
    font-size: 1.5rem;
    margin: 10px;
    width: 100%;
    display: block;
    box-sizing: border-box;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #6bd1ff;
    box-sizing: border-box;
`;

const StyledSelect = styled.select`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #6bd1ff;
    box-sizing: border-box;
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    gap: 30px;
`;

const StyledButtonSend = styled.button`
    background-color: #000;
    color: #6bd1ff;
    border: 1px solid #6bd1ff;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
`;

const StyledButtonReset = styled.button`
    background-color: #03122f;
    color: #fff;
    border: 1px solid #fff;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
`;

const NuevoVideo = () => {
    const { categoria, handleAddVideo, handleInputChange, handleReset } = useContext(AppContext);

    return (
        <StyledOverlay>
            <StyledFormContainer>
                <form onSubmit={handleAddVideo} onReset={handleReset}>
                    <StyledTitle>Nuevo Vídeo</StyledTitle>
                    <StyledLabel htmlFor="titulo">Título:</StyledLabel>
                    <StyledInput type="text" id="titulo" name="titulo" onChange={handleInputChange} required/>
                    <StyledLabel htmlFor="categoria">Categoría:</StyledLabel>
                    <StyledSelect type="select" id="categoria" name="categoria" onChange={handleInputChange} required>
                        <option></option>
                        {categoria.map((categoria) => (
                            <option key={categoria.id} value={categoria.title}>{categoria.title}</option>
                        ))}
                    </StyledSelect>
                    <StyledLabel htmlFor="imagen">Imagen:</StyledLabel>
                    <StyledInput type="text" id="imagen" name="imagen" onChange={handleInputChange} required/>
                    <StyledLabel htmlFor="video">Vídeo:</StyledLabel>
                    <StyledInput type="text" id="video" name="video" onChange={handleInputChange} required/>
                    <StyledLabel htmlFor="descripcion">Descripción:</StyledLabel>
                    <StyledInput type="text" id="descripcion" name="descripcion" onChange={handleInputChange} required/>
                    <StyledButtons>
                        <StyledButtonSend type="submit">Enviar</StyledButtonSend>
                        <StyledButtonReset type='reset'>Limpiar</StyledButtonReset>
                    </StyledButtons>
                </form>
            </StyledFormContainer>
        </StyledOverlay>
    );
};

export default NuevoVideo;