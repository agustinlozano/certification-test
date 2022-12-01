export function handleValues(blockCode, percentage) {
  if (percentage === '100') {
    return `${blockCode}`
  } else {
    return `${blockCode} ${percentage}`
  }
}

export function handleInvalidPercentage ($btnContainer, $percInput, $btnCertify) {
  const $error = document.createElement('i');
  $error.className = 'text-danger';
  $error.textContent = 'Please enter a percentage between 0 - 100';
  $btnContainer.prepend($error);

  setTimeout(() => {
    $percInput.value = '';
    $percInput.classList.remove('is-invalid');
    $btnCertify.disabled = true;
    $btnCertify.className = 'btn btn-danger';
    $error.remove();
  }, 3500);

  $percInput.focus();
  $percInput.classList.add('is-invalid');

  return
}
