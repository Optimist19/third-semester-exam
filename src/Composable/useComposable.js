import {ref} from "vue"
const useComposable = (initialValue = 0, valSetting = 1, setValue = 0) =>{
	
	let count = ref(initialValue)

	function increment(){
	  count.value += valSetting
	}

	const decrement = () =>{
	  count.value = count.value - valSetting
	}

	function reset(){
	  count.value = 0
	}

	// function setValue(){
	// 	initialValue.value = setValue 
	// }
   
	// const setValue = () =>{
	//   count.value = count.value - 1
	// }

	return{
	  count,
	  increment,
	  decrement,
	  reset,
	//   setValue
	}

}

export default useComposable