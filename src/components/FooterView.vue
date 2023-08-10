<script setup>
	const props = defineProps(['page', 'pagesQty', 'nameField', 'cedulaField']);
	// defineEmits(['update:nameField', 'update:cedulaField'])
	{
	}
</script>

<template>
	<footer class="text-justify mt-3 mb-2">
		<p class="mb-[6px] align-center">
			Por medio de la presente, Yo,
			<span class="font-semibold">{{ nameField }}</span
			>, titular de la cédula de identidad Nº
			<span class="font-semibold">{{ cedulaField }}</span
			>, certifico que los detalles de los productos incluídos en este Packing List
			(cantidades, descripción y precios de cada uno) son precisos y se corresponden con
			las facturas de compra correspondientes.
		</p>
		<p class="mb-[6px]">
			Entiendo que esta información será utilizada con fines de facturación y declaración
			aduanal en Venezuela. Reconozco y acepto que cualquier discrepancia o error en los
			precios de los productos enviados no será responsabilidad de la empresa de envío
			Miami Carga Express Corp.
		</p>
		<p class="mb-4 lastParag">
			Al firmar este Packing List confirmo que he revisado y verificado cuidadosamente los
			detalles proporcionados y asumo la responsabilidad total de la exactitud de la
			información proporcionada.
		</p>

		<div class="flex flex-col m-auto relative">
			<div class="w-[330px] h-[24px] m-auto flex justify-center items-center">
				<p class="sign font-medium">{{ nameField }}</p>
			</div>
			<div class="text-center">
				<p class="font-semibold">Firma</p>
			</div>

			<p class="pages">
				Página {{ page }} de
				{{ pagesQty.length }}
			</p>
		</div>
	</footer>
</template>

<style scoped>
	.nameField {
		width: 220px;
	}
	.cedulaField {
		width: 90px;
	}
	.sign {
		font-family: 'Sacramento', cursive;
		font-size: 24px;
		margin-bottom: 10px;
	}
	.pages {
		position: absolute;
		right: 0;
		bottom: 0;
		font-size: 10px;
	}
	.pagesField {
		width: 14px;
		line-height: 22px;
	}
	@media (max-width: 580px) {
		footer {
			margin-top: 12px;
			margin-bottom: 12px;
		}
		.nameField {
			width: 190px;
		}
		.cedulaField {
			width: 80px;
		}
		.lastParag {
			margin-bottom: 20px;
		}
		.pages {
			bottom: 2px;
		}
		.pagesField {
			padding-top: 4px;
			line-height: 18px;
		}
	}
</style>
