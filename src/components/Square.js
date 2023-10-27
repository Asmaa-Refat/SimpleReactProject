
const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section 
      className="square"
      style={{ 
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF"}}
    >
      <p> { colorValue ? colorValue : "Empty color Value" } </p>
      <p> { hexValue ? hexValue : null } </p>
    </section>
  )
} 

//if the colorValue has no value yet, we set a default for it
Square.defaultProps = {
  colorValue: "No color has been added yet!"
} 

export default Square