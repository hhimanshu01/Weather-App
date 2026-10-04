import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info})
{
    return (
        <div className='InfoBox'>
            <h1>Weather data</h1>

            <div className="cardContainer">

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://mlpyskbirng6.i.optimole.com/cb:qf7c.e96c/w:372/h:248/q:mauto/g:sm/f:best/https://www.iwmi.org/wp-content/uploads/2026/04/shutterstock_2448580099.jpg"
                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>Temperature : {info.temp}&deg;C</p>
                            <p>Min Temp : {info.tempMin}&deg;C</p>
                            <p>Max Temp : {info.tempMax}&deg;C</p>
                            <p>humidity : {info.humidity}</p>
                            <p>The weather is described as <i><b>{info.weather}</b></i> which feels like {info.feelsLike}&deg;C</p>
                        </Typography>

                    </CardContent>
                </Card>
            </div>

        </div>
    );
}