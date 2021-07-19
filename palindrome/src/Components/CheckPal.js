
const CheckPal = (props) => {
    if (props.word === '' || props.word.length === 1){
      return <p>Your input is a Palindrome</p>
    }
    else {
      let lowered_word = props.word.toLowerCase()
      return palHelper(lowered_word,0,lowered_word.length-1)

    }
}

const palHelper = (word, left, right) => {
      if (left > right){
        return <p>Your input is a Palindrome</p>;
      }
      else {
        if (word[left] !== word[right]){
          return <p>Your input is not a Palindrome</p>;
        }
        return palHelper(word, left+1, right-1)
      }
}

export default CheckPal;