<template>
  <div class="container">
    <p>{{count}}</p>
    <input type="number" v-model="count" placeholder="set your value" />
    <div class="bttn-con">
      <button @click="increment">Add</button>
      <button @click="decrement">Sub</button>
      <button @click="reset">Reset</button>
      <button @click="setValue">Set Value</button>
    </div>
  </div>
</template>

<script>
import useComposable from "../Composable/useComposable"
export default {
  name: 'CounterApp',
  setup(){
    const {count, increment, decrement, reset} = useComposable(100, 20)
    return{
      count, increment, decrement, reset
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

p{
  font-size: 55px;
  font-weight: bold;
  text-shadow: 5px 5px #888888;
}

.bttn-con{
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
}

button{
  margin-bottom: 1vh;
  border: none;
  padding: 1vh 2vh;
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px;
}

button:first-child{
  color: white;
  background-color: rgb(52, 73, 94);
  transition: 0.5s color ease-in;
}

button:first-child:hover{
  background-color: rgb(65, 184, 131);
  color: rgb(52, 73, 94);
}

button:nth-child(2){
  color: rgb(65, 184, 131);
  background-color: white;
  transition: 0.5s color ease-in;
}

button:nth-child(2):hover{
  color: rgb(52, 73, 94);
  background-color: rgb(65, 184, 131);
}


button:last-child{
  color: rgb(65, 184, 131);
  border: 2px solid transparent;
	background: linear-gradient(white, white) padding-box, linear-gradient(45deg, rgb(65, 184, 131), rgb(52, 73, 94)) border-box;
  transition: 0.5s color ease-in;
}

button:last-child:hover{
  color: white;
  background-color: rgba(4, 87, 12, 0.7);
}


</style>
