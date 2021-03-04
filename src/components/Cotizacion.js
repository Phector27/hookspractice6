import styled from '@emotion/styled'

const DivResult = styled.div`
color: #FFF;
font-family: Arial, Helvetica, sans-serif;
`

const Paragraph = styled.p`
font-size: 18px;

span {
    font-weight: bold;
}
`

const Price = styled.p`
font-size: 30px;

span {
    font-weight: bold;
}
`

const Cotizacion = ({ result }) => {

    if (Object.keys(result).length === 0) return null;

    console.log(result)

    return (
        <DivResult>
            <Price>El precio es: <span>{result.PRICE}</span></Price>
            <Paragraph>El precio más alto de hoy: <span>{result.HIGHDAY}</span></Paragraph>
            <Paragraph>El precio más bajo de hoy: <span>{result.LOWDAY}</span></Paragraph>
            <Paragraph>Variación 24h: <span>{result.CHANGEPCT24HOUR}</span></Paragraph>
            <Paragraph>Última actualizaciñón: <span>{result.LASTUPDATE}</span></Paragraph>

        </DivResult>
    );
}

export default Cotizacion;