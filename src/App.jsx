import { useState } from "react";
import { FaSlash } from "react-icons/fa";
import { flag, countries, code } from "country-emoji";
import ReactCountryFlag from "react-country-flag";
import { FaFemale, FaMale } from "react-icons/fa";
import { FaX } from "react-icons/fa6";


function App() {
  const [persons, $$persons] = useState([]);
  const [gender, $$gender] = useState("");
  const [age, $$age] = useState(0);
  let actualYear = new Date().getFullYear();
  let bornYear = actualYear - age;
  const [name, $$name] = useState("Guest");
  const [surname, $$surname] = useState("Unknown");
  const [nation, $$nation] = useState("")
  const [color, $$color] = useState("#daf0ff")

  function $add () {
    const newCar = {p_gender: gender, p_age: age, p_name: name, p_surname: surname, p_nation: nation, p_background: color, p_year: bornYear};

    $$persons(p => [...p, newCar]);
    $$gender("");
    $$age(0);
    $$name("Guest");
    $$surname("Unknown");
    $$nation("");
    $$color("#daf0ff")
  }
  function handleRemove (index) {
   $$persons(p => p.filter((_, i) => i !== index));
  }

  function $gender (e) {
    $$gender(e.target.value)
  }
  function $age (e) {
    $$age(e.target.value)
  }
  function $name (e) {
    $$name(e.target.value)
  }
  function $surname (e) {
    $$surname(e.target.value)
  }
  function $nation (e) {
    $$nation(e.target.value)
  }
  function $color (e) {
    $$color( e.target.value)
  }

  return (
    <div className="page">
      <div className="form">
        <div className="form-intern">
    <div>
      Name:<br />
      <input type="text" placeholder="Name" value={name} onChange={$name}/>
    </div>
    <div>
      Surname:<br />
      <input type="text" placeholder="Surname" value={surname} onChange={$surname}/>
    </div>
    <div>
      Age:<br />
      <input type="number" placeholder="Age" value={age} onChange={$age}/>
    </div>
    <div>
      <select value={gender} onChange={$gender}>
        <option selected value="NotGender">--Gender--</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div><input type="text"placeholder="Nationality" value={nation} onChange={$nation}/></div>
    <div><input type="color" value={color} onChange={$color}/></div>
    <div><button onClick={$add} >Add</button></div>
        </div>
      </div><hr />
      <div className="container">
        {persons.map( (person, index)  => <div style={{width: "fit-content", display: "inline-block"}} onClick={() => handleRemove(index)}><Person 
        index={index}
        key={index} 
        name={person.p_name} 
        surname={person.p_surname}
        background={person.p_background}
        age={person.p_age}
        year={person.p_year}
        gender={person.p_gender}
        nation={person.p_nation}
        
        ></Person>
        
        
        </div>
        
        )}
      </div>
      
    </div>
  )
}


const Person = (props) => {
  let genderEmoji;
  if (props.gender == "Male") {genderEmoji = <FaMale />}
  else if (props.gender == "Female") {genderEmoji = <FaFemale />}
  else {genderEmoji = <FaSlash />}

  return(
    <div className="card" style={{background: props.background}} >
      <div><b>Name:</b> {props.name}</div>
      <div><b>Surname:</b> {props.surname}</div>
      <div><b>Age:</b> {props.age}</div>
      <div>
        <b>Gender:</b>
        {genderEmoji}
      </div>
      <div><b>Birthday:</b> {props.year}</div>
      <div><b>Nationality:</b> {props.nation != "" ? <ReactCountryFlag countryCode={code(props.nation)} svg/> : <FaSlash/> } {code(props.nation)}</div>
    
    </div>
  )
}
export default App
