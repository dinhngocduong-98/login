<template>
	<div id="app">
		<button v-if="!isShowForm"
			@click="handleStart"
		>Start
		</button>
		<div v-if="isShowForm">
			<comp-question v-for="(question, index) in listQuestion"
				v-bind:key="question.id"
				v-bind:question="question"
				v-bind:index="index"
				v-on:handleChecked="handleChecked"
				:isSubmit="isSubmit"
				v-on:handleSubmit="handleSubmit"
			/>
		</div>
		<button v-if="isShowForm" @click="handleSubmit">Nộp câu trả lời</button>
	</div>
</template>

<script>
import question from '../mocks/data/question'
import CompQuestion from './components/CompQuestion.vue'

export default {
	name: 'app',
	data () {
		return {
			isShowForm: false,
			listQuestion: this.shuffle(question).slice(0, 10),
			isSubmit: false
		}
	},
	components: {
		CompQuestion
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
		handleStart() {
			this.isShowForm = true;
		}
	}
}
</script>

<style>
	
</style>
