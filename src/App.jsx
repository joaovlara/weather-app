import React from 'react'
import { ThemeProvider } from "styled-components";
import { Card, CardInfos, CardWeather, InputCity, SearchBtn, StyledWeatherIcon, TextInfos, TitleApp } from './styles/styles'

function App() {
  return (
    <Card>
      <InputCity placeholder="Digite o nome da cidade" />
      <SearchBtn />
      <CardInfos >
      <TitleApp > Como está o tempo em... </TitleApp>
        
        </CardInfos>
        <CardWeather >  
          <StyledWeatherIcon />
            <TextInfos>Clima</TextInfos>
        </CardWeather>

        <TextInfos>Umidade: </TextInfos>

    </Card>
  )
}

export default App
