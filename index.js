const changeImgWithOneClick = (target, btns)=>{
	target.classList.add("active")

	btns.forEach((answer)=>{
		if(answer !== target){
			answer.classList.remove("active")
		}
	})
}

const changeImgWithMultiClick = (target, clickCount, btns)=>{
	if(target.classList.contains("active")){
		target.classList.remove("active")
		clickCount--
	}else{
		if(clickCount< Array.from(btns).length){
			target.classList.add("active")
			clickCount++
		}
	}
}

const changeAnswerImg = (btns, max_count)=>{
	let clickCount = 0

	btns.forEach((btn)=>{
		btn.addEventListener("click", (e)=>{
			let target = e.currentTarget;
			if(max_count == 1){
				changeImgWithOneClick(target, btns)
			}else{
				changeImgWithMultiClick(target, clickCount, btns)
			}
		})
	})	
}

export {changeAnswerImg}
