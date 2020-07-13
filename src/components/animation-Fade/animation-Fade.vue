<template>
	<!--
	自封装Vue过渡动画--渐变
	-->
	<div class="animationFade" id="animationFade">
		<slot name="animationFade"></slot>
	</div>
</template>

<script>
	export default {
		name: "animation",
		/*
		* duration 动画持续时间（s）
		* delay 动画延迟执行时间（ms）
		* */
		props: ['duration', 'delay'],
		data() {
			return {}
		},
		methods: {
			//改变持续时间
			changeDuration() {
				let a = document.getElementById('animationFade');
				a.style.animationDuration = this.duration + 's';
				a = "";
			},
			//改变延迟时间
			changeDelay() {
				let a = document.getElementById('animationFade');
				a.style.animationDelay = this.delay + 'ms';
				a = "";
			}
		},
		mounted() {
			//持续时间
			try {
				if (this.duration) {
					this.changeDuration();
				}
			} catch (e) {
				console.log(e);
			}

			//延迟时间
			try {
				if (this.delay) {
					this.changeDelay();
				}
			} catch (e) {
				console.log(e)
			}

		}
	}
</script>

<style scoped>

</style>
