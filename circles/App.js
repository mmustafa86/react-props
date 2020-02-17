// Render the circles using React!


const Circle = (props) =>{
    // let {circles} = props;
    let circle=props.circles
    console.log(circle)
 let myStyle={
         backgroundColor: circle.color,
         width: circle.radius,
         height: circle.radius,
         borderRadius: circle.radius

         
        }

// console.log(myStyle)
return <div style={myStyle}></div>

} 

const App = (props) => {
    let { circles } = props;
    // console.log(props)
var components=circles.map(circle=>{
return <Circle key={circle.radius} circles={circle}/>
     
})
   console.log(components)
    return (
        <div>
        {components}
         </div>
    )
}


{/* <div style="width: ${circle.radius * 2}px; height: ${circle.radius * 2}px; border-radius: ${circle.radius}px; background-color: ${circle.color};"></div> */}