// select dom elements
const counterContainerEl = document.getElementById("counterContainer");
const addCounterEl = document.getElementById("addCounter");
const resetCounterEl = document.getElementById("resteCounter")

// initial state
const initialState = [
    {
        id: 0,
        value: 0
    }
];

// action identifiers
const ADDCOUNTER = 'addCounter';
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESETCOUNTER = "resetcounter";

//action creators
const addCounter = () => {
    return {
        type: ADDCOUNTER
    }
}
const resetCounter = () => {
    return {
        type: RESETCOUNTER
    }
}
const increment = (value) => {
    console.log(value)
    return {
        type: INCREMENT,
        payload: value
    }
};

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}

// create reducer function
const counterReducer = (state = initialState, action) => {
    if (action.type === ADDCOUNTER) {
        const newCounter = {
            id: state.length,
            value: 0
        }
        return [...state, newCounter];

    } else if (action.type === INCREMENT) {
        const newState = [...state];
        newState[action.payload].value += 1;
        return newState;

    } else if (action.type === DECREMENT) {
        const newState = [...state];
        newState[action.payload].value -= 1;
        return newState;

    } else if (action.type === RESETCOUNTER) {
        const newState = [...state];
        for (counter of newState) {
            counter.value = 0;
        }
        return newState;

    } else {
        return state;
    }
}

// create Store 
const store = Redux.createStore(counterReducer);

// handler function
const incrementHandler = (id) => {
    store.dispatch(increment(id))
}
const decrementHandler = (id) => {
    store.dispatch(decrement(id))
}

const render = () => {
    const state = store.getState();
    counterContainerEl.innerHTML = "";
    state.map((counter) => {
        console.log(counter);
        counterContainerEl.innerHTML += `<div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div class="text-2xl font-semibold" id="counter">${counter.value}</div>
        <div class="flex space-x-3">
            <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" onclick=incrementHandler(${counter.id})>
                Increment
            </button>
            <button class="bg-red-400 text-white px-3 py-2 rounded shadow" onclick=decrementHandler(${counter.id})>
                Decrement
            </button>
        </div>
        </div>`;
    })
}

render();
store.subscribe(render);

// button click listeners
addCounterEl.addEventListener("click", () => {
    store.dispatch(addCounter());
})

resetCounterEl.addEventListener("click", () => {
    store.dispatch(resetCounter());
})


