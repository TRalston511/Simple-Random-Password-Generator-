const characterAmountRange = document.getElementById('characterAmountRange')

const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumberElement = document.getElementById('includeNumbers')
const includeSpecialCharactersElement = document.getElementById('includeSpecialCharacters')
const form = document.getElementById('passwordGeneratorForm')

// Script to make slider and number counter function together:

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

// Script to make generate password button generate a password when clicked:
form.addEventListener('submit'e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSpecialCharacters = includeSpecialCharactersElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecialCharacters)
  })
// Script to generate password:
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecialCharacters){
  
}

