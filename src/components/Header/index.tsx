import styled from 'styled-components'

export interface IHeader {
    title: string
    subtitle: string
}

const HeaderWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;

@media (min-width: 981px) {
  align-items: flex-start;
}

`

const HeaderTitle = styled.h1`
font-family: 'Domine';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 120%;

text-align: center;
letter-spacing: -0.02em;

color: #003D3B;
margin-top: 0px;
margin-bottom: 16px;

@media (min-width: 981px) {
    text-align: left;
}
`

const HeaderParagraph = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;

text-align: center;
letter-spacing: -0.01em;


color: #003D3B;
margin: 0px;
opacity: 0.75;

@media (min-width: 981px) {
    text-align: left;
}

@media (min-width: 420px) and (max-width:980px) {
    font-size: 18px;
}

@media (min-width: 981px) {
    font-size: 18px;
}
`

export const Header = ({ title, subtitle }: IHeader) => {
    const splitSentences = subtitle.split(".")
    return (
        <HeaderWrapper>
            <HeaderTitle>{title}</HeaderTitle>
            {splitSentences.map((obj)=><HeaderParagraph>{obj}.</HeaderParagraph>)}
        </HeaderWrapper>
    )
}
  