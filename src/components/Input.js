import colorNames from 'colornames'

const Input = ({ setColorValue, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault}>
      <input 
        type="text"
        placeholder="Add color name"
        required
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  )
}

export default Input