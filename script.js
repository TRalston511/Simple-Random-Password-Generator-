const characterAmountRange = document.getElementById('characterAmountRange')

const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSpecialCharactersElement = document.getElementById('includeSpecialCharacters')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

// Character codes for functions for password generation
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57)
const SPECIAL_CHARACTER_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(arrayFromLowtoHigh(58, 64))

// Script to make slider and number counter function together:

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

// Script to make generate password button generate a password when clicked:

  form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSpecialCharacters = includeSpecialCharactersElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecialCharacters)
    passwordDisplay.innerText = password
  })
  
  // Script to generate password:

  function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecialCharacters){
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSpecialCharacters) charCodes = charCodes.concat(SPECIAL_CHARACTER_CHAR_CODES)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++){
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
  }

  function arrayFromLowtoHigh(low, high){
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array 
  }

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}
