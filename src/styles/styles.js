import styled, { css } from 'styled-components';

export const Card = styled.div`
    background: #000;
    opacity: 0.8;
    border-radius: 25px;
    padding: 20px;
    max-width: 450px;
`;

export const CardInfos = styled.div`
    margin-top: 30px;
`;

export const CardWeather = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

export const InputCity = styled.input`
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 25px;
    font-size: 20px;
    background-color: #7c7c7c2b;
    color: #ffff;
    width: calc(100%-100px);
`;

export const SearchBtn = styled.button`
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 50px;
    background-color: #7c7c7c2b;
    cursor: pointer;
    float: right;
`;

export const TitleApp = styled.h1`
    color: #fff;
    `;

export const TextInfos = styled.p`
    color: #fff;
    text-transform: capitalize;
`;

export const TextCity = styled.strong`
    color: #fff;
    text-transform: capitalize;
`;

export const StyledWeatherIcon = styled.img`
    color: #fff;
    text-transform: capitalize;
`;
