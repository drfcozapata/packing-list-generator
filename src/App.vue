<script setup>
	import html2pdf from 'html2pdf.js';
	import HeaderView from './components/HeaderView.vue';
	import TableView from './components/TableView.vue';
	import FooterView from './components/FooterView.vue';

	function toPdf() {
		const element = document.getElementById('element-to-pdf');
		const opt = {
			margin: 0.5,
			filename: 'PackingList.pdf',
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 3 },
			jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
		};

		html2pdf().from(element).set(opt).save();
	}
</script>

<template>
	<div id="element-to-pdf">
		<HeaderView />
		<TableView />
		<FooterView />
	</div>

	<div class="mt-16 mb-16">
		<button
			class="bg-red-500 text-white font-semibold px-10 py-4 rounded text-lg mr-4 hover:bg-red-600"
			@click="reset"
		>
			Limpiar Formulario
		</button>
		<button
			class="bg-sky-600 text-white font-semibold px-10 py-4 rounded text-lg hover:bg-sky-700"
			@click="toPdf()"
		>
			GUARDAR PDF
		</button>
	</div>
</template>
