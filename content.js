window.onload = () => {
  const div = document.createElement('div')
  div.id = 'innerContainerDiv'
  document.body.prepend(div)

  const timeOut = 60 * 5
  let timer = 0

  const interval = setInterval(() => {
    timer += 1
    const mod = timer % 60
    const text = `${Math.floor(timer / 60)}:${mod < 9 ? `0${mod}` : mod}`
    document.getElementById('innerContainerDiv').innerHTML = text

    if (timer > timeOut) {
      clearInterval(interval)
      triggerWarning()
      timer = 0
    }
  }, 1000)
}

const triggerWarning = () => {
  const div = document.createElement('div')
  div.id = 'fullPageWrapper'
  div.innerHTML = 'GET OFF OF FACEBOOK AND DO SOMETHING INTERESTING'
  document.body.prepend(div)
}
