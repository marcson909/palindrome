import {useState} from 'react'

const InputForm = (props) => {
  const [input, setInput] = useState('')
  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  
  return(
    <form>
      <label> Input value: {input}
        <br/>
        <input
          name='palindrome'
          type='text'
          placeholder='racecar'
          value={input}
          onChange={handleInputChange}
        />
      </label>
    </form>
    )
}

export default InputForm;