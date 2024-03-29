const changeImgWithOneClick = (target, btns, style)=>{
	target.classList.add(style)

	btns.forEach((answer)=>{
		if(answer !== target){
			answer.classList.remove(style)
		}
	})
}

const changeImgWithMultiClick = (target, clickCount, btns, style)=>{
	if(target.classList.contains(style)){
		target.classList.remove(style)
		clickCount--
	}else{
		if(clickCount< Array.from(btns).length){
			target.classList.add(style)
			clickCount++
		}
	}
}

const changeAnswerImg = (btns, max_count, style)=>{
	let clickCount = 0

	btns.forEach((btn)=>{
		btn.addEventListener("click", (e)=>{
			let target = e.currentTarget;
			if(max_count == 1){
				changeImgWithOneClick(target, btns, style)
			}else{
				changeImgWithMultiClick(target, clickCount, btns, style)
			}
		})
	})	
}

export {changeAnswerImg}
