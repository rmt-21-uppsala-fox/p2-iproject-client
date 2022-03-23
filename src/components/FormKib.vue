<template>
  <div class="flex flex-col w-full lg:flex-row">
    <div
      class="
        grid
        flex-grow
        min-h-screen
        card
        bg-base-300
        rounded-box
        place-items-center
      "
    >
      <div class="card min-w-1/2 bg-base-100 shadow-xl card-width">
        <div class="card-body min-w-1/2">
          <h2 class="card-title">Input Data!</h2>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Nama Barang</span>
            </label>
            <input
            v-model="userInput.name"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Type Barang</span>
            </label>
            <input
            v-model="userInput.type"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Tanggal Pembelian</span>
            </label>
            <input
            v-model="userInput.date"
              type="date"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Asal Dana</span>
            </label>
            <input
            v-model="userInput.originOfFunds"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Harga</span>
            </label>
            <input
            v-model="userInput.price"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
    <div class="divider lg:divider-horizontal">OR</div>
    <div
      class="
        flex-grow
        justify-center
        min-h-screen
        card
        bg-base-300
        rounded-box
        place-items-center
      "
    >
      <div class="card min-w-1/2 bg-base-100 shadow-xl card-width">
        <div class="card-body min-w-1/2">
          <h2 class="card-title">Drop Data!</h2>
          <vue-dropzone :options="dropzoneOptions" :useCustomSlot="true">
            <div class="dropzone-custom-content">
              <h3 class="dropzone-custom-title">
                Drag dan drop untuk mengupload file!
              </h3>
              <div class="subtitle">
                ...atau click untuk memilih file dari komputer anda
              </div>
            </div>
          </vue-dropzone>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "FormKib",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data: function () {
    return {
      userInput: {
        name: "",
        type: "",
        date: "",
        originOfFounds: "",
        price: ""
      },
      dropzoneOptions: {
        url: "http://localhost:5000/multer",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i>UPLOAD DATA",
      },
    };
  },
};
</script>

<style scoped>
.card-width {
  width: 75%;
}
.dropzone-custom-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
#dropzone {
  border: 2px dashed #0087f7;
  border-radius: 5px;
  background: white;
  padding: 50px;
  width: 100%;
  height: 25%;
}
.dropzone-custom-title {
  margin-top: 0;
  color: #00b782;
}

.subtitle {
  color: #314b5f;
}
</style>