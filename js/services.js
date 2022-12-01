export async function sendData(data) {
  console.log(data)

  const URL = 'http://36dev.bimtrazer.com/api/CertificationBlockDev'
  const options = {
    method: 'POST',
    body: JSON.stringify({
      DATA: data
    }),
  }

  const res = fetch(URL, options)
  return res
}

export async function resetAllCertifications() {
  const URL = 'http://36dev.bimtrazer.com/api/ResetCertification'
  const options = {
    method: 'POST'
  }

  const res = await fetch(URL, options)
  return await res.json()
}