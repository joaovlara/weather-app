import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";

export const Content = styled.div`
    background-image: url("https://source.unsplash.com/1600x900/?landscape");
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    background: #000;
    opacity: 0.8;
    border-radius: 25px;
    padding: 1.5%;
`;

export const CardInfos = styled.div`
    padding: 4% 0;
`;

export const CardWeather = styled.div`
    display: flex;
    align-items: center;
    padding: 1% 0;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 1vh;
    border-radius: 25px;
    background-color: #7c7c7c2b;
`;

export const InputCity = styled.input`
    height: 3vh;
    width:  100%;
    border: none;
    outline: none;
    color: #fff;
    background-color: transparent;
`;

export const SearchBtn = styled(FaSearch)`
    color: #C9C6C62B;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    };
`;

export const TitleApp = styled.h1`
    color: #fff;
    `;

export const TextInfos = styled.p`
    padding-top: 2%;
    color: #fff;
    text-transform: capitalize;
`;

export const TextCity = styled.strong`
    color: #fff;
    text-transform: capitalize;
`;

export const StyledWeatherIcon = styled.img`
    color: #fff;
`;
