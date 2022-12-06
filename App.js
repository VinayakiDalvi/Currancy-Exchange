import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import './App.css';

function App() {

// Initializing all the state variables
const [info, setInfo] = useState([]);
const [input, setInput] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("inr");
const [options, setOptions] = useState([]);
const [output, setOutput] = useState(0);

// Calling the api whenever the dependency changes
useEffect(() => {
	Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
.then((res) => {
	setInfo(res.data[from]);
	})
}, [from]);

// Calling the convert function whenever
// a user switches the currency
useEffect(() => {
	setOptions(Object.keys(info));
	convert();
}, [info])
	
// Function to convert the currency
function convert() {
	var rate = info[to];
	setOutput(input * rate);
}

// Function to switch between two currency
function flip() {
	var temp = from;
	setFrom(to);
	setTo(temp);
}

return (
	<div className="App">
  


	<div className="heading">
		<h1>Currency Exchange</h1>
	</div>
  <div class="All1">
<div class="all">
	<div className="container">
		<div className="left">
		{/* <h3>Amount</h3>
		<input type="text"
			placeholder="Enter the amount"
			onChange={(e) => setInput(e.target.value)} /> */}
		</div>
    <div class="feom">
		<div className="middle">
		<h3>From</h3>
		<Dropdown options={options}
					onChange={(e) => { setFrom(e.value) }}
		value={from} placeholder="From" />
		</div>
    <div class="datte1">
      <h3>Start</h3>
      <input type="date" id="start" name="start"></input>
    </div>
    </div>
		<div className="switch">
		<HiSwitchHorizontal size="30px"
						onClick={() => { flip()}}/>
		</div>
    <div>
		<div className="right">
		<h3>To</h3>
		<Dropdown options={options}
					onChange={(e) => {setTo(e.value)}}
		value={to} placeholder="To" />
		</div>
    <div>
    <h3>End</h3>
      <input type="date" id="end" name="end"></input>
    </div>
    </div>
    
	</div>
  <div class="upload">
      <label>
        Select csv File-
      </label>
      <input type="file" name="nf"></input>
  </div>
  <div class="btx">
  <div class="b1">
  <input type="button"  class="xl"  value="DAY" />
  </div>
  <div class="b2">

  <input type="button"  class="xl"  value="MONTH" />
  </div>
  <div class="b3">
  <input type="button" class="xl" value="QUATERLY" />
  </div>
<div class="b4">
  <input type="button" class="xl" value="YEAR" />
  </div>
  </div>
</div>
	{/* <div className="result">
		<button onClick={()=>{convert()}}>Convert</button>
		<h2>Converted Amount:</h2>
		<p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>

	</div> */}
    
    {/* <input type="submit" name="generate">Generate</input> */}
    <div class="btn">
    <button type="submit" form="form1" value="Submit">Submit</button>
    </div>
  
  </div>
  </div>
);
}

export default App;
