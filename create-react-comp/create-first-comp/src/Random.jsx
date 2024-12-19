function Random(){
let number = Math.random() * 100;
return <p style={{'background-color': '#668854'}}>Random number is : {Math.round(number)}</p>

}
export default Random;