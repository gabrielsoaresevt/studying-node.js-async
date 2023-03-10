const questions = [
    "Qual seu nome?",
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + "\n" + "R: ");
}

ask();

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    console.log(`

Incrível! ${answers[0]}

O que você aprendeu hoje foi:
R: ${answers[1]}

O que te aborreceu e você poderia melhorar foi:
R: ${answers[2]}

O que te deixou feliz hoje foi:
R: ${answers[3]}

Você ajudou ${answers[4]} pessoas hoje!!!

Volte amanhã para novas reflexões.
_______________________________________________________________________________

`);
});