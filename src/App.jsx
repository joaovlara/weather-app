import React, { useState } from 'react';
import axios from 'axios';
import { Content, Card, CardInfos, CardWeather, InputCity, SearchBtn, SearchContainer, StyledWeatherIcon, TextInfos, TitleApp } from './styles/styles';

const key = "5dbb806f39a96dcb93ce9e997b815519";

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const buscarCity = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do clima:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      buscarCity();
    }
  };

  return (
    <Content>
      <Card>
        <SearchContainer>
          <InputCity
            placeholder="Digite o nome da cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress} />
          <SearchBtn onClick={buscarCity} />
        </SearchContainer>

        <CardInfos>
          {weatherData && (
            <>
              <TitleApp>Tempo em {weatherData.name}</TitleApp>
              <TextInfos>Temperatura: {Math.floor(weatherData.main.temp)}°C</TextInfos>
            </>
          )}
          <CardWeather>
            {weatherData && (
              <>
                <StyledWeatherIcon src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} />
                <TextInfos>{weatherData.weather[0].description}</TextInfos>
              </>
            )}
          </CardWeather>
          {weatherData && <TextInfos>Umidade: {weatherData.main.humidity}%</TextInfos>}
        </CardInfos>
      </Card>
    </Content>
  );
}

export default App;
