import { h, Component } from 'preact'

export default class Trick extends Component {
    render(props) {
        return <tr>
            <td class='trick-prop'>{props.name}</td>
            <td class='trick-prop'>{props.difficulty}</td>
            <td class='trick-prop' onClick={props.deleteTrick}>X</td>
        </tr>
    }
}

