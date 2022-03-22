<template>
  <div>
    <div ref="Gallery3d"></div>
  </div>
</template>

<script>
import * as THREE from "three";
const width = 600; // window.innerWidth
const height = 400; // window.innerHeight

export default {
  name: "GalleryPage",
  data() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    const player = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );

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
  created() {
    var pgeometry = new THREE.PlaneGeometry(100, 100);
    var pmaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    var floor = new THREE.Mesh(pgeometry, pmaterial);
    floor.material.side = THREE.DoubleSide;
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1;

    this.scene.add(floor);
    this.scene.add(this.player);

    this.player.position.x = 0;

    this.camera.position.z = this.player.position.z + 5;
    this.camera.position.y = this.player.position.y + 3;
    this.camera.rotation.x = this.player.rotation.x + -0.5;

    this.player.add(this.camera);
  },
  mounted() {
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
  },
  sockets: {
    connect: function () {
      console.log("connected", this.$socket);
    },
    disconnect: function () {
      console.log("disconnected", this.$socket);
    },
    introduction: function (id, playerNum, ids) {
      ids.forEach((users) => {
        if (id !== users) {
          this.clients[users] = {
            mesh: new THREE.Mesh(
              new THREE.BoxGeometry(),
              new THREE.MeshBasicMaterial({ color: 0x00ff00 })
            ),
          };
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
        this.clients[_id] = {
          mesh: new THREE.Mesh(
            new THREE.BoxGeometry(),
            new THREE.MeshBasicMaterial({ color: 0x00ff00 })
          ),
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