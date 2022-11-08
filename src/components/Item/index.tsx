import {useState} from 'react'
import { Link } from '../Link'
import { FaRegCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import styled from 'styled-components'

export interface IItem {
    title: string // free doctor consultation
    options: Array<string> 
    img: string // picture
    link: {
        title: string
        href: string
    }
}

const ImageContainer = styled.img`
border-radius: 20px;
height: 140px;
width: 100%;

object-fit: cover;

@media (min-width: 420px) and (max-width:980px) {
    height: 188px;
}

@media (min-width: 981px) {
    height: 200px;
    min-width: 200px;
}
`

const ItemHeader = styled.h1`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 150%;

letter-spacing: -0.01em;

color: #003D3B;

margin: 0px;

flex: 1
`

const LiTitle = styled.li`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;

letter-spacing: -0.01em;

color: #003D3B;

display: flex;
align-items: center;
gap: 16px;
margin-bottom: 8px;
@media (min-width: 981px) {
    font-size: 16px;
}
`

const TabletOrMobileContainer = styled.div`
margin-bottom: 32px;
display: block;
width: 100%;
@media (min-width: 981px) {
    display: none;
}
`

const DesktopContainer = styled.div`
display: none;

@media (min-width: 981px) {
    display: flex;
    gap: 20px;
    padding-bottom: 32px;
}
`

export const Item = ({ title, options, img, link }: IItem) => {

    const [displayAccordion, setDisplayAccordion] = useState(false)


    return (
        <>
          <DesktopContainer>
            <div style={{flex: 1}}>
                <ImageContainer src={img}/>
            </div>
            <div>
                <ItemHeader>{title}</ItemHeader>
                <ul style={{listStyle: 'none', padding: '0px', margin: '8px 0px 0px 0px'}}>
                    {options.map((obj,i)=><LiTitle key={i}><FaRegCheckCircle/> {obj}</LiTitle>)}
                </ul>
                <div style={{width: '220px', paddingTop: '8px'}}>
                    <Link {...link}/>
                </div>
            </div>
          </DesktopContainer>
          <TabletOrMobileContainer>
            <div style={{cursor: 'pointer'}} onClick={()=>{setDisplayAccordion(!displayAccordion)}}>
                <ImageContainer src={img} />
                <div style={{marginBottom: '16px', marginTop: '16px'}}>
                    <div style={{display: 'flex', alignItems:'center'}}>
                    <ItemHeader>{title}</ItemHeader>
                    <div>{displayAccordion ? <FaChevronUp/> : <FaChevronDown/>}</div>
                    </div>
                    {displayAccordion && 
                        <ul style={{listStyle: 'none', padding: '0px', margin: '8px 0px 0px 0px'}}>
                            {options.map((obj,i)=><LiTitle key={i}><FaRegCheckCircle/> {obj}</LiTitle>)}
                        </ul>
                    }
                </div>
            </div>
            <Link {...link}/>
          </TabletOrMobileContainer>
        </>

    )
  }