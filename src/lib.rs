mod utils;
mod wordle;
mod words;

use std::cell::RefCell;
use js_sys::{Array, Object, Map};

use wordle::*;
use words::*;
use utils::*;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, {{project-name}}!");
}


thread_local! {
    static WORDLE: RefCell<Wordle> = RefCell::new(Wordle::new(random_choice(GUESSWORDS).to_string()));
}

fn is_valid(guess: &str, list: &[&str]) -> bool {
    list.contains(&guess)
}

fn next_guess(guess: String) -> Result<(), JsValue> {
    if is_valid(guess.as_str(), INPUTWORDS) {
        WORDLE.with(|wordle| {
            wordle.borrow_mut().evaluate_guess(guess);
        });
    } else {
        return Err(JsValue::from_str("Invalid guess"));

    }
    Ok(())
}

fn get_word() -> String {
    WORDLE.with(|wordle| {
        wordle.borrow().get_word()
    })
}

fn get_tries() -> u8 {
    WORDLE.with(|wordle| {
        wordle.borrow().get_tries()
    })
}

#[wasm_bindgen(js_name = getState)]
pub fn get_state() -> Map {

    let guesses = Array::new_with_length(6);
    let state = Map::new();

    WORDLE.with(|wordle| {
        state.set(&JsValue::from_str("word"), &JsValue::from_str(wordle.borrow().get_word().as_str()));
        state.set(&JsValue::from_str("tries"), &JsValue::from_f64(wordle.borrow().get_tries() as f64));
        state.set(&JsValue::from_str("solved"), &JsValue::from_bool(wordle.borrow().is_solved()));
        for (idx, guess) in wordle.borrow().get_guesses().iter().enumerate() {
            let guess_map = Map::new();
            for letter in guess.iter() {
                match letter {
                    (char, WordleLetterStatus::PresentRightPosition) => {
                        guess_map.set(&JsValue::from_str("letter"), &JsValue::from_str(char.to_string().as_str()));
                        guess_map.set(&JsValue::from_str("status"), &JsValue::from_str("green"));
                    },
                    (char, WordleLetterStatus::PresentWrongPosition) => {
                        guess_map.set(&JsValue::from_str("letter"), &JsValue::from_str(char.to_string().as_str()));
                        guess_map.set(&JsValue::from_str("status"), &JsValue::from_str("yellow"));
                    },
                    (char, WordleLetterStatus::Absent) => {
                        guess_map.set(&JsValue::from_str("letter"), &JsValue::from_str(char.to_string().as_str()));
                        guess_map.set(&JsValue::from_str("status"), &JsValue::from_str("grey"));
                    }
                }
            }
            guesses.set(idx as u32, guess_map.into());
        }
    });
    state.set(&JsValue::from_str("guesses"), &guesses);
    state
}