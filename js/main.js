import { sendData, resetAllCertifications } from './services.js';
import { validatePercentage } from "./validation.js";
import { handleValues, handleInvalidPercentage } from './handlers.js';

const $blockCode = document.querySelector('#block-codes');
const $percentage = document.querySelector('#certify-percentage');

const $btnCertify = document.querySelector('#btn-certify');
const $resetBtn = document.querySelector('#reset');

const $form = document.querySelector('#certify-form');

// If the form is completed, the button is activated.
const checkFirstForm = () => {
  const isCompleted = 
    $blockCode.value !== 'none' && $percentage.value

  if (isCompleted) {
    $btnCertify.disabled = false;
    $btnCertify.className = 'btn btn-success'
  } else {
    $btnCertify.disabled = true;
  }
};

$form.addEventListener('change', checkFirstForm);

// Add an event to send data from the form to the api
$btnCertify.addEventListener('click', async (e) => {
  e.preventDefault();

  const blockCode = $blockCode.value;
  const percentage = $percentage.value;

  const $btnContainer = document.querySelectorAll('#perc-input-container')[0];
  
  if (!validatePercentage(percentage)) {
    handleInvalidPercentage($btnContainer, $percentage, $btnCertify);
    resetForm();

    return false
  }

  const data = handleValues(blockCode, percentage);

  console.log(`Payload: "${data}"`);

  // const response = await sendData(data);
  // console.log("Certification res: ", response);

  resetForm()
});

$resetBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const res = await resetAllCertifications();

  console.log("Reset res: ", res);

  return false
})

function resetForm () {
  $blockCode.value = 'none';
  $percentage.value = '';
  $btnCertify.disabled = true;
  $btnCertify.className = 'btn btn-danger';
}
