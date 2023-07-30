<script setup>
	import { ref } from 'vue';

	const quantity1 = ref(0);
	const quantity2 = ref(0);
	const quantity3 = ref(0);
	const quantity4 = ref(0);
	const quantity5 = ref(0);
	const quantity6 = ref(0);
	const quantity7 = ref(0);
	const quantity8 = ref(0);
	const quantity9 = ref(0);
	const quantity10 = ref(0);
	const quantity11 = ref(0);
	const quantity12 = ref(0);
	const quantity13 = ref(0);
	const quantity14 = ref(0);
	const price1 = ref(0);
	const price2 = ref(0);
	const price3 = ref(0);
	const price4 = ref(0);
	const price5 = ref(0);
	const price6 = ref(0);
	const price7 = ref(0);
	const price8 = ref(0);
	const price9 = ref(0);
	const price10 = ref(0);
	const price11 = ref(0);
	const price12 = ref(0);
	const price13 = ref(0);
	const price14 = ref(0);

	function sum(quantity, price) {
		return parseFloat(quantity) * parseFloat(price);
	}
	function sumQuantities() {
		return (
			parseInt(quantity1.value) +
			parseInt(quantity2.value) +
			parseInt(quantity3.value) +
			parseInt(quantity4.value) +
			parseInt(quantity5.value) +
			parseInt(quantity6.value) +
			parseInt(quantity7.value) +
			parseInt(quantity8.value) +
			parseInt(quantity9.value) +
			parseInt(quantity10.value) +
			parseInt(quantity11.value) +
			parseInt(quantity12.value) +
			parseInt(quantity13.value) +
			parseInt(quantity14.value)
		);
	}
	function sumPrices() {
		return (
			parseInt(quantity1.value) * parseFloat(price1.value) +
			parseInt(quantity2.value) * parseFloat(price2.value) +
			parseInt(quantity3.value) * parseFloat(price3.value) +
			parseInt(quantity4.value) * parseFloat(price4.value) +
			parseInt(quantity5.value) * parseFloat(price5.value) +
			parseInt(quantity6.value) * parseFloat(price6.value) +
			parseInt(quantity7.value) * parseFloat(price7.value) +
			parseInt(quantity8.value) * parseFloat(price8.value) +
			parseInt(quantity9.value) * parseFloat(price9.value) +
			parseInt(quantity10.value) * parseFloat(price10.value) +
			parseInt(quantity11.value) * parseFloat(price11.value) +
			parseInt(quantity12.value) * parseFloat(price12.value) +
			parseInt(quantity13.value) * parseFloat(price13.value) +
			parseInt(quantity14.value) * parseFloat(price14.value)
		);
	}
</script>

<template>
	<form id="packing-list-form">
		<table class="w-full table-fixed">
			<thead class="bg-slate-700 text-white font-semibold">
				<tr>
					<td
						class="w-[15%] text-center px-3 -pt-2 pb-3 border-t-[1px] border-b-[1px] border-l-[1px] align-top"
					>
						Cantidad
					</td>
					<td
						class="w-[55%] text-center px-3 -pt-2 pb-3 border-t-[1px] border-b-[1px] border-l-[1px] align-top"
					>
						Descripción
					</td>
					<td
						class="w-[15%] text-center px-3 -pt-2 pb-3 border-t-[1px] border-b-[1px] border-l-[1px] align-top"
					>
						Precio Un ($)
					</td>
					<td class="w-[15%] text-center px-3 -pt-2 pb-3 border align-top">
						Total Precio
					</td>
				</tr>
			</thead>
			<tbody>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity1"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price1"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity1, price1).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity2"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price2"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity2, price2).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity3"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price3"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity3, price3).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity4"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price4"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity4, price4).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity5"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price5"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity5, price5).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity6"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price6"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity6, price6).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity7"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price7"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity7, price7).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity8"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price8"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity8, price8).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity9"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price9"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity9, price9).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity10"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price10"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity10, price10).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity11"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price11"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity11, price11).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity12"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price12"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity12, price12).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity13"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price13"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity13, price13).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity14"
							class="w-full px-2 pb-2 text-center"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-2" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price14"
							class="w-full px-3 pb-2 text-right"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right pr-5 pb-3">
							{{ sum(quantity14, price14).toFixed(2) }}
						</p>
					</td>
				</tr>
				<!-- Totalization file -->
				<tr class="w-full">
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-center font-semibold pb-[10px]">
							{{ sumQuantities() }}
						</p>
					</td>
					<td class="w-[55%]">
						<p class="text-center font-semibold pb-2">TOTAL</p>
					</td>
					<td class="w-[15%]">
						<input type="text" name="price" class="w-full px-3 pb-2 text-right" />
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p class="text-right font-semibold pr-5 pt-1 pb-3">
							{{ sumPrices().toFixed(2) }}
						</p>
					</td>
				</tr>
			</tbody>
		</table>
	</form>
</template>

<style scoped>
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
