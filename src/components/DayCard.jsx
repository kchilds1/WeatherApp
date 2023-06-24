 const createStyle = (color)=> {
     return {
         color: color	
     };
 }


const DayCard = ({ date, conditionImageUrl, condition, highTemp }) => (
	<div>
		<hr style={{width:"173px"}}></hr>
		<hr style={{width:"173px"}}></hr>
		<div style={createStyle("white")}>Date: </div>
		
		<div style={createStyle("white")}>{date}</div>
		<img alt="the daily condition" src={conditionImageUrl} />
		
		<div style={createStyle("white")}>Condition: </div>
		<div style={createStyle("white")}>{condition}</div>
		<div style={createStyle("white")}>High for Today: </div>
		<div style={createStyle("white")}>{highTemp}</div> 
	</div>
);

export default DayCard;
