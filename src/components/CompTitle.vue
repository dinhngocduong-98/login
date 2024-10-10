<template>
    <div>
        <div v-if="isSubmit">
            <h2>Chi tiết bài làm</h2>
            <h4>Bài thi : TIENG ANG KY THUAT</h4>
            <h4>Thời gian làm bài : {{ timeStart }}</h4>
            <h4>Thời gian kết thúc : {{ timeEnd }}</h4>
            <h4>Điểm thi : {{ totalScore }} / 100</h4>
            <h4 v-if="totalScore >= 80">Kết quả: Pass</h4>
            <h4 v-else>Kết quả: Fail</h4>
        </div>
    </div> 
</template>

<script>
export default {
    name: "comp-title",
    props: {
        isSubmit: {
            type: Boolean,
            default: false
        },
        timeStart: {
            type: String,
            default: ""
        },
        timeEnd: {
            type: String,
            default: ""
        },
        totalScore: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>