import { useState } from "react"

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState("#000000");

    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    function generateRandomColor() {
        console.log('About to generate');
        if (typeOfColor === "hex") {
            let tmpColor = '#';
            for (let i = 0; i < 6; i++) {
                const myRand=Math.floor(Math.random() * hexArr.length);
                console.log(myRand);
                tmpColor += hexArr[myRand];
            }
            console.log(tmpColor);
            setColor(tmpColor);
        }
        else {

        }

    }
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color

        }}>
            <button onClick={() => { setTypeOfColor('hex') }}>Hex Mode</button>
            <button onClick={() => { setTypeOfColor('rgb') }}>RGB Mode</button>
            <button onClick={generateRandomColor}>Generate Random Color</button>
            <span style={{ color: 'red' }}>Mode:{typeOfColor}
            </span>

        </div>
    )
}