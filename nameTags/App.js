// Render the name tags using React!
const NameTag = (props)=>{
    let names=props.nameTags
    console.log(names)
    let nameTag=names.map(name=>{
        return (
        <div className="nametag mx-auto w-50 text-center border m-1">
        <div className="hello bg-primary text-white p-3 h3">Hello, my name is:</div>
        <div className="name h4 p-5">{name}</div>
        </div>
        )
          
    })
    return (
        <div>
        {nameTag}
        </div>
    )
};  


const App = (props) => {
    let { nameTags } = props;
 
    console.log(props)
    return (

<NameTag nameTags={nameTags}/>

    
    )
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component




{/* <div class="nametag mx-auto w-50 text-center border m-1">
<div class="hello bg-primary text-white p-3 h3">Hello, my name is:</div>
<div class="name h4 p-5">${currentName}</div>
</div> */}