// Render the rectangle using React!
const App = (props) => {
    let { rectangle } = props;
console.log(props)
    let myStyle = {
        width: rectangle.width ,
        height: rectangle.height,
        backgroundColor: rectangle.color
        

    }
    return (
        <div style={myStyle}>rectangle</div>
       
    )
}


{/* <div style="width: ${state.width}px; height: ${state.height}px; background-color: ${state.color};"></div> */}