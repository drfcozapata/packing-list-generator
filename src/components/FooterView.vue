<script setup>
	//
</script>

<template>
	<footer class="text-justify mt-2 mb-3">
		<p class="mb-2 align-center">
			Por medio de la presente, Yo,
			<input type="text" class="text-center px-2 leading-6 nameField" />, titular de la
			cédula de identidad
			<input type="text" class="text-center px-2 leading-6 cedulaField" />, certifico que
			los detalles de los productos incluídos en este Packing List (cantidades,
			descripción y precios de cada uno) son precisos y se corresponden con las facturas
			de compra correspondientes.
		</p>
		<p class="mb-2">
			Entiendo que esta información será utilizada con fines de facturación y declaración
			aduanal en Venezuela. Reconozco y acepto que cualquier discrepancia o error en los
			precios de los productos enviados no será responsabilidad de la empresa de envío
			Miami Carga Express Corp.
		</p>
		<p class="mb-3 lastParag">
			Al firmar este Packing List confirmo que he revisado y verificado cuidadosamente los
			detalles proporcionados y asumo la responsabilidad total de la exactitud de la
			información proporcionada.
		</p>

		<div class="flex flex-col m-auto">
			<input type="text" class="w-64 h-16 border py-4 px-6 m-auto text-center" />
			<div class="text-center">
				<p class="font-semibold">Firma</p>
			</div>
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
	}
</style>
