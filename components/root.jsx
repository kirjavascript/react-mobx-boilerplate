import styles from './root.scss';
import { render } from 'react-dom';

import New from './new.jsx';

import store from './store';

import { observer } from 'mobx-react';

const Root = observer((props) => <div>

    {props.store.upper}

    <br />

    <input value={props.store.text} onChange={((e) => {
        props.store.text = e.target.value;
    })} />

    <New/>

</div>);

render(<Root store={store}/>, document.querySelector('#root'));
