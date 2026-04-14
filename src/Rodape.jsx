import './index.css'

function Rodape() {

  function tocarAudio(){
    const audio = new Audio("images/audio/umbrella.mp3")
    audio.play()
  }

  return (
    <footer className="rodape">

      <p className="texto-rodape">
        © Site feito por fã
      </p>

      <img
        src="images/umbrella.png"
        className="logo-rodape"
        onClick={tocarAudio}
        style={{cursor:"pointer"}}
      />
    </footer>
  )
}

export default Rodape