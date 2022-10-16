import React from 'react'
import { Background, GitButton, GitLogo, TempBody, TempH1, TempHeader, TempText } from './styles'
import logo from '../../assets/github.png'
import TempSketch from '../../components/TempSketch'

const TempPage = () => 
{
    const RedirectPage = () => {
        window.open('https://github.com/ACHolmes/andrew-website');
      };

    return (
        <Background>
            <TempHeader>
                <TempSketch/>
                <TempBody>
                    <TempText>
                    <TempH1>
                        Andrew's website!
                    </TempH1>
                    </TempText>
                    
                    <TempText>
                        In its infancy! Check out the GitHub repo to see progress:
                    </TempText>
                    <TempText>
                    <GitButton onClick={RedirectPage}>
                        <GitLogo src={logo}/>
                        
                        View Github Repo!
                    </GitButton>
                    </TempText>
                </TempBody>
            </TempHeader> 
        </Background>
    )
}

export default TempPage
