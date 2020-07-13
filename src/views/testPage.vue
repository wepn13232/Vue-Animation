<template>
	<!--测试页面 示范使用-->
	<div class="testPage">
		<AnimationSlide delay="500" direction="left">
			<div slot="pageContent">
				<!--这里是自己的内容-->
				<div class="pageBlock"></div>
			</div>
		</AnimationSlide>
	</div>
</template>

<script>
	import AnimationSlide from "@/components/animation-Slide/animation-Slide";

	export default {
		name: "testPage",
		components: {AnimationSlide}
	}
</script>

<style scoped lang="scss">
	.testPage {
		width: 100%;
		height: 100%;
		
		.pageBlock {
			width: 400px;
			height: 400px;
			background-color: cornflowerblue;
		}
	}

</style>
