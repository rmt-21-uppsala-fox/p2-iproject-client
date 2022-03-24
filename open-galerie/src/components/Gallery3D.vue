<template>
  <div>
    <div class="window3D" ref="Gallery3d"></div>
  </div>
</template>

<script>
import * as THREE from "three";
const width = 900; // window.innerWidth
const height = 500; // window.innerHeight
import Vue from "vue";
import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000/");
Vue.use(VueSocketIOExt, socket);

export default {
  name: "Gallery3D",
  props: ["idGallery"],
  data() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const loader = new THREE.TextureLoader();
    const cubeMaterials = [
      new THREE.MeshBasicMaterial({
        map: loader.load("https://files.catbox.moe/7i1g5u.png"),
      }), //right side
      new THREE.MeshBasicMaterial({
        map: loader.load("https://files.catbox.moe/7i1g5u.png"),
      }), //left side
      new THREE.MeshBasicMaterial({
        map: loader.load("https://files.catbox.moe/7i1g5u.png"),
      }), //top side
      new THREE.MeshBasicMaterial({
        map: loader.load("https://files.catbox.moe/7i1g5u.png"),
      }), //bottom side
      new THREE.MeshBasicMaterial({
        map: loader.load("https://files.catbox.moe/7i1g5u.png"),
      }), //front side
      new THREE.MeshBasicMaterial({
        map: loader.load("https://files.catbox.moe/ema8wo.png"),
      }), //back side
    ];
    const player = new THREE.Mesh(geometry, cubeMaterials);

    player.castShadow = true;
    player.receiveShadow = true;

    return {
      scene: scene,
      camera: camera,
      renderer: renderer,
      container: null,
      players: [],
      player: player,
      clients: new Object(),
      id: null,
    };
  },
  async created() {
    await this.$store.dispatch("getGalleryByPK", this.idGallery);
    this.addNFT();
    let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
    hemiLight.position.set(0, 50, 0);
    this.scene.add(hemiLight);

    let d = 8.25;
    let dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
    dirLight.position.set(-8, 12, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 1500;
    dirLight.shadow.camera.left = d * -1;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = d * -1;

    this.scene.add(dirLight);
    const texture = new THREE.TextureLoader().load(
      "https://files.catbox.moe/j1o04x.png"
    );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(20, 20);

    var pgeometry = new THREE.PlaneGeometry(100, 100);
    var pmaterial = new THREE.MeshBasicMaterial({ map: texture });
    var floor = new THREE.Mesh(pgeometry, pmaterial);
    floor.receiveShadow = true;
    floor.material.side = THREE.DoubleSide;
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1;

    this.scene.add(floor);
    this.scene.add(this.player);

    const geometry = new THREE.BoxGeometry(50, 50, 30);
    const loader = new THREE.TextureLoader();
    const cubeMaterials = [
      new THREE.MeshBasicMaterial({
        map: loader.load(
          "https://files.catbox.moe/7i1g5u.png",
          function (texture) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(20, 20);
          }
        ),
        side: THREE.BackSide,
      }), //right side
      new THREE.MeshBasicMaterial({
        map: loader.load(
          "https://files.catbox.moe/7i1g5u.png",
          function (texture) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(20, 20);
          }
        ),
        side: THREE.BackSide,
      }), //left side
      new THREE.MeshBasicMaterial({
        map: loader.load(
          "https://files.catbox.moe/7i1g5u.png",
          function (texture) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(10, 10);
          }
        ),
        side: THREE.BackSide,
      }), //top side
      new THREE.MeshBasicMaterial({
        map: loader.load(
          "https://files.catbox.moe/7i1g5u.png",
          function (texture) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(20, 20);
          }
        ),
        side: THREE.BackSide,
      }), //bottom side
      new THREE.MeshBasicMaterial({
        map: loader.load(
          "https://files.catbox.moe/7i1g5u.png",
          function (texture) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(20, 20);
          }
        ),
        side: THREE.BackSide,
      }), //front side
      new THREE.MeshBasicMaterial({
        map: loader.load(
          "https://files.catbox.moe/7i1g5u.png",
          function (texture) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(20, 20);
          }
        ),
        side: THREE.BackSide,
      }), //back side
    ];
    const wall = new THREE.Mesh(geometry, cubeMaterials);
    wall.position.z = -2.5;
    this.scene.add(wall);

    this.player.position.x = 0;

    this.camera.position.z = this.player.position.z + 5;
    this.camera.position.y = this.player.position.y + 3;
    this.camera.rotation.x = this.player.rotation.x + -0.5;

    this.player.add(this.camera);
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem("reloaded");
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
    this.renderer.setSize(width, height);
    this.$refs.Gallery3d.appendChild(this.renderer.domElement);
    this.animate();
    document.onkeydown = (e) => {
      this.movePlayer(e);
    };
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    movePlayer(e) {
      if (e.keyCode === 37) {
        this.player.rotation.y += 0.1;
      }
      if (e.keyCode === 39) {
        this.player.rotation.y -= 0.1;
      }
      if (e.keyCode === 38) {
        this.player.translateZ(-0.5);
      }
      if (e.keyCode === 40) {
        this.player.translateZ(0.5);
      }
      this.$socket.client.emit("playerMove", {
        pos: [
          this.player.position.x,
          this.player.position.y,
          this.player.position.z,
        ],
        rot: [0, this.player.rotation.y, 0],
      });
    },
    addNFT() {
      const pos = [
        {
          x: 0,
          y: 1.5,
          z: -10,
        },
        {
          x: 10,
          y: 1.5,
          z: -10,
        },
        {
          x: -10,
          y: 1.5,
          z: -10,
        },
        {
          x: 20,
          y: 1.5,
          z: -10,
        },
        {
          x: -20,
          y: 1.5,
          z: -10,
        },
        {
          x: 0,
          y: 1.5,
          z: 5,
        },
        {
          x: 10,
          y: 1.5,
          z: 5,
        },
        {
          x: -10,
          y: 1.5,
          z: 5,
        },

        {
          x: -20,
          y: 1.5,
          z: 5,
        },
        {
          x: 20,
          y: 1.5,
          z: 5,
        },
      ];
      let boxColl = [];
      this.images.forEach(async (tex, i) => {
        if (i < 10) {
          const texture = await new THREE.TextureLoader().load(tex);
          const geometry = new THREE.BoxGeometry(5, 5, 5);
          const material = new THREE.MeshBasicMaterial({
            map: texture,
          });
          const cube = new THREE.Mesh(geometry, material);
          this.scene.add(cube);
          boxColl.push(cube);
          cube.position.x = pos[i].x;
          cube.position.y = pos[i].y;
          cube.position.z = pos[i].z;
        }
      });
    },
  },
  computed: {
    images() {
      return this.$store.state.images;
    },
  },
  sockets: {
    connect: function () {
      console.log("connected", this.$socket);
      this.$socket.client.emit("gallery", this.$route.params.id);
    },
    disconnect: function () {
      console.log("disconnected", this.$socket);
    },
    introduction: function (id, playerNum, ids) {
      ids.forEach((users) => {
        if (id !== users) {
          const geometry = new THREE.BoxGeometry(1, 1, 1);
          const loader = new THREE.TextureLoader();
          const cubeMaterials = [
            new THREE.MeshBasicMaterial({
              map: loader.load("https://files.catbox.moe/7i1g5u.png"),
            }), //right side
            new THREE.MeshBasicMaterial({
              map: loader.load("https://files.catbox.moe/7i1g5u.png"),
            }), //left side
            new THREE.MeshBasicMaterial({
              map: loader.load("https://files.catbox.moe/7i1g5u.png"),
            }), //top side
            new THREE.MeshBasicMaterial({
              map: loader.load("https://files.catbox.moe/7i1g5u.png"),
            }), //bottom side
            new THREE.MeshBasicMaterial({
              map: loader.load("https://files.catbox.moe/7i1g5u.png"),
            }), //front side
            new THREE.MeshBasicMaterial({
              map: loader.load("https://files.catbox.moe/ema8wo.png"),
            }), //back side
          ];
          this.clients[users] = {
            mesh: new THREE.Mesh(geometry, cubeMaterials),
          };
          this.clients[users].mesh.castShadow = true;
          this.clients[users].mesh.receiveShadow = true;
          this.scene.add(this.clients[users].mesh);
        }
      });
      this.id = id;
    },
    newUserConnected: function (clientCount, _id) {
      console.log(clientCount + " clients connected");
      let alreadyHasUser = false;
      for (let i = 0; i < Object.keys(this.clients).length; i++) {
        if (Object.keys(this.clients)[i] == _id) {
          alreadyHasUser = true;
          break;
        }
      }
      if (_id != this.id && !alreadyHasUser) {
        console.log("A new user connected with the id: " + _id);
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const loader = new THREE.TextureLoader();
        const cubeMaterials = [
          new THREE.MeshBasicMaterial({
            map: loader.load("https://files.catbox.moe/7i1g5u.png"),
          }), //right side
          new THREE.MeshBasicMaterial({
            map: loader.load("https://files.catbox.moe/7i1g5u.png"),
          }), //left side
          new THREE.MeshBasicMaterial({
            map: loader.load("https://files.catbox.moe/7i1g5u.png"),
          }), //top side
          new THREE.MeshBasicMaterial({
            map: loader.load("https://files.catbox.moe/7i1g5u.png"),
          }), //bottom side
          new THREE.MeshBasicMaterial({
            map: loader.load("https://files.catbox.moe/7i1g5u.png"),
          }), //front side
          new THREE.MeshBasicMaterial({
            map: loader.load("https://files.catbox.moe/ema8wo.png"),
          }), //back side
        ];
        this.clients[_id] = {
          mesh: new THREE.Mesh(geometry, cubeMaterials),
        };

        //Add initial users to the scene
        this.scene.add(this.clients[_id].mesh);
      }
    },
    userDisconnected: function (clientCount, id) {
      if (id != this.id) {
        console.log("A user disconnected with the id: " + id);
        this.scene.remove(this.clients[id].mesh);
        delete this.clients[id];
      }
    },
    userPositions: function (clientProps) {
      for (let i = 0; i < Object.keys(clientProps).length; i++) {
        if (Object.keys(clientProps)[i] != this.id) {
          //Store the values
          let oldPos = this.clients[Object.keys(clientProps)[i]].mesh.position;
          let newPos = clientProps[Object.keys(clientProps)[i]].position;

          //Create a vector 3 and lerp the new values with the old values
          let lerpedPos = new THREE.Vector3();
          lerpedPos.x = THREE.Math.lerp(oldPos.x, newPos[0], 0.3);
          lerpedPos.y = THREE.Math.lerp(oldPos.y, newPos[1], 0.3);
          lerpedPos.z = THREE.Math.lerp(oldPos.z, newPos[2], 0.3);

          //Set the position
          this.clients[Object.keys(clientProps)[i]].mesh.position.set(
            lerpedPos.x,
            lerpedPos.y,
            lerpedPos.z
          );
          const euler = new THREE.Euler(
            clientProps[Object.keys(clientProps)[i]].rotation[0],
            clientProps[Object.keys(clientProps)[i]].rotation[1],
            clientProps[Object.keys(clientProps)[i]].rotation[0]
          );
          this.clients[
            Object.keys(clientProps)[i]
          ].mesh.quaternion.setFromEuler(euler);
          //   clientProps[Object.keys(clientProps)[i]].rotation.y;
          // console.log(clientProps[Object.keys(clientProps)[i]].rotation.y);
        }
      }
    },
  },
};
</script>

<style>
</style>