<script setup>
	import { computed } from 'vue';

	const props = defineProps(['packingListNumber']);

	const currentDate = computed(() => {
		return new Date().toISOString().split('T')[0];
	});
</script>

<template>
	<header class="container flex items-center justify-between mt-2 mb-5">
		<img src="/logoMC.png" />
		<div class="m-auto">
			<h1 class="text-center font-semibold">PACKING LIST</h1>
			<p class="text-center">Packing List Nº: 000{{ packingListNumber }}</p>
		</div>
		<div class="flex flex-col -mr-4">
			<p class="mb-1">Fecha:</p>
			<input type="date" v-model="currentDate" class="w-32 h-8" />
		</div>
	</header>
</template>

<style scoped>
	img {
		width: 100px;
		height: 80px;
	}
	h1 {
		font-size: 24px;
		line-height: 32px;
	}
	@media (max-width: 580px) {
		input[type='date']::-webkit-calendar-picker-indicator {
			-webkit-appearance: none;
			display: none;
			margin: 0;
		}
		img {
			width: 80px;
			height: 62px;
		}
		h1 {
			font-size: 20px;
			line-height: 26px;
		}
		input {
			width: 90px;
			height: 26px;
		}
	}
</style>
