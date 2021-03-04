import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
font-family: 'Bebas Neue', cursive;
font-weiht: bold;
font-size: 2.4rem;
display: block;
text-transform: uppercase;
margin-top: 2rem;
color: #FFF;
`

const Select = styled.select`
width: 100%;
-webkit-appearance: none;
border-radius: 10px;
display: block;
border: none;
padding: 1rem;
font-size: 1.2rem;
`

const useCrypto = (label, stateIni, coins) => {

    // State de nuestro hook personalizado
    const [state, setState] = useState(stateIni)

    const selectCrypto = () => (
        <>
            <Label>{label}</Label>
            <Select
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value=''>-- Seleccione --</option>
                {coins.map(coin => (
                    <option key={coin.CoinInfo.Id} value={coin.CoinInfo.Name}>{coin.CoinInfo.FullName}</option>
                ))}
            </Select>
        </>
    )

    // Retornar state, interfaz y función que modifica state
    return [state, selectCrypto, setState]
}

export default useCrypto