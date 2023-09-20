import { Fan, TemperatureDisplay, WeatherStation } from './patterns/observer';

const weatherStation = new WeatherStation();

const tempDisplay = new TemperatureDisplay(weatherStation);
const fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);