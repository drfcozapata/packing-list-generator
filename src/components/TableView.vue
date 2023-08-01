<script setup>
	import { ref } from 'vue';

	let quantity1 = ref(),
		quantity2 = ref(),
		quantity3 = ref(),
		quantity4 = ref(),
		quantity5 = ref(),
		quantity6 = ref(),
		quantity7 = ref(),
		quantity8 = ref(),
		quantity9 = ref(),
		quantity10 = ref(),
		quantity11 = ref(),
		quantity12 = ref(),
		quantity13 = ref(),
		quantity14 = ref(),
		price1 = ref(),
		price2 = ref(),
		price3 = ref(),
		price4 = ref(),
		price5 = ref(),
		price6 = ref(),
		price7 = ref(),
		price8 = ref(),
		price9 = ref(),
		price10 = ref(),
		price11 = ref(),
		price12 = ref(),
		price13 = ref(),
		price14 = ref();

	function totalPrice(quantity, price) {
		return parseFloat(quantity) * parseFloat(price);
	}
	function sumQuantities() {
		if (
			quantity1.value !== undefined &&
			quantity2.value === undefined &&
			quantity3.value === undefined &&
			quantity4.value === undefined &&
			quantity5.value === undefined &&
			quantity6.value === undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return parseInt(quantity1.value);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value === undefined &&
			quantity4.value === undefined &&
			quantity5.value === undefined &&
			quantity6.value === undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return parseInt(quantity1.value) + parseInt(quantity2.value);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value === undefined &&
			quantity5.value === undefined &&
			quantity6.value === undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) + parseInt(quantity2.value) + parseInt(quantity3.value)
			);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value !== undefined &&
			quantity5.value === undefined &&
			quantity6.value === undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) +
				parseInt(quantity2.value) +
				parseInt(quantity3.value) +
				parseInt(quantity4.value)
			);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value !== undefined &&
			quantity5.value !== undefined &&
			quantity6.value === undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) +
				parseInt(quantity2.value) +
				parseInt(quantity3.value) +
				parseInt(quantity4.value) +
				parseInt(quantity5.value)
			);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value !== undefined &&
			quantity5.value !== undefined &&
			quantity6.value !== undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) +
				parseInt(quantity2.value) +
				parseInt(quantity3.value) +
				parseInt(quantity4.value) +
				parseInt(quantity5.value) +
				parseInt(quantity6.value)
			);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value !== undefined &&
			quantity5.value !== undefined &&
			quantity6.value !== undefined &&
			quantity7.value !== undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) +
				parseInt(quantity2.value) +
				parseInt(quantity3.value) +
				parseInt(quantity4.value) +
				parseInt(quantity5.value) +
				parseInt(quantity6.value) +
				parseInt(quantity7.value)
			);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value !== undefined &&
			quantity5.value !== undefined &&
			quantity6.value !== undefined &&
			quantity7.value !== undefined &&
			quantity8.value !== undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) +
				parseInt(quantity2.value) +
				parseInt(quantity3.value) +
				parseInt(quantity4.value) +
				parseInt(quantity5.value) +
				parseInt(quantity6.value) +
				parseInt(quantity7.value) +
				parseInt(quantity8.value)
			);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value !== undefined &&
			quantity5.value !== undefined &&
			quantity6.value !== undefined &&
			quantity7.value !== undefined &&
			quantity8.value !== undefined &&
			quantity9.value !== undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) +
				parseInt(quantity2.value) +
				parseInt(quantity3.value) +
				parseInt(quantity4.value) +
				parseInt(quantity5.value) +
				parseInt(quantity6.value) +
				parseInt(quantity7.value) +
				parseInt(quantity8.value) +
				parseInt(quantity9.value)
			);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value !== undefined &&
			quantity5.value !== undefined &&
			quantity6.value !== undefined &&
			quantity7.value !== undefined &&
			quantity8.value !== undefined &&
			quantity9.value !== undefined &&
			quantity10.value !== undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
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
				parseInt(quantity10.value)
			);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value !== undefined &&
			quantity5.value !== undefined &&
			quantity6.value !== undefined &&
			quantity7.value !== undefined &&
			quantity8.value !== undefined &&
			quantity9.value !== undefined &&
			quantity10.value !== undefined &&
			quantity11.value !== undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
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
				parseInt(quantity11.value)
			);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value !== undefined &&
			quantity5.value !== undefined &&
			quantity6.value !== undefined &&
			quantity7.value !== undefined &&
			quantity8.value !== undefined &&
			quantity9.value !== undefined &&
			quantity10.value !== undefined &&
			quantity11.value !== undefined &&
			quantity12.value !== undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
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
				parseInt(quantity12.value)
			);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value !== undefined &&
			quantity5.value !== undefined &&
			quantity6.value !== undefined &&
			quantity7.value !== undefined &&
			quantity8.value !== undefined &&
			quantity9.value !== undefined &&
			quantity10.value !== undefined &&
			quantity11.value !== undefined &&
			quantity12.value !== undefined &&
			quantity13.value !== undefined &&
			quantity14.value === undefined
		) {
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
				parseInt(quantity13.value)
			);
		}
		if (
			quantity1.value !== undefined &&
			quantity2.value !== undefined &&
			quantity3.value !== undefined &&
			quantity4.value !== undefined &&
			quantity5.value !== undefined &&
			quantity6.value !== undefined &&
			quantity7.value !== undefined &&
			quantity8.value !== undefined &&
			quantity9.value !== undefined &&
			quantity10.value !== undefined &&
			quantity11.value !== undefined &&
			quantity12.value !== undefined &&
			quantity13.value !== undefined &&
			quantity14.value !== undefined
		) {
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
	}
	function sumPrices() {
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value === undefined &&
			quantity3.value === undefined &&
			quantity4.value === undefined &&
			quantity5.value === undefined &&
			quantity6.value === undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (parseInt(quantity1.value) * parseFloat(price1.value)).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value === undefined &&
			quantity4.value === undefined &&
			quantity5.value === undefined &&
			quantity6.value === undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) * parseFloat(price1.value) +
				parseInt(quantity2.value) * parseFloat(price2.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value === undefined &&
			quantity5.value === undefined &&
			quantity6.value === undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) * parseFloat(price1.value) +
				parseInt(quantity2.value) * parseFloat(price2.value) +
				parseInt(quantity3.value) * parseFloat(price3.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value !== undefined &&
			price4.value !== undefined &&
			quantity5.value === undefined &&
			quantity6.value === undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) * parseFloat(price1.value) +
				parseInt(quantity2.value) * parseFloat(price2.value) +
				parseInt(quantity3.value) * parseFloat(price3.value) +
				parseInt(quantity4.value) * parseFloat(price4.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value !== undefined &&
			price4.value !== undefined &&
			quantity5.value !== undefined &&
			price5.value !== undefined &&
			quantity6.value === undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) * parseFloat(price1.value) +
				parseInt(quantity2.value) * parseFloat(price2.value) +
				parseInt(quantity3.value) * parseFloat(price3.value) +
				parseInt(quantity4.value) * parseFloat(price4.value) +
				parseInt(quantity5.value) * parseFloat(price5.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value !== undefined &&
			price4.value !== undefined &&
			quantity5.value !== undefined &&
			price5.value !== undefined &&
			quantity6.value !== undefined &&
			price6.value !== undefined &&
			quantity7.value === undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) * parseFloat(price1.value) +
				parseInt(quantity2.value) * parseFloat(price2.value) +
				parseInt(quantity3.value) * parseFloat(price3.value) +
				parseInt(quantity4.value) * parseFloat(price4.value) +
				parseInt(quantity5.value) * parseFloat(price5.value) +
				parseInt(quantity6.value) * parseFloat(price6.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value !== undefined &&
			price4.value !== undefined &&
			quantity5.value !== undefined &&
			price5.value !== undefined &&
			quantity6.value !== undefined &&
			price6.value !== undefined &&
			quantity7.value !== undefined &&
			price7.value !== undefined &&
			quantity8.value === undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) * parseFloat(price1.value) +
				parseInt(quantity2.value) * parseFloat(price2.value) +
				parseInt(quantity3.value) * parseFloat(price3.value) +
				parseInt(quantity4.value) * parseFloat(price4.value) +
				parseInt(quantity5.value) * parseFloat(price5.value) +
				parseInt(quantity6.value) * parseFloat(price6.value) +
				parseInt(quantity7.value) * parseFloat(price7.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value !== undefined &&
			price4.value !== undefined &&
			quantity5.value !== undefined &&
			price5.value !== undefined &&
			quantity6.value !== undefined &&
			price6.value !== undefined &&
			quantity7.value !== undefined &&
			price7.value !== undefined &&
			quantity8.value !== undefined &&
			price8.value !== undefined &&
			quantity9.value === undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) * parseFloat(price1.value) +
				parseInt(quantity2.value) * parseFloat(price2.value) +
				parseInt(quantity3.value) * parseFloat(price3.value) +
				parseInt(quantity4.value) * parseFloat(price4.value) +
				parseInt(quantity5.value) * parseFloat(price5.value) +
				parseInt(quantity6.value) * parseFloat(price6.value) +
				parseInt(quantity7.value) * parseFloat(price7.value) +
				parseInt(quantity8.value) * parseFloat(price8.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value !== undefined &&
			price4.value !== undefined &&
			quantity5.value !== undefined &&
			price5.value !== undefined &&
			quantity6.value !== undefined &&
			price6.value !== undefined &&
			quantity7.value !== undefined &&
			price7.value !== undefined &&
			quantity8.value !== undefined &&
			price8.value !== undefined &&
			quantity9.value !== undefined &&
			price9.value !== undefined &&
			quantity10.value === undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
			return (
				parseInt(quantity1.value) * parseFloat(price1.value) +
				parseInt(quantity2.value) * parseFloat(price2.value) +
				parseInt(quantity3.value) * parseFloat(price3.value) +
				parseInt(quantity4.value) * parseFloat(price4.value) +
				parseInt(quantity5.value) * parseFloat(price5.value) +
				parseInt(quantity6.value) * parseFloat(price6.value) +
				parseInt(quantity7.value) * parseFloat(price7.value) +
				parseInt(quantity8.value) * parseFloat(price8.value) +
				parseInt(quantity9.value) * parseFloat(price9.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value !== undefined &&
			price4.value !== undefined &&
			quantity5.value !== undefined &&
			price5.value !== undefined &&
			quantity6.value !== undefined &&
			price6.value !== undefined &&
			quantity7.value !== undefined &&
			price7.value !== undefined &&
			quantity8.value !== undefined &&
			price8.value !== undefined &&
			quantity9.value !== undefined &&
			price9.value !== undefined &&
			quantity10.value !== undefined &&
			price10.value !== undefined &&
			quantity11.value === undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
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
				parseInt(quantity10.value) * parseFloat(price10.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value !== undefined &&
			price4.value !== undefined &&
			quantity5.value !== undefined &&
			price5.value !== undefined &&
			quantity6.value !== undefined &&
			price6.value !== undefined &&
			quantity7.value !== undefined &&
			price7.value !== undefined &&
			quantity8.value !== undefined &&
			price8.value !== undefined &&
			quantity9.value !== undefined &&
			price9.value !== undefined &&
			quantity10.value !== undefined &&
			price10.value !== undefined &&
			quantity11.value !== undefined &&
			price11.value !== undefined &&
			quantity12.value === undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
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
				parseInt(quantity11.value) * parseFloat(price11.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value !== undefined &&
			price4.value !== undefined &&
			quantity5.value !== undefined &&
			price5.value !== undefined &&
			quantity6.value !== undefined &&
			price6.value !== undefined &&
			quantity7.value !== undefined &&
			price7.value !== undefined &&
			quantity8.value !== undefined &&
			price8.value !== undefined &&
			quantity9.value !== undefined &&
			price9.value !== undefined &&
			quantity10.value !== undefined &&
			price10.value !== undefined &&
			quantity11.value !== undefined &&
			price11.value !== undefined &&
			quantity12.value !== undefined &&
			price12.value !== undefined &&
			quantity13.value === undefined &&
			quantity14.value === undefined
		) {
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
				parseInt(quantity12.value) * parseFloat(price12.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value !== undefined &&
			price4.value !== undefined &&
			quantity5.value !== undefined &&
			price5.value !== undefined &&
			quantity6.value !== undefined &&
			price6.value !== undefined &&
			quantity7.value !== undefined &&
			price7.value !== undefined &&
			quantity8.value !== undefined &&
			price8.value !== undefined &&
			quantity9.value !== undefined &&
			price9.value !== undefined &&
			quantity10.value !== undefined &&
			price10.value !== undefined &&
			quantity11.value !== undefined &&
			price11.value !== undefined &&
			quantity12.value !== undefined &&
			price12.value !== undefined &&
			quantity13.value !== undefined &&
			price13.value !== undefined &&
			quantity14.value === undefined
		) {
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
				parseInt(quantity13.value) * parseFloat(price13.value)
			).toFixed(2);
		}
		if (
			quantity1.value !== undefined &&
			price1.value !== undefined &&
			quantity2.value !== undefined &&
			price2.value !== undefined &&
			quantity3.value !== undefined &&
			price3.value !== undefined &&
			quantity4.value !== undefined &&
			price4.value !== undefined &&
			quantity5.value !== undefined &&
			price5.value !== undefined &&
			quantity6.value !== undefined &&
			price6.value !== undefined &&
			quantity7.value !== undefined &&
			price7.value !== undefined &&
			quantity8.value !== undefined &&
			price8.value !== undefined &&
			quantity9.value !== undefined &&
			price9.value !== undefined &&
			quantity10.value !== undefined &&
			price10.value !== undefined &&
			quantity11.value !== undefined &&
			price11.value !== undefined &&
			quantity12.value !== undefined &&
			price12.value !== undefined &&
			quantity13.value !== undefined &&
			price13.value !== undefined &&
			quantity14.value !== undefined &&
			price14.value !== undefined
		) {
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
			).toFixed(2);
		}
	}
</script>

<template>
	<form id="packing-list-form">
		<table class="w-full table-fixed">
			<thead class="bg-slate-700 text-white font-semibold">
				<tr>
					<td
						class="w-[15%] text-center align-middle px-3 -pt-3 pb-3 border-t-[1px] border-b-[1px] border-l-[1px] align-top"
					>
						Cantidad
					</td>
					<td
						class="w-[55%] text-center align-middle px-3 -pt-3 pb-3 border-t-[1px] border-b-[1px] border-l-[1px] align-top"
					>
						Descripción
					</td>
					<td
						class="w-[15%] text-center align-middle px-3 -pt-3 pb-3 border-t-[1px] border-b-[1px] border-l-[1px] align-top"
					>
						Precio Un ($)
					</td>
					<td class="w-[15%] text-center align-middle px-3 -pt-3 pb-3 border align-top">
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
							class="w-full px-2 pb-1 text-center leading-6"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-1 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price1"
							class="w-full px-3 pb-1 text-right leading-6"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p
							v-if="quantity1 === undefined || price1 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity1, price1).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							v-model="quantity2"
							class="w-full px-2 pb-1 text-center leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input type="text" class="w-full px-3 pb-1 bg-gray-100 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							step="any"
							v-model="price2"
							class="w-full px-3 pb-1 text-right leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px] bg-gray-100">
						<p
							v-if="quantity2 === undefined || price2 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity2, price2).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity3"
							class="w-full px-2 pb-1 text-center leading-6"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-1 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price3"
							class="w-full px-3 pb-1 text-right leading-6"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p
							v-if="quantity3 === undefined || price3 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity3, price3).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							v-model="quantity4"
							class="w-full px-2 pb-1 text-center leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input type="text" class="w-full px-3 pb-1 bg-gray-100 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							step="any"
							v-model="price4"
							class="w-full px-3 pb-1 text-right leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px] bg-gray-100">
						<p
							v-if="quantity4 === undefined || price4 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity4, price4).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity5"
							class="w-full px-2 pb-1 text-center leading-6"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-1 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price5"
							class="w-full px-3 pb-1 text-right leading-6"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p
							v-if="quantity5 === undefined || price5 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity5, price5).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							v-model="quantity6"
							class="w-full px-2 pb-1 text-center leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input type="text" class="w-full px-3 pb-1 bg-gray-100 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							step="any"
							v-model="price6"
							class="w-full px-3 pb-1 text-right leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px] bg-gray-100">
						<p
							v-if="quantity6 === undefined || price6 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity6, price6).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity7"
							class="w-full px-2 pb-1 text-center leading-6"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-1 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price7"
							class="w-full px-3 pb-1 text-right leading-6"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p
							v-if="quantity7 === undefined || price7 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity7, price7).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							v-model="quantity8"
							class="w-full px-2 pb-1 text-center leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input type="text" class="w-full px-3 pb-1 bg-gray-100 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							step="any"
							v-model="price8"
							class="w-full px-3 pb-1 text-right leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px] bg-gray-100">
						<p
							v-if="quantity8 === undefined || price8 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity8, price8).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity9"
							class="w-full px-2 pb-1 text-center leading-6"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-1 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price9"
							class="w-full px-3 pb-1 text-right leading-6"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p
							v-if="quantity9 === undefined || price9 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity9, price9).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							v-model="quantity10"
							class="w-full px-2 pb-1 text-center leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input type="text" class="w-full px-3 pb-1 bg-gray-100 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							step="any"
							v-model="price10"
							class="w-full px-3 pb-1 text-right leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px] bg-gray-100">
						<p
							v-if="quantity10 === undefined || price10 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity10, price10).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity11"
							class="w-full px-2 pb-1 text-center leading-6"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-1 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price11"
							class="w-full px-3 pb-1 text-right leading-6"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p
							v-if="quantity11 === undefined || price11 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity11, price11).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							v-model="quantity12"
							class="w-full px-2 pb-1 text-center leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input type="text" class="w-full px-3 pb-1 bg-gray-100 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							step="any"
							v-model="price12"
							class="w-full px-3 pb-1 text-right leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px] bg-gray-100">
						<p
							v-if="quantity12 === undefined || price12 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity12, price12).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							v-model="quantity13"
							class="w-full px-2 pb-1 text-center leading-6"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px]">
						<input type="text" class="w-full px-3 pb-1 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px]">
						<input
							type="number"
							step="any"
							v-model="price13"
							class="w-full px-3 pb-1 text-right leading-6"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px]">
						<p
							v-if="quantity13 === undefined || price13 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity13, price13).toFixed(2) }}
						</p>
					</td>
				</tr>
				<tr class="w-full">
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							v-model="quantity14"
							class="w-full px-2 pb-1 text-center leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[55%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input type="text" class="w-full px-3 pb-1 bg-gray-100 leading-6" />
					</td>
					<td class="w-[15%] border-b-[1px] border-l-[1px] bg-gray-100">
						<input
							type="number"
							step="any"
							v-model="price14"
							class="w-full px-3 pb-1 text-right leading-6 bg-gray-100"
						/>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px] bg-gray-100">
						<p
							v-if="quantity14 === undefined || price14 === undefined"
							class="text-right pr-5 pb-3"
						></p>
						<p v-else class="text-right pr-5 pb-3">
							{{ totalPrice(quantity14, price14).toFixed(2) }}
						</p>
					</td>
				</tr>
				<!-- Totalization file -->
				<tr class="w-full">
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px] bg-gray-300">
						<p
							v-if="sumQuantities() === undefined"
							class="text-center font-semibold pb-[10px]"
						></p>
						<p v-else class="text-center font-semibold pb-[10px]">
							{{ sumQuantities() }}
						</p>
					</td>
					<td class="w-[55%]">
						<p class="text-center font-semibold pb-2">TOTAL</p>
					</td>
					<td class="w-[15%]">
						<p></p>
					</td>
					<td class="w-[15%] border-l-[1px] border-b-[1px] border-r-[1px] bg-gray-300">
						<p
							v-if="
								sumPrices() === undefined || sumPrices() === null || sumPrices() === NaN
							"
							class="text-right font-semibold pr-5 pb-2"
						></p>
						<p class="text-right font-semibold pr-5 pb-2">
							{{ sumPrices() }}
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
	td,
	input {
		max-height: 28px;
	}
</style>
