const audio = document.querySelector('#audio');
const barra = document.querySelector('#barra');
const btn_Play_Pause = document.querySelector('#btn-play-pause');
const atual = document.querySelector('#atual');
const duracao = document.querySelector('#duracao');

btn_Play_Pause.addEventListener('click', ()=>{
    if(audio.paused ===true){
        audio.volume =0.5
        audio.play()
        btn_Play_Pause.innerHTML = '||'
    }
    else{
        
        audio.pause()
        btn_Play_Pause.innerHTML = '&#x25B6;'
        
    }

}) // o play e o pause da musica


audio.addEventListener('loadedmetadata',()=>{
    barra.max = audio.duration
    duracao.innerHTML = formatarTempo(audio.duration)
}) // quando o audio carregar vai pegar o tanto de segundos e transformar


audio.addEventListener('timeupdate',()=>{
    barra.value = audio.currentTime
    atual.innerHTML = formatarTempo(audio.currentTime)
}) // atualizar a barra enquanto o audio toca

audio.addEventListener('ended', () => {
    btn_Play_Pause.innerHTML = '&#x25B6;';
})

barra.addEventListener('input',()=>{
    audio.currentTime = barra.value
}) // ao mexer na barra fica com a quantidade no audio

function formatarTempo(segundos){
    const min = Math.floor(segundos / 60)
    const seg = Math.floor(segundos % 60)
      return `${min < 10 ? '0' + min : min}:${seg < 10 ? '0' + seg : seg}`
}