<template>
<div class="row">
    <div class="col-9">
        <CheckoutCard></CheckoutCard>
    </div>
    <div class="col-3 border border-secondary">
        <h6>Checkout</h6>
        <CheckoutItems></CheckoutItems>
        <CheckoutItems></CheckoutItems>
        <CheckoutItems></CheckoutItems>

        <div class="row">
            <div class="col-6">
                <p>Total Discount</p>
            </div>
            <div class="col-6">
                <small>Rp. -15.000</small>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-6">
                <p class="font-weight-bold">This Month Total </p>
            </div>
            <div class="col-6">
                <p>Rp. 80.996</p>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-6">
                <button type="button" class="btn btn-outline-success btn-sm"><i class="fa-solid fa-face-grin-beam fa-xl"></i> Face Payment</button>
            </div>
            <div class="col-6">
                <button type="button" class="btn btn-outline-primary btn-sm">Xendit Pay</button>
            </div>
        </div>

    </div>
    <div>
        <!-- <button @click="openModal" class="btn btn-primary">Open modal</button>

        <div class="modal modal-lg">
            <div class="modal-content">
                <div class="modal-body">
                    'Hellweowowoe'
                    <video id="videoInput" width="760" height="550" muted controls></video>
                </div>
            </div>
        </div> -->

        <video @play="start" id="videoInput" width="350" height="250" muted controls></video>
        <div>
            <b-button v-b-modal.modal-1>Launch demo modal</b-button>

            <b-modal id="modal-1" title="BootstrapVue">
            </b-modal>
        </div>
    </div>

</div>
</template>

<script>
import CheckoutCard from '../components/CheckoutCard.vue'
import CheckoutItems from '../components/CheckoutItems.vue'

export default {
    name: 'CheckoutView',
    components: {
        CheckoutCard,
        CheckoutItems,
    },
    methods: {
        start() {
            this.$el.querySelector('.modal').showModal()
        }
    },
    // mounted() {
    //     let video = this.$el.querySelector('video')

    //     const options = {
    //         video: true
    //     }

    //     navigator.mediaDevices.getUserMedia(options)
    //         .then(function (stream) {
    //             video.srcObject = stream
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }
}
</script>

<style>

</style>
