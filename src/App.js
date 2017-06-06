import { h, Component } from 'preact'
import './App.css'
import Trick from './Trick'

const tricks = [
    { trickName: "kickflip", difficulty: 3 },
    { trickName: "bs 360", difficulty: 4 }
]

export default class App extends Component {
    state = { tricks }

    deleteTrick = (e) => {
        const clickedTrickAsNodeList = e.target.parentNode.children
        const clickedTrick = {
            trickName: clickedTrickAsNodeList[0].textContent,
            difficulty: Number(clickedTrickAsNodeList[1].textContent)
        }
        this.setState({ tricks: withoutItem(clickedTrick, tricks) })
    }

    render(props, { tricks }) {
        const trickComponents = tricks.map(trick => <Trick {...trick} deleteTrick={this.deleteTrick}/>)
        return (
            <div class='App'>
                <h1>Skate List</h1>
                <table>
                    <thead>
                        <tr>
                            <th class='trick-prop-title'>Trick Name</th>
                            <th class='trick-prop-title'>Difficulty</th>
                            <th class='trick-prop-title'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trickComponents}
                    </tbody>
                </table>
            </div>
        )
    }
}

/** Returns a copy of `list` with `itemToRemove` removed from it. Does _not_ check for presence. */
function withoutItem(itemToRemove, list) {
    const listCopy = Array.prototype.slice.call(list)
    listCopy.splice(listCopy.indexOf(itemToRemove), 1)
    return listCopy
}
