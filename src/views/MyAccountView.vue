<template>
<div>
    <input id="file" type="file">
    <button @click="uploadToImgBB">Upload</button>
</div>
</template>

<script>
export default {
    name: 'MyAccountView',
    data() {
        return {
            base64: ''
        }
    },
    methods: {
        uploadToImgBB() {
            const input = this.$el.querySelector('input[type=file]')
            const file = input.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                this.$store.dispatch('uploadToImgBB', reader.result)
            }
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
    }
}
</script>

<style>

</style>
