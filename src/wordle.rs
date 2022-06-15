
#![allow(dead_code)]

#[derive(Debug, Clone, Copy, PartialEq)]
pub enum WordleLetterStatus {
    PresentWrongPosition,
    PresentRightPosition,
    Absent
}
pub struct WordleLetter {
    pub letter: char,
    pub status: WordleLetterStatus
}

pub type WordleLetter2 = (char, WordleLetterStatus);

pub type WordleWord = Vec<WordleLetter2>;

fn wordle_word_to_string(word: WordleWord) -> String {
    let mut result = String::new();
    for letter in word {
        result.push(letter.0);
    }
    result
}

pub struct Wordle {

    word: String,
    tries: u8,
    guesses: Vec<WordleWord>,
    solved: bool,

}

impl Wordle {

    pub fn new(word: String) -> Wordle {
        Self {
            word,
            tries: 0,
            guesses: Vec::with_capacity(6),
            solved: false
        }
    }

    pub fn evaluate_guess(&mut self, guess_word: String) -> bool {
        let mut guess = WordleWord::default();
        for (idx, letter) in guess_word.chars().enumerate() {
            if self.word.contains(letter) && self.word.chars().nth(idx) == Some(letter) {

                guess.push((letter, WordleLetterStatus::PresentRightPosition));

            } else if self.word.contains(letter) {

                if self.word.chars().filter(|&x| x == letter).count() == 1 {

                    guess.push((letter, WordleLetterStatus::Absent));

                } else { 

                    guess.push((letter, WordleLetterStatus::PresentWrongPosition))

                };
            } else {

                guess.push((letter, WordleLetterStatus::Absent));
            }

        }
        self.guesses.push(guess.clone());
        self.tries += 1;
        self.solved = guess.iter().all(|&x| x.1 == WordleLetterStatus::PresentRightPosition);
        self.solved
    }

    pub fn get_word(&self) -> String {
        self.word.clone()
    }

    pub fn get_tries(&self) -> u8 {
        self.tries
    }

    pub fn get_guesses(&self) -> Vec<WordleWord> {
        self.guesses.clone()
    }

    pub fn is_solved(&self) -> bool {
        self.solved
    }
}