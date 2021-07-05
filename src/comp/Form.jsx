import {useState} from 'react'
import { useHistory } from 'react-router-dom';

function Form () {
    const [text,setText] = useState('')
    const history = useHistory()

    function searchMovie () {
        history.push('/search/' + text)
    }

    return(
        <div className="form">
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={searchMovie}>Поиск</button>
        </div>
    )
}

export default Form;