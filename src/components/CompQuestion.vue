<template>
    <div>
        <div v-if="!isQuestionLong" class="quiz-container">
            <h2>Câu hỏi: {{index + 1 }} : {{ question.question }}
                <span v-if="isSubmit && isCorrect" style="color: green;">✔️</span>
                <span v-if="isSubmit && !isCorrect" style="color: red;">
                    X
                </span>
            </h2>

            <div v-for="(plan, index) in shuffledPlans" :key="index">
                <label>
                    <input
                        type="radio"
                        :value="plan.value"
                        v-model="selectedAnswer"
                        >
                    {{ plan.value }}
                </label>
            </div>
        </div>
        <div v-if="isQuestionLong" class="quiz-container">
            <h2>Câu hỏi: {{index + 1 }} : {{ question.title }}</h2>
            <h2 v-html="question.questionParent"></h2>
            <div v-for="(questionChil, indexchil) in shuffledQuestionChil" :key="indexchil">
                <h2> {{ indexchil + 1 }} : {{questionChil.question}}
                    <span v-if="isSubmit && questionChil.answer === questionChil.selectedAnswer" style="color: green;">✔️</span>
                    <span v-if="isSubmit && questionChil.answer !== questionChil.selectedAnswer" style="color: red;">
                        X
                    </span>
                </h2>
                <div v-for="(plan, index) in questionChil.plans" :key="index">
                    <label>
                        <input
                            type="radio"
                            :value="plan.value"
                            v-model="selectedAnswerChil[indexchil]"
                            >
                        {{ plan.value }}
                    </label>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "comp-question",
    props: {
        question: {
            type: Object,
            default: {}
        },
        index: {
            type: Number,
            default: 0
        },
        isSubmit: {
            type: Boolean,
            default: false
        },
        listIdLong: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            shuffledPlans: [],
            selectedAnswer: null,
            shuffledQuestionChil: [],
            selectedAnswerChil: [],
        }
    },
    created() {
        if (this.question.plans && this.question.plans.length > 0) {
            this.shuffledPlans = this.shuffleArray(this.question.plans);
        }
        if (this.question.items && this.question.items.length > 0) {
            this.shuffledQuestionChil = this.question.items;
        }
        if (this.question.plans ){
            this.selectedAnswer = this.question.selectedAnswer;
        } else {
            this.selectedAnswerChil = Array(this.shuffledQuestionChil.length).fill(null);
        }
    },
    watch: {
        selectedAnswer(newValue) {
            this.$emit('handleChecked', this.index, newValue);
        },
        selectedAnswerChil(newValue) {
            this.$emit('handleCheckedChil', this.index, newValue);
        },
        isSubmit(newVal) {
            this.$emit('handleSubmitQuestion', this.correctAnswersCount);
        }
    },
    computed: {
        isCorrect() {
            return this.isSubmit && this.selectedAnswer === this.question.answer;
        },
        isQuestionLong() {
            return this.listIdLong.includes(this.question.id);
        },
        correctAnswersCount() {
            if (!this.isQuestionLong) {
            return this.isSubmit && this.isCorrect ? 1 : 0;
            } else {
            return this.shuffledQuestionChil.reduce((count, questionChil) => {
                return count + (this.isSubmit && questionChil.answer === questionChil.selectedAnswer ? 1 : 0);
            }, 0);
            }
        }
    },
    methods: {
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },
        handleSubmit() {
            console.log(this.correctAnswersCount);
            this.$emit('handleSubmit', this.correctAnswersCount);
        },
        handleClick() {

        }
    }
}
</script>

<style>
    .quiz-container {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 1000px;
      text-align: left;
    }

    .quiz-container h2 {
      margin-bottom: 20px;
      font-size: 1.2rem;
    }

    .quiz-container label {
      display: block;
      margin: 10px 0;
      font-size: 1rem;
    }

    .quiz-container input[type="radio"] {
      margin-right: 10px;
    }

    .quiz-container button {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }

    .quiz-container button:hover {
      background-color: #2980b9;
    }
</style>