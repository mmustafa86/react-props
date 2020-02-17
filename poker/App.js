// Render the cards using React!
const App = (props) => {
    let { cards } = props;
    console.log(props)
    return (
        <div>
            <Card card={cards}/>
    
        </div>
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = (props) =>{
    let cards=props.card
console.log(cards)
let card=cards.map(card=>{
    return  <img width="80" key={card} src={'cards/' + card.value+card.suit+ '.png'}/>
})

return (
    <div>
{card}
    </div>
)

}
{/* <img width=80 src="cards/${card.value}${card.suit}.png"/> */}