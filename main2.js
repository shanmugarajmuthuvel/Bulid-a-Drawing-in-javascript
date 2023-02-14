const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")
var toolbtn=document.querySelectorAll(".tool")
canvas.height=innerHeight//setting width and height on canvas innerwidth and height return viewable an element
canvas.width=innerWidth
//Global variable with default value
let prevMouseX, prevMouseY
 isDrawing=false
selectedTool="brush"
  const drawRect=(event)=>{
      ctx.strokeRect(event.offsetX,event.offsetY,prevMouseX-event.offsetX,prevMouseY-event.offsetY)
  }	  
canvas.addEventListener("mousedown",()=>{
  isDrawing=true
  prevMouseX=event.offsetX
  prevMouseY=event.offsetY
  ctx.beginPath()
  ctx.lineWidth=5
  })
  canvas.addEventListener("mousemove",(event)=>{
       if(!isDrawing)return
	   if(selectedTool==="brush"){
	    ctx.lineTo(event.offsetX,event.offsetY)//creating a line according to the mouse pointer
		ctx.stroke()//filling line with color
	   }
	   else if(selectedTool==="Rectangle"){
		   drawRect(event)  
	   }
  })
	toolbtn.forEach(function(btn){
        btn.addEventListener("click",()=>{
            document.querySelector(".options .active").classList.remove("active")
			btn.classList.add("active")
			selectedTool=btn.id	
		})
	})		
  canvas.addEventListener("mouseup",()=>{
  isDrawing=false
  })

















































// <!-------------------------------------------------selected tools----------------------------------------->
// var start=()=>{
	// isDrawing=true
    // ctx.beginPath()
    // ctx.lineWidth=5
// }
 // const drawRect=(event)=>{
	 // ctx.stroke(event.offsetX,event.offsetY)
 // }	 
// var draw=(event)=>{
	 // if(!isDrawing)return
	  // if(selectedTool==="brush"){
	  // ctx.lineTo(event.offsetX,event.offsetY)//creating a line according to the mouse pointe 
	  // ctx.stroke()//drawingfilling line with color
	  // }
	  // else if(selectedTool="rectangle"){
		  // drawRect(evnt)
	  // }
// }
// toobtn.forEach(function(btn){
	// btn.addEventListener("click",()=>{
     // document.querySelector(".options .active").classList.remove("active")
	 // btn.classList.add("active")
      // selectedTool=btn.id
	 
	// })
// })
// canvas.addEventListener("mousedown",start)
// canvas.addEventListener("mousemove",draw)	
// canvas.addEventListener("mouseup",()=>{
    // isDrawing=false
// })

