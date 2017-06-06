import { h, Component } from 'preact'

class EditableTrickData extends Component {
    state = { isEditing: false }

    onClick = (e) => {
        this.setState({ isEditing: !this.state.isEditing })
        // e.target.focus() // TODO
    }

    // When user types a key...
    onKeypress = (e) => {
        if (e.key === "Enter") {
            this.setState({ isEditing: false })
            this.props.updateData(e.target.value)
        }
    }

    render({ data }, { isEditing }) {
        return isEditing
            ? <input type='text' placeholder={data} onKeypress={this.onKeypress}/>
            : <td class='trick-prop' onClick={this.onClick}>{data}</td>
    }
}

export default class Trick extends Component {
    state = { trickName: '', difficulty: 0 }

    updateTrickName = (trickName) => this.setState({ trickName })
    updateDifficulty = (difficulty) => this.setState({ difficulty })

    render(props, state) {
        return <tr>
            <EditableTrickData data={state.trickName || props.trickName} updateData={this.updateTrickName}/>
            <EditableTrickData data={state.difficulty || props.difficulty} updateData={this.updateDifficulty}/>
            <td class='trick-prop' onClick={props.deleteTrick}>X</td>
        </tr>
    }
}

