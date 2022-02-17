import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
console.log(gsap)
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


//TODO :Different Animations Implementations


// * * Normal Position besed animation
/*
const tick=()=>{
    //  console.log('tick')
    
    // update object
    mesh.position.x +=0.01
    mesh.rotation.y+=0.01
    
    //  render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()
*/



//* Time based animation
/* 
//Time
let time=Date.now()
// Animations
const tick=()=>{
    //  console.log('tick')
    
    // Time
    const curentTime=Date.now()
    const deltaTime=curentTime-time
    time=curentTime
    console.log(deltaTime)
    
    // update object
    mesh.position.x +=0.01
    mesh.rotation.y+=0.001 *deltaTime
    
    //  render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()
*/

// * Clock Based animation
// Clock
/*
const clock =new THREE.Clock()

// Animations
const tick=()=>{
    //  console.log('tick')
    
    // clock
    const elapsedTime =clock.getElapsedTime()

    // update object
    // mesh.position.x +=0.01
    mesh.rotation.x=elapsedTime
    mesh.rotation.y=elapsedTime  * Math.PI *2 // full rotation in oone second
    
    //  render
    renderer.render(scene, camera)
    
    window.requestAnimationFrame(tick)
}
tick()
*/


// * Using Trignomentry for animation
/*
// Clock
const clock =new THREE.Clock()

// Animations
const tick=()=>{
		//  console.log('tick')
		
		// clock
		const elapsedTime =clock.getElapsedTime()
		
		// update object
		// mesh.position.x +=0.01
		mesh.rotation.x=elapsedTime
		// full rotation in oone second
		mesh.rotation.y=elapsedTime  * Math.PI *2 
		
		// using maths for animation
        
		// ->Move the cube in circle
		mesh.position.y=Math.sin(elapsedTime)
		mesh.position.x=Math.cos(elapsedTime)
		
		// ->Move the cube in circle but look at cube
		camera.position.x=Math.sin(elapsedTime)
		camera.position.y=Math.cos(elapsedTime)
		camera.lookAt(mesh.position)
		
		//  render
		renderer.render(scene, camera)
		window.requestAnimationFrame(tick)
    }
    
    tick()
    
    */
    

// * Using Built in Function
gsap.to(mesh.position ,{duration: 1, x: 2})
gsap.to(mesh.position,{duration:1,delay:1 ,x:0})

// Animations
const tick=()=>{
    
    //  render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()


// // Time
// const clock =new THREE.Clock()

// // gsap.to(mesh.position ,{duration: 1, x: 2})
// // gsap.to(mesh.position,{duration:1,delay:1 ,x:0})


// // Animations
// const tick=()=>{
//     //  console.log('tick')

//     // clock
//     const elapsedTime =clock.getElapsedTime()

//     // update object
//     // mesh.position.x +=0.01
//     mesh.rotation.x=elapsedTime
//     mesh.rotation.y=elapsedTime  * Math.PI *2 // full rotation in oone second

//     // using maths for animation

//     // mesh.position.y=Math.sin(elapsedTime)
//     // mesh.position.x=Math.cos(elapsedTime)

//     camera.position.x=Math.sin(elapsedTime)
//     camera.position.y=Math.cos(elapsedTime)
//     camera.lookAt(mesh.position)



//     // //  render
//     renderer.render(scene, camera)

//     window.requestAnimationFrame(tick)


// }

// tick()