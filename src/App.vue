<template>
	<div id="app">
		<button v-if="!isShowForm"
			@click="handleStart"
		>Start
		</button>
		<comp-title-vue
			v-bind:isSubmit="isSubmit"
		/>
		<div v-if="isShowForm">
			<comp-question v-for="(question, index) in listQuestion"
				v-bind:key="question.id"
				v-bind:question="question"
				v-bind:index="index"
				v-on:handleChecked="handleChecked"
				v-on:handleCheckedChil="handleCheckedChil"
				:isSubmit="isSubmit"
				v-on:handleSubmit="handleSubmit"
				:listIdLong ="listIdLong"
			/>
		</div>
		<button v-if="isShowForm" @click="handleSubmit">Nộp câu trả lời</button>
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
			listIdLong: []
		}
	},
	created() {
		const list = this.shuffle(question).slice(0, 10);
		this.listQuestion = [...list, ...questionLong]
		this.listIdLong = questionLong.map(question => question.id);
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
		},
		handleResetData() {
			if (question.selectedAnswer) {
				this.listQuestion.forEach(question => {
				question.selectedAnswer = null;
				});
			} else {
				this.listQuestion.forEach(question => {
					question.items.forEach(questionChil => {
						questionChil.selectedAnswer = null;
					});
				});
			}
			
		}
	}
}
</script>

<style>
	
</style>
