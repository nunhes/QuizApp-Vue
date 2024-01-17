<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

// import VueZoomer from 'vue-zoomer'

const router = useRouter()
const { quiz } = defineProps(['quiz'])

const navigateToQuiz = () => {
	router.push(`/quiz/${quiz.id}`)
}
</script>

<template>
	<div class="card" @click="navigateToQuiz">
		<!-- /*<img :src="quiz.img" :alt="`${quiz.name} image`"/>*/ -->

		<vue-zoomer><img :src="quiz.img" :alt="`${quiz.name} image`" /></vue-zoomer>

		<div class="card-text">
			<h2>{{ quiz.name }}</h2>
			<p>{{ quiz.questions.length }} questions</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	width: 310px;
	overflow: hidden;
	border-radius: 2%;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
	margin-bottom: 35px;
	/*margin-right: 20px;*/
	cursor: pointer;
	
	img {
	width: 100%;
	height: 190px;
	margin: 0;
		transition: all 2s ease-in-out;
	}

	.card-text {
		padding: 0 0 8px 16px;

		h2 {
	font-weight: bold;
		}
	}

	:hover {
		img {
			transform: scale(2.2)
		}
	}
}</style>
