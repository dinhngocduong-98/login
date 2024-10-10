<template>
	<div id="app">
		<button v-if="!isShowForm"
			@click="handleStart"
		>Start
		</button>
		<comp-title-vue
			v-bind:isSubmit="isSubmit"
			:timeStart ="timeStart"
			:timeEnd="timeEnd"
			:totalScore="totalScore"
		/>
		<div v-if="isShowForm">
			<comp-question v-for="(question, index) in listQuestion"
				v-bind:key="question.id"
				v-bind:question="question"
				v-bind:index="index"
				v-on:handleChecked="handleChecked"
				v-on:handleCheckedChil="handleCheckedChil"
				:isSubmit="isSubmit"
				v-on:handleSubmitQuestion="handleSubmitQuestion"
				:listIdLong ="listIdLong"
			/>
		</div>
		<button v-if="isShowForm && !isSubmit" @click="handleSubmit">Nộp câu trả lời</button>
		<button v-if="isShowForm && isSubmit" @click="handleNew">Thi mới</button>
	</div>
</template>

<script>
import question from '../mocks/data/question'
import CompQuestion from './components/CompQuestion.vue'
import CompTitleVue from './components/CompTitle.vue'
import questionLong from '../mocks/data/questionLong3'

export default {
	name: 'app',
	data () {
		return {
			isShowForm: false,
			listQuestion: [],
			isSubmit: false,
			listIdLong: [],
			timeStart: "",
			timeEnd: "",
			totalScore : 0
		}
	},
	created() {
		const listLong = this.shuffle(questionLong).slice(0, 4);
		let number = 0;
		listLong.forEach(question => {
			number = number + question.total;
		});
		const list = this.shuffle(question).slice(0, 100 - number);
		this.listQuestion = [...list, ...listLong]
		this.listIdLong = listLong.map(question => question.id);
	},
	components: {
		CompQuestion,
		CompTitleVue
	},
	methods: {
		shuffle(array) {
  			for (let i = array.length - 1; i > 0; i--) {
    			const j = Math.floor(Math.random() * (i + 1));
    			[array[i], array[j]] = [array[j], array[i]];
  			}
  			return array;
		},
		handleSubmit() {
			this.isSubmit = true;
			this.timeEnd = this.getCurrentTimeString();
		},
		handleSubmitQuestion(correctAnswersCount) {
			this.totalScore += correctAnswersCount;
		},
		handleChecked(index, value) {
			this.listQuestion[index].selectedAnswer = value;
		},
		handleCheckedChil(index, value) {
			this.listQuestion[index].items.forEach((questionChil, i) => {
				questionChil.selectedAnswer = value[i];
			});
		},
		handleStart() {
			this.isShowForm = true;
			this.timeStart = this.getCurrentTimeString();
		},
		handleResetData() {		
			this.listQuestion.forEach(question => {
					if (question.question){
						question.selectedAnswer = null;
					} else {
						question.items.forEach(questionChil => {
							questionChil.selectedAnswer = null;
						});
					}				
			});	
			this.isShowForm = false;
			this.timeStart = "";
			this.isSubmit = false;
			this.timeEnd = "";
			this.totalScore = 0;
			const listLong = this.shuffle(questionLong).slice(0, 4);
			let number = 0;
			listLong.forEach(question => {
				number = number + question.total;
			});
			const list = this.shuffle(question).slice(0, 100 - number);
			this.listQuestion = [...list, ...listLong]
			this.listIdLong = listLong.map(question => question.id);	
		},
		getCurrentTimeString() {
			const now = new Date();
			const year = now.getFullYear();
			const month = String(now.getMonth() + 1).padStart(2, '0');
			const day = String(now.getDate()).padStart(2, '0');
			
			const hours = String(now.getHours()).padStart(2, '0');
			const minutes = String(now.getMinutes()).padStart(2, '0');
			const seconds = String(now.getSeconds()).padStart(2, '0');
			
			return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
		},
		handleNew() {
			this.handleResetData();
			this.handleStart();
		}
	}
}
</script>

<style>
	
</style>
