<template>
<div>
    <div class="row" style="padding: 50px 250px 0">
        <div v-if="!currentUserImages" class="py-3"></div>
        <div class="col-7">
            <h3 class="my-5 pb-3" v-if="!currentUserImages">You don't have any images on our database, please upload some images</h3>

            <img v-else :src="currentUserImages[0]" :alt="$store.state.currentUser.name" height="300px" width="230px" class="mb-3" style="object-fit: cover">
            <h1>{{$store.state.currentUser.name}}</h1>
            <h6>{{$store.state.currentUser.email}}</h6>
        </div>
        <div class="col-5 p-5">
            <h3>Upload New Image Here</h3><br>

            <div>
                <input class="btn col-9 btn-outline-secondary" id="file" type="file"><br><br>
                <button class="btn col-12 btn-success" @click="uploadToImgBB">Upload</button>
            </div>
        </div>
        <div v-if="currentUserImages">
            <hr class="mt-3">
            <p>Take a look at your gallery</p>
            <p>↓</p>
        </div>
    </div>

    <div class="app-container" style="padding: 50px 150px">
        <div id="lightgallery" class="row text-wrap">

            <a v-for="image in currentUserImages" :key="image.id" class="col-3" :href="image">
                <img :src="image" :alt="$store.state.currentUser.name" style="object-fit: cover; height: 350px; width: 250px; margin-bottom: 30px">
            </a>

        </div>
    </div>
</div>
</template>

<script>
import 'lightgallery.js'
import 'lightgallery.js/dist/css/lightgallery.css'
export default {
    name: 'MyAccountView',
    data() {
        return {
            base64: '',
            imageList: []
        }
    },
    computed: {
        currentUserImages() {
            let currentUserImages
            for (const name in this.$store.state.imagesUrl) {
                if (name === localStorage.currentUserName) {
                    currentUserImages = this.$store.state.imagesUrl[name]
                }
            }
            return currentUserImages
        }
    },
    methods: {
        async uploadToImgBB() {
            await this.$store.dispatch('fetchImages')

            const input = this.$el.querySelector('input[type=file]')
            const file = input.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = async () => {
                await this.$store.dispatch('uploadToImgBB', reader.result)
                await this.$store.dispatch('fetchImages')
                await this.$store.dispatch('initializeFaceRecognition')
            }
            reader.onerror = async (error) => {
                console.log('Error: ', error);
                await this.$store.dispatch('fetchImages')
            };
        }
    },
    mounted() {
        const el = document.getElementById('lightgallery')
        window.lightGallery(el)

        this.$store.dispatch('fetchImages')

    }
}
</script>
