// select dom elements
const counterContainerEl = document.getElementById("counterContainer");
const addCounterEl = document.getElementById("addCounter");
const resetCounterEl = document.getElementById("resteCounter")

// initial state
const initialState = [
    {
        id: 1,
        value: 0
    },
    {
        id: 2,
        value: 0
    },
];

// counter templete
const counterTemp = `<div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
<div class="text-2xl font-semibold" id="counter">0</div>
<div class="flex space-x-3">
    <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment">
        Increment
    </button>
    <button class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement">
        Decrement
    </button>
</div>
</div>`;

// render templete
counterContainerEl.innerHTML = counterTemp + counterTemp;

