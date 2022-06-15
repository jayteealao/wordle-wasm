import * as React from 'react';

export function KeyboardKeys({string="Q"}) {

    return (
        <button className='h-8 w-8 border border-solid border-orange-200 bg-orange-100 rounded-md text-center'>
            {string}
        </button>
    )
}

export function KeyboardRows({rowStrings=["Q","W","E","R","T","Y","U","I","O","P"]}) {
    
    return (
        <div className="flex flex-row gap-1 mx-auto place-content-center">
            { rowStrings.map(i => <KeyboardKeys key={i} string={i}/>) }
        </div>
    )
}

export function Keyboard() {

    let keyboardrows1 = ["Q","W","E","R","T","Y","U","I","O","P"];
    let keyboardrows2 = ["A","S","D","F","G","H","J","K","L"];
    let keyboardrows3 = ["↵","Z","X","C","V","B","N","M", "←"];

    let keyboardrows = [keyboardrows1, keyboardrows2, keyboardrows3];
    
        return (
            <div className="flex flex-col gap-1">
                { keyboardrows.map((s, i) => <KeyboardRows key={i} rowStrings={s}/>) }
            </div>
        )
}