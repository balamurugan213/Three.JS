import './style.css'
import * as THREE from'three'
// console.log(THREE)

// scene
const scene=new THREE.Scene()

// red box
const geometry=new THREE.BoxGeometry(1,1,1)
const material =new THREE.MeshBasicMaterial({color:'yellow'})
const mesh =new THREE.Mesh(geometry,material)

// adding box to the scene
scene.add(mesh)

// Sizes
const sizes={
    width:800,
    height:600
}
// Camera
const camera= new THREE.PerspectiveCamera(50,sizes.width/sizes.height)
camera.position.z=5
// camera.position.y=1
// camera.position.x=1

scene.add(camera)

// Canvas
const canvas=document.querySelector('.webgl')

// Renderer
const renderer=new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(sizes.width,sizes.height)

renderer.render(scene,camera)