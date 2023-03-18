<template>

	<h1>DO YOU WANT TO PLAY WITH A COUNTER APP?</h1>
	<h2>CLICK ON THE "CLICK ME" BELOW TO GET STARTED</h2>
	<router-link :to="{name: 'CounterView'}">CLICK ME!!!</router-link>
	
</template>

<script>
export default {
	name: "HomePage"
}
</script>

<style>


a{
	color: black;
	text-decoration: none;
	cursor: pointer;
	text-align: center;
	margin-left: 45vw;
}

h1, h2{
	text-align: center;
	padding-top: 20vh;
	box-shadow: 5px 10px #888888;
	margin-bottom: 3vh
}
</style>