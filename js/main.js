import { sendData, resetAllCertifications } from './servicios.js';
import { validatePercentage } from "./validation.js";
import { handleValues, handleInvalidPercentage } from './handle.js';

const $firstBlockCode = document.querySelector('#first-block-code');
const $firstPercentage = document.querySelector('#first-percentage');

const $firstBtnCertify = document.querySelector('#first-btn-certify');
const $resetBtn = document.querySelector('#reset');

const $firstForm = document.querySelector('#first-super-from');

// If the form is completed, the button is activated.
const checkFirstForm = () => {
  const isCompleted = 
    $firstBlockCode.value !== 'none' && $firstPercentage.value

  if (isCompleted) {
    $firstBtnCertify.disabled = false;
    $firstBtnCertify.className = 'btn btn-success'
  } else {
    $firstBtnCertify.disabled = true;
  }
};

$firstForm.addEventListener('change', checkFirstForm);

// Add an event to send data from the form to the api
$firstBtnCertify.addEventListener('click', async (e) => {
  e.preventDefault();

  const blockCode = $firstBlockCode.value;
  const percentage = $firstPercentage.value;

  const $btnContainer = document.querySelectorAll('#perc-input-container')[0];
  
  if (!validatePercentage(percentage)) {
    handleInvalidPercentage($btnContainer, $firstPercentage, $firstBtnCertify);
    resetForm();

    return false
  }

  const data = handleValues(blockCode, percentage);

  console.log(`Payload: "${data}"`);

  const response = await sendData(data);
  console.log("Certification res: ", response);

  resetForm()
});

$resetBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const res = await resetAllCertifications();

  console.log("Reset res: ", res);

  return false
})

function resetForm () {
  $firstBlockCode.value = 'none';
  $firstPercentage.value = '';
  $firstBtnCertify.disabled = true;
  $firstBtnCertify.className = 'btn btn-danger';
}
