AFRAME.registerComponent("terrain-reader",{
    schema:{
        speedOfRotation : {type:"number" , default:0}
    },
    init: function(){
        window.addEventListener("keydown", (e)=>{
            if(e.key === "ArrowLeft"){
             if (this.data.speedOfRotation < 0.1) {
                this.data.speedOfRotation += 0.01;
              } 
            }
            if(e.key === "ArrowRight"){
             if (this.data.speedOfRotation < -0.1) {
                this.data.speedOfRotation -= 0.01;
              }
            }
        })
    },
    tick:function(){
        var mapRotation = this.el.getAttribute("rotation")
        mapRotation.y += this.data.speedOfRotation  
        this.el.setAttribute("rotation",{
          x : mapRotation.x,
          y : mapRotation.y,
          z : mapRotation.z    
        })
    }
});
AFRAME.registerComponent("scuba-reader",{
    schema:{
        speedOfrotation:{type:"number" , default:0},
        SpeedOfAscend:{type:"number", default:0}
    },
    init:function(){
        window.addEventListener("keydown" , (e)=>{
            this.data.SpeedOfrotation = this.el.getAttribute("rotation")
            this.data.SpeedOfAscend = this.el.getAttribute("position")
            var diverRotation = this.data.SpeedOfrotation
            var diverPosition = this.data.SpeedOfAscend

            if(e.key === "ArrowRight"){
              if(diverRotation.x < 10){
                diverRotation.x += 0.5
                this.el.setAttribute("rotation",diverRotation)
              }
            }
            if(e.key === "ArrowLeft"){
              if(diverRotation.x > -10){
                diverRotation.x -= 0.5
                this.el.setAttribute("rotation",diverRotation)
              }
            }
            if(e.key === "ArrowUp"){
              if(diverRotation.z < 20){
                diverRotation.z += 0.5
                this.el.setAttribute("rotation",diverRotation)
              }
              if(diverPosition.y < 2){
                diverPosition.y += 0.1
                this.el.setAttribute("position",diverPosition)
              }
            }
            if(e.key === "ArrowDown"){
              if(diverRotation.z > -10){
                diverRotation.z -= 0.5
                this.el.setAttribute("rotation",diverRotation)
              }
              if(diverPosition.y > -2){
                diverPosition.y -= 0.1
                this.el.setAttribute("position",diverPosition)
              }
            }
        })
    }
})