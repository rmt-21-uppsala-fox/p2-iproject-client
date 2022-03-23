<template>
  <div class="bg-black">
    <b-button v-b-toggle.sidebar-variant class="btn btn-dark">≣</b-button>
    <b-sidebar
      id="sidebar-variant"
      bg-variant="black"
      text-variant="light"
      backdrop
      no-header
      title="NEWS-PORTAL CMS"
    >
      <div class="px-3 py-2 bg-black">
        <h2 class="mb-3">(っ◔◡◔)っ Menu</h2>
        <button class="btn btn-dark mb-3 form-control">🏡 Home</button>
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
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideBarTab",
};
</script>
