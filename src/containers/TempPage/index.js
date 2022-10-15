import React from 'react'
import DrawSketch from './sketch'
import { Background, GitButton, GitLogo, TempBody, TempH1, TempHeader, TempText, BackgroundCanvas } from './styles'
import logo from '../../assets/github.png'

const TempPage = () => 
{

    const RedirectPage = () => {
        window.open('https://github.com/ACHolmes/andrew-website');
      };

    return (
        <Background>
            <TempHeader>
                {/* <BackgroundCanvas />
                <DrawSketch/> */}
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
