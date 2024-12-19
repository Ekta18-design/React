function Hello(){

  let myName = 'Ekta';
  let fullName = () => {
    return 'Ekta Shah'
  }
  return <h3>I am {fullName()}</h3>
}
export default Hello;