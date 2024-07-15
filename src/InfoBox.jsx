import Card from '@mui/material/Card';
import "./InfoBox.css"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    const INIT_URL="https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=600"
    const HOT_URL="https://media.istockphoto.com/id/1325895908/photo/asian-woman-drying-sweat-in-a-warm-summer-day.webp?b=1&s=170667a&w=0&k=20&c=VioEW1OA7M1dvqyyA0KBPj0a9m_TC69N8wgdiTM6j9I="
    const COLD_URL="https://images.unsplash.com/photo-1482474800037-6a26fa1c72ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
    const RAIN_URL="https://media.istockphoto.com/id/1225022383/photo/rain-on-umbrella-concept-for-bad-weather-winter-or-protection.jpg?s=1024x1024&w=is&k=20&c=rzo08tkhBeLcTUXmk4HL3U5QuS0pIIklNWTM0t-dbv4="

    return(
        <div className="InfoBox">
            {/* <h1>WeatherInfo-{info.weather}</h1> */}
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
          ?RAIN_URL
          :info.temp>15
          ?HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80
          ? <ThunderstormIcon/>
          :info.temp>15
          ?<WbSunnyIcon/>
          :<AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Temperature={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <div>Min Temp={info.tempMin}&deg;C</div>
          <div>Max Temp={info.tempMax}&deg;C</div>
          <div>The weather can be described as <i>{info.weather}</i> and Feel Like={info.feelLike}{info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}