type HangmanWordProps = {
    gussedLetters: string[];
    wordToGuess: string;
}

export function HangmanWord({ gussedLetters, wordToGuess }: HangmanWordProps){
    return(
        <div style={{ display: "flex", gap: ".25em", fontSize: "4rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace" }}>
            {wordToGuess.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid black" }} key={index}>
                    <span style={{ visibility: gussedLetters.includes(letter) ? "visible" : "hidden" }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
};