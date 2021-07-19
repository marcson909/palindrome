import {useState} from 'react'
import CheckPal from './CheckPal';

const InputForm = (props) => {
  const [input, setInput] = useState('asdasds')
  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  
  return(
    <div>
      <form >
        <label> Input value: {input}
          <br/>
          <input
            name='palindrome'
            type='text'
            placeholder=''
            value={input}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <CheckPal word={input}/>
    </div>
    )
}

export default InputForm;