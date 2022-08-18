//selecte dom Element;

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const multipleCounterEl = document.getElementById("multipleCounter");
const spaceCounterEl = document.getElementById("space");

//actions identifiers

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

//Action Creators
const increment = (value) =>{
    return{
        type: INCREMENT,
        payload: value,
      }
}
const decrement = (value) =>{
    return{
        type: DECREMENT,
        payload: value,
      }
}

//initial State;
const initialState = {
  value: 0,
};
//Reducer

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
};

// create store

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerHTML = state.value.toString();
};

// update UI initially
render();
// store subsription

store.subscribe(render);


//event listener;
multipleCounterEl.addEventListener("click",()=>{

    spaceCounterEl.innerHTML = `<div>
        <div class="max-w-md mx-auto mt-10 space-y-5">
            <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div class="text-2xl font-semibold" id="counter"></div>
                <div class="flex space-x-3">
                    <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment">
                        Increment
                    </button>
                    <button class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement">
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    </div>`
})
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});
decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
