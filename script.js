document.getElementById('verGaleria').addEventListener('click', function(){
    document.getElementById('contenedorGaleria').style.display = 'block'
    document.getElementById('finalGalery').style.display = 'block'
    document.getElementById('principalText').style.display = 'none'
    this.style.display = 'none'
})

const velasContainer = document.getElementById('velasContainer')

for (let i = 0; i < 16; i++) {
  const vela = document.createElement('div')
  vela.classList.add('vela')

  const mecha = document.createElement('div')
  mecha.classList.add('mecha')

  const llama = document.createElement('div')
  llama.classList.add('llama')

  vela.appendChild(mecha)
  vela.appendChild(llama)

  vela.addEventListener('click', () => {
    if (llama) {
      llama.remove()

      const humo = document.createElement('div')
      humo.classList.add('humo')
      vela.appendChild(humo)
    }
  })

  velasContainer.appendChild(vela)
}
