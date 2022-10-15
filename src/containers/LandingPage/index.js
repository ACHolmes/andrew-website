import React from 'react'
import DrawSketch from './sketch'
import { Background, LandingHeader } from './styles'

const LandingPage = () => 
{
    return (
        <Background>
            <LandingHeader>
                <div> Initial commit </div>
                <canvas></canvas>
                <DrawSketch></DrawSketch>
            </LandingHeader> 
        </Background>
    )
}

export default LandingPage
