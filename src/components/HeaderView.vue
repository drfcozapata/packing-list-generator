<template>
	<header class="container flex items-center justify-between mb-5">
		<img src="/logoMC.png" />
		<div class="m-auto">
			<h1 class="text-center font-semibold">PACKING LIST</h1>
		</div>
		<div class="flex flex-col">
			<p class="mb-1">Fecha:</p>
			<input type="date" class="w-32 h-8" />
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
		img {
			width: 80px;
			height: 60px;
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
