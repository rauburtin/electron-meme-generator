const ipc = require('electron').ipcRenderer
const path = require('path')

ipc.send('get-memes', {})

ipc.on('memes-sended', (e, images) => {
  document.getElementById('content').innerHTML = images.reduce((prev, next, index, arr) => {
    return `${prev}
    <div class="card meme" data-index="${index}">
    <div class="img" style="background-image:url('${path.join('file://', __dirname, '..', 'assets', 'img', 'defaults', next.file)}')"></div>
    <h3 title="${next.title}"><span>${next.title}</span></h3>
    </div>`
  }, '')
})
