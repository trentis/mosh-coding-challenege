import React, { useEffect, useState } from 'react';
import { Header } from './components/Header'
import styled from 'styled-components'
import { Item } from './components/Item';

const MainContainer = styled.div`
background: #F9F9F2;
padding-top: 40px;
padding-left: 16px;
padding-right: 16px;

@media (min-width: 420px) and (max-width:980px) {
  padding-top: 48px;
}

@media (min-width: 981px) {
  padding-top: 64px;
  padding-left: 30px;
  padding-right: 30px;
}

@media (min-width: 1269px) {
  padding-left: 120px;
  padding-right: 120px;
}
`

const WrapContent = styled.div`
display: grid;

@media (min-width: 981px) {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
`

const ItemWrapper = styled.div`
@media (min-width: 420px) and (max-width:980px)  {
  display: flex;
  gap: 24px;
  justify-content: center;
}
@media (min-width: 981px)   {
  display: flex;
  flex-direction: column;
}
`

interface IOptions {
  consultation: Array<string>
  therapy: Array<string>
}

function App() {

  const [load, setLoad] = useState(false)
  const [options, setOptions] = useState<IOptions>({consultation: [], therapy: []})

  useEffect(()=>{
    async function fetchOptions() {
      // Should really do try/catch err logic here
      let resp = await fetch('https://moshhero.free.beeceptor.com/my/api/options')
      let json = await resp.json()
      setLoad(true)
      setOptions(json)
    }
    if(!load) {
      fetchOptions()
    }
  },[load])

  return (
    <MainContainer>
      <WrapContent>
        <div style={{marginBottom: '24px'}}>
          <Header title="Get back on track" subtitle='Treatment plan in 24 hours. Treat anxiety, depression & more'/>
        </div>
        <ItemWrapper>
          <Item options={options && options.consultation} title="Free Doctor Consultation" img='/dr-ossman-and-dr-ateka.png' link={{title: 'Get Started', href: 'https://www.getmosh.com.au/quizzes/mental_health_quiz'}} />
          <Item options={options && options.therapy} title="One-on-one therapy sessions" img='/dr-ossman-and-dr-ateka-2.png' link={{title: 'Book Therapist', href: 'https://www.getmosh.com.au/booking/mental_health'}} />
        </ItemWrapper>
      </WrapContent>
    </MainContainer>
  );
}

export default App;
