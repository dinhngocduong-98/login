<template>
    <div>
        <div v-if="isSubmit">
            <h2>Chi tiết bài làm</h2>
            <h4>Bài thi</h4>
            <h4>Thời gian làm bài</h4>
            <h4>Thời gian kết thúc</h4>
            <h4>Điểm thi</h4>
            <h4>Kết quả</h4>
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