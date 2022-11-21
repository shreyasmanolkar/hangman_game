export function HangmanWord(){

    const word = "test"
    const gussedLetters = ["t"]

    return(
        <div style={{ display: "flex", gap: ".25em", fontSize: "4rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace" }}>
            {word.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid black" }} key={index}>
                    <span style={{ visibility: gussedLetters.includes(letter) ? "visible" : "hidden" }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
};