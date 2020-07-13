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
		* duration 动画持续时间（ms）
		* delay 动画延迟执行时间（ms）
		* */
		props: ['duration', 'delay'],
		data() {
			return {
				dom: ""
			}
		},
		methods: {
			//改变持续时间
			changeDuration() {
				this.dom.style.animationDuration = this.duration + 'ms';
			},
			//改变延迟时间
			changeDelay() {
				this.dom.style.animationDelay = this.delay + 'ms';
			}
		},
		mounted() {
			this.dom = document.getElementById('animationFade')
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
			//	清空
			this.dom = "";
		}
	}
</script>

<style scoped lang="scss">
	@import "./animation-Fade";
</style>
