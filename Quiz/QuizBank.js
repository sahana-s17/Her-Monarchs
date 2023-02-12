const QuizBank = [
    {
        //deer
        question: "Do deer have access to your plants?",
        id: 0,
        answerA: "Yes",
        idNextQuestionA: 1,
        answerB: "No",
        idNextQuestionB: 4
    },
    {
        //deeryes
        question: "Choose your soil type",
        id: 1,
        answerA: "Wet",
        idNextQuestionA: 2,
        answerB: "Dry",
        idNextQuestionB: 3
    },
    {
        //deeryes-->soilwet
        question: "How are the light conditions in your garden?",
        id: 2,
        answerA: "Full sunlight",
        resultA: 1,
        answerB: "Partially shaded",
        resultB: 2
    },
    {
        //deeryes-->soildry
        question: "How are the light conditions in your garden?",
        id: 3,
        answerA: "Full sunlight",
        resultA: 3,
        answerB: "Partially shaded",
        resultB: 4
    },
    {
        //deerno
        question: "Choose your soil type",
        id: 4,
        answerA: "Wet",
        idNextQuestionA: 5,
        answerB: "Dry",
        idNextQuestionB: 6
    },
    {
        //deerno-->soilwet
        question: "How are the light conditions in your garden?",
        id: 5,
        answerA: "Full sunlight",
        idNextQuestionA: 5,
        answerB: "Partially shaded",
        idNextQuestionB: 6
    },
    {
        //deerno-->soildry
        question: "How are the light conditions in your garden?",
        id: 6,
        answerA: "Full sunlight",
        resultA: 7,
        answerB: "Partially shaded",
        resultB: 8
    }
]

export default QuizBank;


/*
Results: 
1) Wild bergamot, elephant's foot 
2) Elephant's foot 
3) Butterfly weed, hoary mountain mint
4) Hoary mountain mint
5) Common milkweed, black-eyed susan, swamp milkweed 
6) Joe Pye weed, swamp milkweed 
7) Thin-leaved coneflower, eastern purple 
8) Eastern purple 
*/