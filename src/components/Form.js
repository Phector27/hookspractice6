import styled from '@emotion/styled'
import useCoin from '../hooks/useCoin'
import useCrypto from '../hooks/useCrypto'
import Error from './Error'
import { useEffect, useState } from 'react'
import Axios from 'axios'


const Button = styled.input`
margin-top: 20px;
font-weight: bold;
font-size: 20px;
padding: 10px;
background-color: #66A2FE;
border: none;
width: 100%;;
border-radius: 10px;
color: #FFF;
text-transform: uppercase;
transition: background-color .3s ease;

&:hover {
    background-color: #326AC0;
    cursor: pointer;
}`

const Form = ({setCoin, setCrypto}) => {

    //State del estado de criptomonedas
    const [listacrypto, setListacrypto] = useState([])
    const [error, setError] = useState(false)

    const coins = [
        { code: 'USD', name: 'US Dolar' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra Esterlina' },
        { code: 'MXN', name: 'Peso Mexicano' }
    ]

    // Utilizar nuestro hooks personalizado:
    const [coin, SelectCoin] = useCoin('Elige tu moneda ', '', coins)


    // Utilizar useCrypto
    const [crypto, SelectCrypto] = useCrypto('Elige tu criptomoneda', '', listacrypto)

    // Ejecutar llamado a API
    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const result = await Axios.get(url)
            setListacrypto(result.data.Data)
        }

        consultAPI()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        // Validar si los campos están completos

        if (coin === '' || crypto === '') {
            setError(true)
            return
        }

        setError(false)
        setCoin(coin)
        setCrypto(crypto)
    }

    return (
        <form
            onSubmit={handleSubmit}>
            {error ? <Error message='Todos los campos son obligatorios'/> : null}
            <SelectCoin />
            <SelectCrypto />
            <Button
                type='submit'
                value='calcular'
            />
        </form>
    );
}

export default Form;