<script setup>
	import html2pdf from 'html2pdf.js';
	import HeaderView from './components/HeaderView.vue';
	import TableView from './components/TableView.vue';
	import FooterView from './components/FooterView.vue';
	import { computed, reactive, ref } from 'vue';

	let pagesQty = reactive([1]);
	let tabs = reactive({
		page1: 'page1',
	});
	const activeTabName = ref('page1');
	const currentTab = ref('page1');
	const isToPdf = ref(false);
	const id = ref('');
	let nameField = ref('');
	let cedulaField = ref('');

	const props = defineProps({
		pdfOptions: {
			margin: 25,
			image: {
				type: 'jpeg',
				quality: 2,
			},
			html2canvas: { scale: 3 },
			jsPDF: {
				unit: 'mm',
				format: 'a4',
				orientation: 'p',
			},
		},
		exportFilename: 'PackingList.pdf',
	});

	const packingListNumber = computed(() => {
		return Math.floor(Math.random() * 1000000);
	});

	const AddNewPage = () => {
		let confirmMsg = confirm('¿Deseas agregar otra página al Packing List?');

		if (confirmMsg) {
			pagesQty.push(pagesQty.length + 1);
			tabs[`page${pagesQty.length}`] = `page${pagesQty.length}`;
		} else {
			return;
		}
	};

	const handleTabClick = pageName => {
		activeTabName.value = pageName;
		currentTab.value = tabs[pageName];
	};

	const pdf = ref(true);
	const openInNewTab = () => {
		isToPdf.value = true;
		pdf.value.openInNewTab();

		setTimeout(() => {
			isToPdf.value = false;
		}, 2000);
	};

	function resetForm() {
		location.reload();
	}
</script>

<template>
	<!-- TABS -->
	<ul class="flex justify-start">
		<li
			v-for="page in pagesQty"
			class="flex h-8 text-black font-normal border border-slate-600 border-b-0 rounded-t-xl justify-center items-center bg-white hover:bg-slate-200 cursor-pointer named-tab"
			:class="{ 'tab-active': activeTabName === `page${page}` }"
			:id="`tab${page}`"
			@click.prevent="handleTabClick(`page${page}`)"
		>
			Hoja {{ page }}
		</li>
		<li
			class="flex justify-center items-center h-8 w-12 border border-slate-600 border-b-0 rounded-t-xl text-xl font-bold hover:cursor-pointer bg-white hover:bg-slate-200"
			@click="AddNewPage()"
		>
			+
		</li>
	</ul>

	<!-- MAIN -->
	<main class="bg-white px-4 py-3 border border-slate-600 rounded-b-xl rounded-r-xl">
		<v-pdf ref="pdf" :options="pdfOptions" :filename="exportFilename">
			<div v-for="page in pagesQty" :id="`page${page}`">
				<div
					:class="{
						hidden: isToPdf === false && currentTab !== `page${page}`,
						block: isToPdf === true && currentTab !== `page${page}`,
					}"
				>
					<HeaderView :packingListNumber="packingListNumber" />
					<TableView />
					<FooterView
						:page="page"
						:pagesQty="pagesQty"
						:nameField="nameField"
						:cedulaField="cedulaField"
					/>
					<div class="html2pdf__page-break mb-2"></div>
				</div>
			</div>
		</v-pdf>
	</main>

	<!-- INPUTS -->
	<div class="mt-5">
		<p class="ml-1 mb-1 text-inputs">
			Por favor, introduzca en los campos siguientes su <i>Nombre Completo</i> y número de
			<i>Cédula de Identidad</i>:
		</p>
		<input
			type="text"
			class="h-9 text-center border border-slate-600 rounded-xl nameField mr-4"
			placeholder="Nombres y Apellidos (completos)"
			v-model.trim="nameField"
		/>
		<input
			type="number"
			class="h-9 text-center border border-slate-600 rounded-xl cedulaField"
			placeholder="Cédula de Id"
			v-model="cedulaField"
		/>
	</div>

	<!-- BUTTONS -->
	<div class="buttons">
		<button
			class="bg-red-500 text-white font-semibold rounded-lg btn-reset hover:bg-red-600"
			@click="resetForm()"
		>
			Limpiar Formulario
		</button>
		<button
			class="bg-sky-600 text-white font-semibold rounded-lg btn-pdf hover:bg-sky-700"
			@click="openInNewTab()"
		>
			Guardar PDF
		</button>
	</div>
</template>

<style>
	.named-tab {
		width: 112px;
	}
	.tab-active {
		background-color: rgb(2 132 199) !important;
		color: white;
		font-weight: 600;
	}
	.tab-active:hover {
		background-color: rgb(3 105 161) !important;
	}
	.text-inputs {
		font-weight: 500;
	}
	.nameField {
		width: 270px;
	}
	.cedulaField {
		width: 150px;
	}
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	.buttons {
		margin: 40px 0 64px 0;
	}
	.btn-reset,
	.btn-pdf {
		padding: 16px 40px;
		margin-right: 16px;
		font-size: 18px;
	}
	@media (max-width: 580px) {
		main {
			padding: 0 6px;
		}
		.named-tab {
			width: 80px;
		}
		.text-inputs {
			color: white;
			font-weight: 600;
		}
		.nameField {
			width: 200px;
		}
		.cedulaField {
			width: 90px;
		}
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
