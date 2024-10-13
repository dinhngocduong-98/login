<template>
	<div id="app">
		<button v-if="!isShowForm"
			@click="handleStart" class="btn-start"
		>Start
		</button>
		<comp-title-vue
			v-bind:isSubmit="isSubmit"
			:timeStart ="timeStart"
			:timeEnd="timeEnd"
			:totalScore="totalScore"
		/>
		<div v-if="isShowForm" class = "question">
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
		<button v-if="isShowForm && !isSubmit" @click="handleSubmit" class = "new-test">Nộp câu trả lời</button>
		<button v-if="isShowForm && isSubmit" @click="handleNew" class = "new-test">Thi mới</button>
	</div>
</template>

<script>
import question from '../mocks/data/question'
import CompQuestion from './components/CompQuestion.vue'
import CompTitleVue from './components/CompTitle.vue'
import questionLong from '../mocks/data/questionLong3'
import questionLong4 from '../mocks/data/questionLong4'
import question1 from '../mocks/data/question1'

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
		const listLong3 = this.shuffle(questionLong).slice(0, 3);
		let number = 0;
		listLong3.forEach(question => {
			number = number + question.total;
		});
		const listLong4 = this.shuffle(questionLong4).slice(0, 3);
		listLong4.forEach(question => {
			number = number + question.total;
		});
		const listLong = [...listLong3, ...listLong4]
		const listShort = [...question, ...question1]
		const list = this.shuffle(listShort).slice(0, 100 - number);
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
			let number = 0;

			const listLong3 = this.shuffle(questionLong).slice(0, 3);
			listLong3.forEach(question => {
				number = number + question.total;
			});

			const listLong4 = this.shuffle(questionLong4).slice(0, 3);
			listLong4.forEach(question => {
				number = number + question.total;
			});

			const listLong = [...listLong3, ...listLong4]
			const listShort = [...question, ...question1]
			const list = this.shuffle(listShort).slice(0, 100 - number);

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
	body {
		display: flex;
		justify-content: center; /* Căn giữa theo chiều ngang */
		height: 100vh; /* Chiều cao 100% màn hình */
		margin: 0; /* Xóa khoảng cách mặc định */
		background-color: #f0f0f0; /* Màu nền nhẹ nhàng */
  	}
	.btn-start {
		margin-top: 200px;
		justify-content: center;
		text-align: center;
		background-color: #4CAF50; /* Màu nền xanh lá */
		color: white; /* Màu chữ trắng */
		padding: 15px 30px; /* Khoảng cách padding */
		font-size: 18px; /* Kích thước chữ */
		border: none; /* Xóa viền */
		border-radius: 8px; /* Bo góc */
		cursor: pointer; /* Con trỏ chuột hiển thị khi hover */
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Đổ bóng */
		transition: background-color 0.3s ease, box-shadow 0.3s ease; 
    }
	.btn-start:hover {
		background-color: #45a049; /* Đổi màu nền khi hover */
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Đổi độ đổ bóng khi hover */
  	}

  	.btn-start:active {
		background-color: #39843d; /* Màu nền khi nhấn giữ */
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Giảm độ đổ bóng khi nhấn giữ */
  	}
	.question {
		margin-top: 50px;
	}
	.new-test {
		margin-left: 800px;
		margin-top: 10px;
		justify-content: center;
		text-align: center;
		background-color: #4CAF50; /* Màu nền xanh lá */
		color: white; /* Màu chữ trắng */
		padding: 15px 30px; /* Khoảng cách padding */
		font-size: 18px; /* Kích thước chữ */
		border: none; /* Xóa viền */
		border-radius: 8px; /* Bo góc */
		cursor: pointer; /* Con trỏ chuột hiển thị khi hover */
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Đổ bóng */
		transition: background-color 0.3s ease, box-shadow 0.3s ease; 
	}
	.new-test:hover {
		background-color: #45a049; /* Đổi màu nền khi hover */
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Đổi độ đổ bóng khi hover */
  	}

  	.new-test:active {
		background-color: #39843d; /* Màu nền khi nhấn giữ */
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Giảm độ đổ bóng khi nhấn giữ */
  	}
</style>
