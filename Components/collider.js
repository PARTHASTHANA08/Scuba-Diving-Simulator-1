AFRAME.registerComponent("turtles",{
    init:function(){
        for(var i = 1;i<=20;i++){
            var id = `hurdels${i}`
            var posX = Math.random()*3000 + 1000
            var posY = Math.random()*2 + 1
            var posZ = Math.random()*3000 + 1000
            var position = {x:posX,y:posY,z:posZ}
            this.turtle(id,position)
        }

    },
    turtle:(id,position)=>{
        var landE = document.querySelector("#land")
        var turtleE = document.createElement("a-entity")
        turtleE.setAttribute("id",id)
        turtleE.setAttribute("position",position)
        turtleE.setAttribute("scale",{x:500, y:500, z:500})
        turtleE.setAttribute("gltf-model","./Models/turtle/scene.gltf")
        turtleE.setAttribute("animation-mixer",{})
        landE.appendChild(turtleE)
    }
})