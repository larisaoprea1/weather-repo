import "./WeatherDayCSS.css"
import Card from 'react-bootstrap/Card';

function WeatherDay(props){

  return( 
  <div className="containercard">
     {props.forecast.map((data)=>{
        return(
            <div key={data.id} className="daydata"> 
            <Card>
            <Card.Header style={{backgroundColor:"#6d37ff"}}><div className="tempc">{props.getDayName(data.time)}: Max. Temperature:{data.max_temp}°C - Min. Temperature {data.min_temp}</div></Card.Header>
                <Card.Body>
                    <Card.Text>
                     <div className="infomationweather">
                       <h5>Total precipitation: {data.totalprec}%</h5> 
                       <h5>Wind: {data.windkph}km/h</h5>
                       <h5>Avg. humidity: {data.avghumidity}%</h5>
                       <h5> {data.text}</h5>

                    </div>
                    </Card.Text>
                    <img alt="weatherimg" className="weatherim" src={data.icon}/>
                    <Card.Text> Sunrise will be at: {data.sunrise} and sunset at: {data.sunset} </Card.Text>
                </Card.Body>
             </Card>
            
        </div>);
    })}
    </div>
);}
export default WeatherDay;