import './index.css'
import { useState, useRef, useEffect } from 'react'

function Menu() {

  const [menuAtivo, setMenuAtivo] = useState("principal")
  const [imagens, setImagens] = useState([{ img: "images/menu.png", texto: "" }])

  const audioRef = useRef(null)
  
  useEffect(() => {
  const audio = new Audio("/Artes-Conceituais-Resident-Evil-Requiem/images/audio/botao.mp3")
  audio.volume = 0.2
  audioRef.current = audio}, [])


  function tocarClick(){
    if(audioRef.current){
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }
    
  return (
    <div className="container">
      <audio ref={audioRef} src="images/audio/botao.mp3" preload="auto"></audio>
      <main className="conteudo bloco-branco">

        {menuAtivo === "sobre" ? (

          <div className="texto-sobre">

            <p>
              Este site tem como objetivo apenas divulgar e compartilhar as artes conceituais do jogo Resident Evil Requiem, que são desbloqueadas após a conclusão da história principal do jogo. O conteúdo apresentado aqui foi reunido com a intenção de permitir que fãs apreciem essas artes com mais facilidade, reunidas em um único lugar. 
            <br /><br />
            O projeto não possui qualquer finalidade comercial, não gera lucro e não tem a intenção de monetizar ou obter qualquer tipo de ganho a partir das artes ou do conteúdo do jogo. Trata-se apenas de uma iniciativa criada por fã, para fãs, com o objetivo de valorizar o trabalho artístico presente no jogo e compartilhar essa experiência com a comunidade. 
            <br /><br />
            Todo o material apresentado pertence aos seus respectivos criadores e detentores de direitos. Este site existe apenas como uma forma de homenagem ao jogo e ao incrível trabalho artístico presente em Resident Evil Requiem.
            <br /><br />
            Caso queira conhecer mais sobre o jogo, produzi dois vídeos jogando. Aproveite também para conhecer um pouco mais do meu trabalho e conteúdo.
           </p>

            <br />

            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/qngjPHp2t9I"
              title="Resident Evil Requiem"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br /><br />
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/unDKoxuriuQ"
              title="Resident Evil Requiem"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
          

        ) : (

          imagens.map((item, index) => (
            <div key={index} className="bloco-imagem">

              <img src={item.img} className="animar-img" />

              <p className="texto-imagem">
                {item.texto}
              </p>

            </div>
          ))

        )}

      </main>

      <aside className="barra-lateral bloco-branco">

        <ul className="lista-categorias">

          {menuAtivo === "principal" && (
            <>
              <button className="menu_ligar" onClick={() => {tocarClick(),setMenuAtivo("personagens")}}>
                Personagens
              </button>

              <button className="menu_ligar" onClick={() => {tocarClick(),setMenuAtivo("inimigos")}}>
                Inimigos
              </button>

              <button className="menu_ligar" onClick={() => {tocarClick(),setMenuAtivo("locais")}}>
                Locais
              </button>

              <button className="menu_ligar" onClick={() => {tocarClick(),setMenuAtivo("itens")}}>
                Itens
              </button>

              <button className="menu_ligar" onClick={() => {tocarClick(),setMenuAtivo("sobre")}}>
                Sobre
              </button>

            </>
          )}

          {menuAtivo === "personagens" && (
            <>
              <button className="botao animar" onClick={() => {tocarClick(), setImagens([
                {img:"images/leon.png", texto: "Design do personagem Leon S. Kennedy."},
                {img:"images/leon_city.png",texto:"Leon investigando caso em Wrenwood."},
                {img:"images/leon_atac_city.png",texto:"Leon em ataque de bioterrorismo em Wrenwood."},
                {img:"images/racooncity_aranha.png",texto:"Leon batalha contra aranha gigante."},
                {img:"images/racooncity-estrada.png",texto:"Leon explorando as ruas de Raccoon City."},
                {img:"images/racconcity_ruinas.png",texto:"Leon explorando as ruínas de Raccoon City."},
                {img:"images/racooncity_estrada_leon.png",texto:"Leon pilotando moto nas ruínas das estradas de Raccoon City."},
                {img:"images/racooncity_leon_guideon.png",texto:"Leon batalha nas estradas de Raccoon City contra o Dr. Victor Gideon."},
                {img:"images/leon_planta.png",texto:"Leon lutando contra Planta 43."},
                {img:"images/ark_leon_final.png", texto:"Leon Chegando até a Elpis no laboratório ARK."},
                {img:"images/ark_batalha_final.png", texto:"Leon destruindo Dr.Victor Gideon transformado em Nemesis no laboratório ARK."}
              ])}}>Leon</button>

              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/grace.png", texto:"Design da persongem Grace Ashcroft."},
                {img:"images/grace_city.png",  texto:"Grace chegando em Wrenwood."},
                {img:"images/inicio_city.png",  texto:"Momentos iniciais do jogo em Wrenwood."},
                {img: "images/grace_emily.png",  texto:"Grace encontrando Emily."}
              ])}}>Grace</button>

              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/sherry.png", texto:"Design da persongem Sherry."}
              ])}}>Sherry</button>

              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/mae.png", texto:"Design da personagem Alyssa Ashcroft."}
              ])}}>Alyssa</button>
              
              <button className="botao animar" onClick={() => {setMenuAtivo("principal"), tocarClick(),setImagens([{ img: "images/menu.png", texto: "" }])}}>
              Voltar</button>
            </>
          )}

          {menuAtivo === "inimigos" && (
            <>
              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/guideon.png", texto:"Design do personagem Dr. Victor Gideon."},
                {img:"images/inicio_city.png", texto:"Momentos iniciais do jogo em Wrenwood."},
                {img:"images/racooncity_leon_guideon.png", texto:"Leon batalha nas estradas de Raccoon City contra o Dr. Victor Gideon."}
              ])}}>Dr.Gideon</button>

              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/zeno.png",texto:"Design do personagem Zeno."},
                {img:"images/ark_final.png",texto:"Parte final do jogo."},
                {img:"images/ark_final_2.png", texto:"Parte final do jogo 2."}
              ])}}>Zeno</button>
              
              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/misterx.png", texto:"Design do tyrant Mr.X."}
              ])}}>Mr.X</button>

              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/zombie_racooncity.png",texto:"Design dos zombies de Raccoon City."},
                {img:"images/leon_atac_city.png", texto:"Leon em ataque de bioterrorismo em Wrenwood."}
              ])}}>Zombies</button>

              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/zombie_job.png",texto:"Design zombie de cabeça pustulenta."},
                {img:"images/zombie_bolhas.png",texto:"Design zombie pustulento."}
              ])}}>Pustulento</button>

              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/bichao.png", texto:"Design da personagem A garota."}
              ])}}>A Garota</button>

              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/zombie_gordo.png", texto:"Design do Chunk."}
              ])}}>Chunk</button>

              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/emily_bichao2.png", texto:"Design da personagem Emily transformada."},
                {img:"images/emily_bichao.png", texto:"Design da personagem Emily transformada 2."}
              ])}}>Emily</button>

              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/lobo.png", texto:"Design do Garmr."}
              ])}}>Garmr</button>

              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/planta.png", texto:"Design da Planta 43."},
                {img:"images/leon_planta.png",texto:"Leon lutando contra Planta 43."}
              ])}}>Planta 43</button>


              <button className="botao animar" onClick={() => {setMenuAtivo("principal"),tocarClick(), setImagens([{ img: "images/menu.png", texto: "" }])}}>
              Voltar</button>
            </>
          )}

          {menuAtivo === "locais" && (
            <>
              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/grace_city.png",  texto:"Grace chegando em Wrenwood."},
                {img:"images/inicio_city.png",  texto:"Momentos iniciais do jogo em Wrenwood."},
                {img:"images/leon_atac_city.png",texto:"Leon em ataque de bioterrorismo em Wrenwood."},
                {img:"images/hospital_entrada.png", texto:"Hospital do Dr.Victor Gideon em Wrenwood."},
                {img:"images/hospital.png", texto:"Comodos do hospital do Dr.Victor Gideon em Wrenwood."}

              ])}}>Wrenwood</button>
              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/racooncity_inicio.png", texto:"Leon chegando na cidade destruída Raccoon City"},
                {img:"images/racooncity_aranha.png",texto:"Leon batalha contra aranha gigante."},
                {img:"images/racooncity-estrada.png",texto:"Leon explorando as ruas de Raccoon City."},
                {img:"images/racconcity_ruinas.png",texto:"Leon explorando as ruínas de Raccoon City."},
                {img:"images/racooncity_estrada_leon.png",texto:"Leon pilotando moto nas ruínas das estradas de Raccoon City."},
                {img:"images/racooncity_leon_guideon.png",texto:"Leon batalha nas estradas de Raccoon City contra o Dr. Victor Gideon."},
                {img:"images/racooncity_rpd.png", texto:"Prédio em ruínas da RPD."},
                {img:"images/racooncity_locais.png", texto:"Exploração da RPD e orfanato de Raccoon City."}


              ])}}>RaccoonCity</button>
              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/ark_entrada.png", texto:"Entrada do laboratório ARK."},
                {img:"images/ark_porta.png", texto:"Desing porta de entrada ARK."},
                {img:"images/ark_bau.png", texto:"Baú ARK."},
                {img:"images/ark_desing.png", texto:"Desing laboratório ARK."},
                {img:"images/ark_estrutura.png", texto:"Estrutura laboratório ARK."},
                {img:"images/ark_coisas.png", texto:"Setor do laboratório."},
                {img:"images/ark_corredores.png", texto:"Corredores ARK."},
                {img:"images/ark_save_room.png", texto:"Save room ARK."},
                {img:"images/ark_estatuas.png", texto:"Sala das estátuas ARK."},
                {img:"images/ark-estatuas2.png", texto:"Desing estátuas ARK."},
                {img:"images/ark_escadas.png", texto:"Escadaria ARK."},
                {img:"images/ark_lab.png", texto:"Central ARK."},
                {img:"images/ark_lab2.png", texto:"Central ARK 2."},
                {img:"images/ark_sistema.png", texto:"Painel de controle ARK."},
                {img:"images/ark_leon_final.png", texto:"Leon Chegando até a Elpis no laboratório ARK."},
                {img:"images/ark_elpis.png", texto:"Local onde se encontra Elpis no laboratório ARK."},
                {img:"images/ark_final.png",texto:"Parte final do jogo."},
                {img:"images/ark_final_2.png", texto:"Parte final do jogo 2."},
                {img:"images/ark_batalha_final.png", texto:"Leon destruindo Dr.Victor Gideon transformado em Nemesis no laboratório ARK."}
                
              ])}}>ARK</button>

              <button className="botao animar" onClick={() => {setMenuAtivo("principal"),tocarClick(), setImagens([{ img: "images/menu.png", texto: "" }])}}>
              Voltar</button>
            </>
          )}

          {menuAtivo === "itens" && (
            <>
              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/itens1.png", texto:"Desing kit de pistolas e machadinha."}
              ])}}>Armas 1</button>
              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
               {img: "images/itens2.png", texto:"Desing kit de armas fortes."}
              ])}}>Armas 2</button>
              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
                {img:"images/itens3.png", texto:"Desing kit de utilitários do jogo."}
              ])}}>Utilitários</button>
              <button className="botao animar" onClick={() => {tocarClick(),setImagens([
               {img:"images/requiem.png", texto:"Desing da Requiem, arma mais forte do jogo."}
              ])}}>Requiem</button>

              <button className="botao animar" onClick={() => {setMenuAtivo("principal"), tocarClick(),setImagens([{ img: "images/menu.png", texto: "" }])}}>
              Voltar</button>
            </>
          )}

          {menuAtivo === "sobre" && (
            <>
              
            <button className="botao animar" onClick={() => {setMenuAtivo("principal"),tocarClick(), setImagens([{ img: "images/menu.png", texto: "" }])}}>
              Voltar</button>
            </>
          )}

        </ul>

      </aside>
    </div>
  )
}

export default Menu