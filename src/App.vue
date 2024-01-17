<script setup>
	import {RouterView} from "vue-router"

	import Header from "./components/Header.vue"
	import Footer from "./components/Footer.vue"
</script>

<template>
	<Header />
	<div class="container">
		<RouterView />
	</div>
	<Footer />
</template>

<style scoped>
.container {
	max-width: 1000px;
	margin: 0 auto;
}</style>