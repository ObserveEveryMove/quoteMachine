import React from "react"
import quotes from "./quotes.json"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            quotes: [],
            quote: {},
            colors: ["green", "lightBlue", "dodgerBlue", "lightGreen", "gray", "gold", "orange", "seaGreen", "red","tomato","slateBlue","violet","mediumSeaGreen"],
            color: {}
        }
        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount() {
        this.setState({
            ...this.state,
            quotes,
        })

        setTimeout(() => {
            this.handleClick()
        }, 1);

    }


    handleClick() {
        let random = Math.floor(Math.random() * this.state.quotes.length)
        let colorPick = Math.floor(Math.random() * this.state.colors.length)
        this.state.color = this.state.colors[colorPick]
        this.state.quote = this.state.quotes[random]
        this.setState({
            ...this.state,

        })
    }

    render() {
        // console.log(quotes)
        return (
            <div className="container" >

                <div className="card" style={{ backgroundColor: this.state.color }}>
                    <h2 className="quote">
                        {this.state.quote.quoteText}
                    </h2>


                    <div className="author">

                        {(this.state.quote.quoteAuthor && <p>Created by: </p>)}


                        <h3 className="authorName">
                            {this.state.quote.quoteAuthor}
                        </h3>
                    </div>
                   
                        <button onClick={this.handleClick}>New Quote</button>
                  
                </div>




            </div>
        )
    }



}

export default App