const ErrorMessage = ( {items}) => {
 // let foodItems = ["first","second","third","fourth","fifth"];
  return<>
  {items.length === 0 && <h3>I am Hungry</h3>}
  </>
};
export default ErrorMessage;