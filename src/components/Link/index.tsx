import styled from 'styled-components'

export interface ILink {
    title: string
    href: string
}

const OrangeButton = styled.a`
background: #FF6340;
border-radius: 8px;
text-decoration: none;
width: 100%;
display: block;
text-align: center;
color: #F9F9F2;
text-transform: uppercase;

font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 150%;

height: 53px;

display: flex;
align-items: center;
justify-content: center;
letter-spacing: 3px;
`

export const Link = ({ title, href }: ILink) => {
    return (
        <OrangeButton href={href}>{title}</OrangeButton>
    )
}