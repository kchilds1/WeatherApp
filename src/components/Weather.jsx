import { useEffect, useState, useRef, useCallback } from 'react';
import ArcText from 'arc-text';
import DayCard from './DayCard';

const weatherApiKey = 'd8d5bfc23a1b4fd285c40136230106';



  
const Weather = () => {
	const [zipCode, setZipCode] = useState('');
	const [forecastData, setForecastData] = useState([]);
	const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${zipCode}&days=7&aqi=no&alerts=no`;

	const getForecast = useCallback(async () => {
		const res = await fetch(url);
		const { forecast } = await res.json();
		setForecastData(forecast.forecastday);
	}, [url]);

	useEffect(() => {
		const fetchData = async () => {
		if(zipCode.length === 5){
		await getForecast();
		}
	}; //[zipCode])
	fetchData();
}, [zipCode,getForecast]);

	const h1Ref = useRef(null);

	useEffect(() => {
		if (h1Ref.current) {
		  const arcText = new ArcText(h1Ref.current);
		  arcText.arc(150);
		}
	  }, []);
    //CREATED THIS VARIABLE BECAUSE IT IS EASIER TO READ
    const inputStyle = {
	   textAlign:"center",
	   borderRadius:"10px",
	   cursor:"pointer",
	};
<script src="arc-text.js"></script>
	return (
		<>
          {/* added another div in order to adjust the margin top */}
          <div style={{}}>
			<label htmlFor="zipCode" style={{color: "lightblue", display:"inline-block", width:"fit-content"}}>
				<h1 ref={h1Ref}>Zip Code</h1>
			</label>
            <div>
			<input
				name="zipCode"
				type="number"
				placeholder="Enter your Zip Code"
				value={zipCode}
				onChange={e => setZipCode(e.target.value)}
                // styled the input box's border radius and center the text
				style={inputStyle}
				
			/>
            </div>
			{forecastData.map(({ date, day: { condition, maxtemp_f } }) => (
				<DayCard
					date={date}
					conditionImageUrl={condition.icon}
					condition={condition.text}
					highTemp={maxtemp_f}
				/>
			))}
          </div>
		</>
	);
};

export default Weather;
