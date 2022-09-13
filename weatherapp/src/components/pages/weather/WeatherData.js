import "./WeatherDataCSS.css"
import WeatherDay from './WeatherDay';

function WeatherData(props){
    
    const getDayName = (date, locale)=>{
        var date = new Date(date);
        return date.toLocaleDateString(locale, {weekday: 'long'});
    } 

    const getForecast = ()=>{
        var data =  props.weatherInfo;
        var forecast = [];
        let day = 0;
        // console.log(props.weatherInfo.daycount);
        // console.log(props.weatherInfo.getDay(2));
        for( day; day< data.daycount; day++){
            forecast.push(data.getDay(day));    
        }
    
        return forecast;
    }
    return(
    <div>
        <div className='weathercontainer' >
            <div  className='weathercard'>
            <div className='cityweather'>
                <div>
                    {props.weatherInfo.name}, {props.weatherInfo.country}
                </div>
                <div>
                    Temperature: {props.weatherInfo.temp_c}°C, Feels like: {props.weatherInfo.feelslike_c}°C
                </div>
                <div>
                    Humidity: {props.weatherInfo.humidity}%
                </div>
            </div>
            <div className='imgdiv'>
                
                <img className="imgw" src={props.weatherInfo.icon}/>
                <h1 className='name'>{props.weatherInfo.text}</h1>
            </div>
            </div>
            <div className='forecast'>
                {getForecast().slice(1).map((data)=>{
                    return(
                    <div key={data.id} className="daydata"> 
                    
                        {getDayName(data.time)}
                    <img alt="weatherimg" src={data.icon}/>
                        {data.temp}°C
                        
                    </div>);
                })}
            </div>
      </div>
      <WeatherDay getDayName={getDayName} forecast={getForecast()}/>
    </div>
    
    );
}
export default WeatherData;