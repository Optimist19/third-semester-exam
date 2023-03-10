<template>
	<div>
  		<i @click="backHome" class="fa-sharp fa-solid fa-circle-arrow-left"></i>
	</div>
</template>

<script>
import {useRouter} from "vue-router"
export default {
	name: "PageNotFound",
	setup(){

    const navigate = useRouter()

		const backHome = () =>{
			navigate.push(`/`)
		}

		return{
      		navigate,
			backHome
		}
	}
}

</script>

<style scoped>

i{
	font-size: 30px;
	margin: 12vh 0 0 3vw;
	cursor: pointer;
}


div{
	width: 99vw;
	height: 97vh;
	background-image: url("../assets/SVG-Animation-404-Page.png");
	background-size: 100% 100%;
}
</style>