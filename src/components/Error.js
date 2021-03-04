import styled from '@emotion/styled'

const ErrorMessage = styled.p`
background-color: #B7322C;
padding: 1rem;
text-transform: uppercase;
font-weight: bold;
font-family: 'Bebas Neue', cursive;
font-size: 30px;
color: #FFF;
text-align: center;
`

const Error = ({message}) => {
    return (
        <ErrorMessage>{message}</ErrorMessage>
    );
}
 
export default Error;