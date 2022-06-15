import * as React from "react"

export function WordleLetter({}) {

    return (
        <div className="flex px-2 h-max w-max place-content-center align-middle border border-cyan-900 border-solid text-5xl">
            A
        </div>
    )
}

function range(start, end) {
    let arr = [];
    for (let i = start; i < end; i++) {
        arr.push(i);
    }

    return arr;
}

export function WordleWord({params}) {
    return (
    <div className="flex flex-row gap-1 place-content-center">
        { range(0, 5).map(i => <WordleLetter key={i}/>) }
    </div>
    )
}

export function WordleBoard({}) {
    return (
        <div className="flex flex-col gap-1">
            { range(0, 6).map(i => <WordleWord key={i}/>) }
        </div>
    )
}