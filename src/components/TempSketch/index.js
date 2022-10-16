import React from 'react'
import Sketch from 'react-p5'

import { SketchContainer } from './styles'

const TempSketch = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const setup = (p5, canvasParentRef) => {
      p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
    }
    
    const draw = p5 => {
      p5.background(0);
      p5.stroke(0, 192);
      p5.strokeWeight(2);
      let spacing = windowWidth / 20;
      for (let i = spacing / 2; i < windowWidth; i+= spacing)
      {
        for (let j = spacing / 2; j < windowHeight; j+= spacing)
        {
          let red = p5.dist(p5.mouseX, p5.mouseY, i, j);
          let green = 200 * p5.abs(p5.cos(i + p5.frameCount / 20));
          p5.fill(red, green, 255);
          let outer_rad = 20 + 5 * p5.sin(p5.frameCount / 20);
          let inner_rad = 3 + 2 * p5.sin(p5.frameCount / 20);
          p5.circle(i, j, outer_rad);
          p5.fill(0);
          p5.circle(i, j, inner_rad);
        }
      }
    
    // Learning from Lauren's p5 example
    //draw circles in grid based on window spacing
    // for (let i = spacing/2; i < windowWidth; i += spacing) {
    //     for (let j = spacing/2; j < windowHeight; j += spacing) {
    //       let d = p5.dist(p5.mouseX, p5.mouseY, i, j);
    //       p5.fill(255 - p5.mouseY/4, 50 + p5.mouseX/4, 50 + d);
    //       let di = d/20 + 14*p5.sin(p5.frameCount/20);
    //       p5.circle(i, j, di);
    //       let di2 = di/1.5;
    //       if (di2 <= di && di > 0){
    //         p5.fill(0);
    //         p5.circle(i, j, di2);
    //       }
    //       if (di < 0){
    //         p5.circle(i, j, 2*di);
    //         p5.fill(0);
    //         p5.circle(i, j, 2*di2);
    //       }
    //     }
    // }
    }
    
    return (
      <SketchContainer>
        <Sketch setup={setup} draw={draw} />
      </SketchContainer>
    
    )
  }
  
  export default TempSketch