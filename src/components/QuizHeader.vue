<script setup>
import { defineProps } from 'vue'

const { questionStatus, barPercentage } = defineProps(['questionStatus', 'barPercentage'])
</script>

<template>
	<header>
		<h4>Pregunta {{ questionStatus }}</h4> 
		<div class="bar">
			<div class="completion" :style="{ width: barPercentage }"></div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	margin-top: 20px;

	h4 {
	font-size: 30px;
	}
}

.bar {
	width: 300px;
	height: 30px;
	border: 3px solid bisque;
}

.completion {
	height: 100%;
	width: 0%;
	background-color: bisque;
}
</style>
