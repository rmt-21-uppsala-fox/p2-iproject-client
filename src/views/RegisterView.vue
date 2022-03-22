<template>
  <div class="grid grid-cols-3 login">
    <div class="card w-100 col-start-2 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Register!</h2>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Sekolah</span>
          </label>
          <select class="select select-bordered select-primary">
            <option disabled selected>Pilih Satu</option>
            <option>Star Wars</option>
          </select>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
};
</script>

<style>
</style>