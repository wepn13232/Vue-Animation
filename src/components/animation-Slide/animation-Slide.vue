<template>
	<div class="animationSlide" id="animationSlide">
		<slot name="pageContent"></slot>
	</div>
</template>

<script>
	export default {
		name: "animation-Slide",
		/*
		* duration 持续时间 默认1000
		* delay 动画延迟执行时间
		* direction 动画进入方向 默认上至下
		* */
		props: ['duration', 'delay', 'direction'],
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
			},
			//改变slideIn方向
			changeDirection() {
				//默认上至下
				switch (this.direction) {
					case 'top':
						break;
					case 'bottom':
						this.dom.style.transform = 'translateY(50%)';
						break;
					case 'left':
						this.dom.style.transform = 'translateX(-50%)';
						break;
					case 'right':
						this.dom.style.transform = 'translateX(50%)';
						break;
					default:
						break;
				}
			}
		},
		mounted() {
			this.dom = document.getElementById('animationSlide');
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
			//执行方向
			try {
				if (this.direction) {
					this.changeDirection();
				}
			} catch (e) {
				console.log(e)
			}
			//清空
			this.dom = "";
		}
	}
</script>

<style scoped lang="scss">
	@import "./animation-Slide";
</style>
