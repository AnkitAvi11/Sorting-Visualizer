import React, {Component} from 'react';
import {getSortAnimations} from "./SortingAlgorithm";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


class SortingVisualizer extends Component{

    constructor() {
        super();
        this.state = {
            array : []
        }
    }

    componentDidMount = () => {
        this.resetArray();        
    }

    resetArray = () => {
        let newarr = []
        for(let i=0;i<200;i++){
            newarr.push(generateRandomNumber(1, 320))
        }
        this.setState({array : newarr})
    }

    bubbleSort = async () => {
        const arr = [...this.state.array]
        const animations = getSortAnimations(arr)
        const arrayBars = document.getElementsByClassName('bar');
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i%3 !== 2;

            if(isColorChange){
                const [bar1,bar2] = animations[i];
                const sty1 = arrayBars[bar1].style;
                const sty2 = arrayBars[bar2].style;

                const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

                setTimeout(() => {
                    sty1.backgroundColor = color;
                    sty2.backgroundColor = color;
                },i* ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    arrayBars[animations[i][0][0]].style.height = `${animations[i][0][1]}px`;
                    arrayBars[animations[i][1][0]].style.height = `${animations[i][1][1]}px`;
                }, i*ANIMATION_SPEED_MS);
            }
        }

        console.log(arr)
        
    }

    render() {

        let bars = this.state.array.map((bar, index) => {
            return (
                <React.Fragment key={index}>
                    <div className="bar" style={{height : bar+"px"}}>
                    </div>
                </React.Fragment>
            )
        })

        return (
            <div>
                <p>Sorting Visualizer React App</p>
                <div className="bar-container" style={{marginTop : "30px"}}>
                    {bars}
                </div>
                <div className="buttons" style={{textAlign:"center"}}>
                    <button onClick={this.resetArray}>Randomize Array</button>
                    <button onClick={this.bubbleSort}>Bubble Sort</button>
                </div>
            </div>
        )
    }

}

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min+1) + min);
} 

export default SortingVisualizer;