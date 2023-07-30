<script setup>
	import html2pdf from 'html2pdf.js';
	import HeaderView from './components/HeaderView.vue';
	import TableView from './components/TableView.vue';
	import FooterView from './components/FooterView.vue';
	import { onMounted } from 'vue';

	function toPdf() {
		const element = document.getElementById('element-to-pdf');
		if (screen.width > 580) {
			const opt = {
				margin: 0.5,
				filename: 'PackingList.pdf',
				image: { type: 'jpeg', quality: 0.98 },
				html2canvas: { scale: 3 },
				jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
			};

			html2pdf().from(element).set(opt).save();
		} else {
			const opt = {
				margin: 0.75,
				filename: 'PackingList.pdf',
				image: { type: 'jpeg', quality: 0.98 },
				html2canvas: { scale: 3 },
				jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
			};

			html2pdf().from(element).set(opt).save();
		}
	}
	function resetForm() {
		location.reload();
	}
	onMounted(() => {
		const formTable = document.getElementById('packing-list-form');
		formTable.reset();
	});
</script>

<template>
	<div id="element-to-pdf">
		<HeaderView />
		<TableView />
		<FooterView />
	</div>

	<div class="buttons">
		<button
			class="bg-red-500 text-white font-semibold rounded btn-reset hover:bg-red-600"
			@click="resetForm()"
		>
			Limpiar Formulario
		</button>
		<button
			class="bg-sky-600 text-white font-semibold rounded btn-pdf hover:bg-sky-700"
			@click="toPdf()"
		>
			Guardar PDF
		</button>
	</div>
</template>

<style>
	.buttons {
		margin: 64px 0;
	}
	.btn-reset,
	.btn-pdf {
		padding: 16px 40px;
		margin-right: 16px;
		font-size: 18px;
	}
	@media (max-width: 580px) {
		.buttons {
			margin: 40px 0;
		}
		.btn-reset,
		.btn-pdf {
			padding: 12px 30px;
			margin-right: 16px;
			font-size: 15px;
			margin-bottom: 12px;
		}
		.btn-pdf {
			margin-bottom: 0;
		}
	}
</style>
