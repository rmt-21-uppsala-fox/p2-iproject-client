<template>
  <div>
    <h2 class="mb-3">(っ◔◡◔)っ Menu</h2>
    <input
      type="text"
      class="form-control bg-dark mb-3 text-white"
      placeholder="Search"
    />
    <button class="btn btn-dark mb-3 form-control">🔎 Search Title</button>
    <br />
    <button class="btn btn-dark mb-3 form-control">📜 New Post</button>
    <br />
    <button class="btn btn-dark mb-3 form-control">🤡 Memes</button>
    <br />
    <button class="btn btn-dark mb-3 form-control">💀 Random</button>
    <br />
    <button class="btn btn-dark mb-3 form-control">🦊 Animals</button>
    <br />
    <button class="btn btn-dark mb-3 form-control">👹 Anime</button>
    <br />
    <button class="btn btn-dark mb-3 form-control">👾 Comic</button>
  </div>
</template>

<script>
export default {
  name: "FilterAndCategory",
};
</script>

<style scoped>
input {
  border: none;
}
</style>
