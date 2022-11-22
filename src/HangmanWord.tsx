type HangmanWordProps = {
    gussedLetters: string[];
    reveal?: boolean;
    wordToGuess: string;
}

export function HangmanWord({ gussedLetters, wordToGuess, reveal = false}: HangmanWordProps){
    return(
        <div style={{ display: "flex", gap: ".25em", fontSize: "4rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace" }}>
            {wordToGuess.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid black" }} key={index}>
                    <span style={{ visibility: gussedLetters.includes(letter) || reveal ? "visible" : "hidden", color: !gussedLetters.includes(letter) && reveal ? "red" : "black" }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
};