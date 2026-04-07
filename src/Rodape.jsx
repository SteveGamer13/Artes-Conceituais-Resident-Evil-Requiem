import './index.css'
import { useState } from 'react'

function Rodape() {

  return (
    <div className="container">

        <footer className="rodape">

        <p className="texto-rodape">
            © Site Feito Por Fã
        </p>

        <img src="images/umbrella.png" alt="Umbrella Logo" className="logo-rodape"
        />

    </footer>

    </div>
  )
}

export default Rodape