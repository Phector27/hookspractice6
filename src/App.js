import styled from '@emotion/styled'
import image from './cryptomonedas.png'
import { useState, useEffect } from 'react'
import Form from './components/Form'
import Spinner from './components/Spinner'
import Cotizacion from './components/Cotizacion'
import Axios from 'axios'

const Container = styled.div`
max-width: 900px;
margin: 0 auto;
@media (min-width: 992px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
}
`

const Image = styled.img`
max-width: 100%;
margin-top: 5rem;`

const Heading = styled.h1`
font-family: 'Bebas Neue', cursive;
color: #FFF;
font-weigth: 700;
text-align: left;
font-size: 50px;
margin: 80px 0px 50px 0px;

&::after {
  content: '';
  width: 100px;
  height: 6px;
  background-color: #66A2FE;
  display: block;
}
`

function App() {

  const [coin, setCoin] = useState('')
  const [crypto, setCrypto] = useState('')
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const cotizarCrypto = async () => {
      // Evitamos la primera ejecución
      if (coin === '') return

      // Consulta a la API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
      const result = await Axios.get(url)

      //Mostrar Spinner
      setLoading(true)

      // Ocultar Spinner
      setTimeout(() => {

        setLoading(false)

        setResult(result.data.DISPLAY[crypto][coin])

      }, 3000);

      
    }

    cotizarCrypto()

  }, [coin, crypto])


  // Mostrar Spinner o resultado
  const component = (loading) ? <Spinner /> : <Cotizacion result={result} />


  return (
    <Container>
      <div>
        <Image
          src={image}
          alt='crypto image'
        />
      </div>
      <div>
        <Heading>
          Averigua el precio de una criptomoneda al instante
        </Heading>
        <Form
          setCoin={setCoin}
          setCrypto={setCrypto}
        />
        {component}
      </div>
    </Container>
  );
}

export default App;