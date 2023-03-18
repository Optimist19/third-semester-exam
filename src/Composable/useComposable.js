import {ref} from "vue"
const useComposable = (initialValue = 0, valSetting = 1) =>{
	
	let count = ref(initialValue)
	let set = ref("")

	function increment(){
	  count.value += valSetting
	}

	const decrement = () =>{
		if(count.value < 1) return
	  count.value = count.value - valSetting
	}

	function reset(){
	  count.value = 0
	}

	function setValue(){
		count.value = set.value
	}

	// const setValue = () =>{
	//   count.value = count.value - 1
	// }


	// This below is for the i tag

	// const navigate = useRouter()

	// const backHome = () =>{
	// 	navigate.push(`/`)
	// }

   

	return{
	  count,
	  increment,
	  decrement,
	  reset,
	  setValue,
	  set,
	//   navigate,
	//   backHome
	}

}

export default useComposable