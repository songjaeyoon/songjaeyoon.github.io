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
const height = window.innerHeight;
renderer.setSize(width, height);

renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상도 처리

/* 
* scene
*/
const scene = new THREE.Scene();

/* 
* camera
*/
const camera = new THREE.OrthographicCamera(
	-(width / height),
    width / height, 
    1,
    -1,
    0.1, // near 
    1000, // far
);

// 위치 설정을 안하면 카메라의 디폴트 위치는 (0, 0, 0) 잘 안보일 거기 때문에 보통은 살짝 위치를 바꾼다.
camera.position.set(3, 2, 4);

// 카메라가 원점을 바라보도록 조정
camera.lookAt(0, 0, 0);

// 카메라 줌: 기본값은 1 절반으로 하면 줌아웃
if (width > height) {
    camera.zoom = 0.2;
}
else {
    camera.zoom = 0.1;
}
camera.updateProjectionMatrix(); // 뭔가 바꿨으면 호출 필요

// 무대 위에 카메라 올리기
scene.add(camera); 


/* 
* light
*/
const ambientLight = new THREE.AmbientLight(
    "#fff", // 빛의 색상
    1, // 빛의 강도 (100이면 강함, 1이면 약함)
);
scene.add(ambientLight);

/* 
* mesh
*/
const meshPositions = [-4, -2, 0, 0, 0];
const meshScales = [0.5, 0.75, 1, 0.75, 0.5];
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("/images/bg.jpg");
const textureFloor = textureLoader.load("/images/bg_floor.jpg");
const texture1 = textureLoader.load("/images/bg1.jpg");
const texture2 = textureLoader.load("/images/bg2.jpg");
const texture3 = textureLoader.load("/images/bg3.jpg");
const texture4 = textureLoader.load("/images/bg4.jpg");
const texture5 = textureLoader.load("/images/bg5.jpg");
const meshTextures = [texture1, texture2, texture3, texture4, texture5];
const geometry = new THREE.BoxGeometry(2, 5, 2); // 직육면체

const meshes = [];
const meshGroup = new THREE.Group();

for (let i = 0; i < 5; i++) {

    const leftSide = i < 3 ? meshTextures[i] : texture;
    const rightSide = i >= 3 ? meshTextures[i] : texture;
    const materials = [
        new THREE.MeshStandardMaterial({
            map: rightSide,
        }),
        new THREE.MeshStandardMaterial({
            map: texture,
        }),
        new THREE.MeshStandardMaterial({
            map: texture,
        }),
        new THREE.MeshStandardMaterial({
            map: texture,
        }),
        new THREE.MeshStandardMaterial({
            map: leftSide,
        }),
    ];

    const mesh = new THREE.Mesh(geometry, materials); 
    mesh.position.set(meshPositions[i], 0, meshPositions[4 - i])
    mesh.scale.set(meshScales[i], meshScales[i], meshScales[i]);
    mesh.name = `mesh${i}`;

    meshGroup.add(mesh);
    meshes.push(mesh);
}

const floorMaterials = [
    new THREE.MeshStandardMaterial({
        map: texture,
    }),
    new THREE.MeshStandardMaterial({
        map: texture,
    }),
    new THREE.MeshStandardMaterial({
        map: textureFloor,
    }),
    new THREE.MeshStandardMaterial({
        map: texture,
    }),
    new THREE.MeshStandardMaterial({
        map: texture,
    }),
];

const floor = new THREE.Mesh(geometry, floorMaterials);
floor.scale.set(4, 0.1, 4);
floor.position.set(-1.5, -1.5, -1.5);
meshGroup.add(floor);

meshGroup.rotation.y = -0.1;
scene.add(meshGroup);


/* 
* mousemove
*/
const threshold = 0.25;
const handleMousemove = (e) => {
    const domElement = document.body;
    const halfWidth = domElement.offsetWidth / 2;
    const yawLeft = - ( ( e.pageX - domElement.offsetLeft ) - halfWidth ) / halfWidth;

    if (meshGroup.rotation.y <= threshold && meshGroup.rotation.y >= -1 * threshold) {
        meshGroup.rotation.y += (yawLeft * 0.02);

        if (meshGroup.rotation.y > threshold) {
            meshGroup.rotation.y = threshold;
        }
        else if (meshGroup.rotation.y < -1 * threshold) {
            meshGroup.rotation.y = -1 * threshold;
        }
    }
}

/* 
* click
*/

function toScreenPosition(obj, camera)
{
    var vector = new THREE.Vector3();

    var widthHalf = 0.5*width;
    var heightHalf = 0.5*height;

    obj.updateMatrixWorld();
    vector.setFromMatrixPosition(obj.matrixWorld);
    vector.project(camera);

    vector.x = ( vector.x * widthHalf ) + widthHalf;
    vector.y = - ( vector.y * heightHalf ) + heightHalf;

    return { 
        x: vector.x,
        y: vector.y
    };

};
const raycaster = new THREE.Raycaster(new THREE.Vector3(10, 5, 10));
const paths = ["/about", "/publications", "/projects", "/other", "https://blog.jaeyoon.io"]
const handleClick = (e) => {
    const distances = meshes.map(meshItem => {
        const meshPosition = toScreenPosition(meshItem, camera);
        const distance = Math.sqrt(Math.pow(e.clientX - meshPosition.x, 2) + Math.pow(e.clientY - meshPosition.y, 2))

        return {
            name: meshItem.name,
            distance: distance,
        }
    });

    const sorted = distances.sort((a, b) => a.distance - b.distance);

    if (sorted[0].distance < 70) {
        const index = parseInt(sorted[0].name.substr(4, ));
        if (index < 4) {
            window.location.href = paths[index];
        }
        else {
            window.location.replace(paths[index]);
        }
    }
}


/* 
* Rendering
*/
// renderer로 그려줘야 최종적으로 보인다
const draw = () => {
    camera.lookAt(meshes[2].position);
	renderer.render(scene, camera);
    renderer.setAnimationLoop(draw);
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
document.body.addEventListener("mousemove", handleMousemove)
canvas.addEventListener("click", handleClick);