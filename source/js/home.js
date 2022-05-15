import * as THREE from "./three.module.js";

/* 
* renderer
*/
const canvas = document.querySelector("#three-canvas");
const renderer = new THREE.WebGLRenderer({ 
  canvas, // 미리 만든 canvas
  antialias: true, // 계단식으로 깨지는 걸 부드럽게 해줌. 대신 약간의 성능 저하 있음
  alpha: true, // 배경을 투명하게
});
const width = window.innerWidth
const height = window.innerHeight / 2;
renderer.setSize(width, height);

renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상도 처리

/* 
* scene
*/
const scene = new THREE.Scene();

/* 
* camera
*/
const camera = new THREE.PerspectiveCamera(
	75, // 시야각(field of view; fov)
    width / height, // 종횡비(aspect)
    0.1, // near 
    1000, // far
);

// 위치 설정을 안하면 카메라의 디폴트 위치는 (0, 0, 0) 잘 안보일 거기 때문에 보통은 살짝 위치를 바꾼다.
camera.position.x = 1; 
camera.position.y = 2; 
camera.position.z = 5; 

// 카메라가 원점을 바라보도록 조정
camera.lookAt(0, 0, 0);

// 카메라 줌: 기본값은 1 절반으로 하면 줌아웃
camera.zoom = 0.5;
camera.updateProjectionMatrix(); // 뭔가 바꿨으면 호출 필요

// 무대 위에 카메라 올리기
scene.add(camera); 


/* 
* light
*/
scene.fog = new THREE.Fog(
    "pink", 
    -7, // near (범위 시작)
    7, // far (범위 끝)
)

const light = new THREE.DirectionalLight(
    0xffffff, // 빛의 색상
    2, // 빛의 강도 (100이면 강함, 1이면 약함)
);
light.position.x = 1;
light.position.z = 2;
scene.add(light);


/* 
* mesh
*/
const geometry = new THREE.BoxGeometry(1, 2, 1); // 직육면체
const material = new THREE.MeshStandardMaterial({
  color: "white",
});

const meshes = [];
let mesh;
for (let i = 0; i < 10; i++) {
	mesh = new THREE.Mesh(geometry, material);  
    mesh.position.x = Math.random() * 5 - 2.5;
    mesh.position.z = Math.random() * 5 - 2.5;
    scene.add(mesh);
    meshes.push(mesh);
}


/* 
* Rendering
*/
// renderer로 그려줘야 최종적으로 보인다
const draw = () => {
	renderer.render(scene, camera)
}

draw();



/* 
* Browser resize
*/ 
const setSize = () => {
    // 카메라 재설정
    camera.aspect = window.innerWidth / window.innerHeight;
    // 카메라 투영에 관련된 값에 변화가 있을 경우 실행해야 함
    camera.updateProjectionMatrix();
    // renderer 
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}
  
window.addEventListener("resize", setSize);