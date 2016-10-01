
import store from './store';

function clear() {
    store.clear();
}

const New = (props) => <div>

    <button onClick={clear}> Clear </button>

</div>;

export default New;