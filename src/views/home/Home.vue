<template>
	<div>
		<div>商品介绍DIV</div>
		<div class="nav-title">
			<!-- <router-link to="/">商品</router-link>
			<router-link to="/evaluate">评价</router-link>
			<router-link to="/merchant">商家</router-link> -->
			<div :class="{active:active==='/'}" @click="clickActive('/')">商品</div>
			<div :class="{active:active==='/evaluate'}" @click="clickActive('/evaluate')">评价</div>
			<div :class="{active:active==='/merchant'}" @click="clickActive('/merchant')">商家</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				active:"/"
			}
		},
		methods:{
		clickActive(tilte){
				this.active=tilte
				this.$router.push(tilte)
			}
		}
	};

</script>

<style lang='less' scoped>
	.nav-title {
		display: flex;
		justify-content: space-around;
		a {
			font-size: 1.25rem;
			color: #69f;
		}
		.active{
			color:#f96
		}
/* 		.router-link-exact-active{
			color:#f96;
		} */
	}
</style>