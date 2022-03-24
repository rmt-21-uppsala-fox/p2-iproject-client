<template>
          <div class="subforum-row">
            <div class="subforum-icon subforum-column center">
              <i class="fa fa-car center"></i>
            </div>
            <div class="subforum-description subforum-column">
              <h4><a class="search-box-a" href="#">{{news.title}}</a></h4>
            </div>
            <div class="subforum-stats subforum-column center">
              <span>{{news.comments}} comments </span>
            </div>
            <div class="subforum-info subforum-column">
              <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
              <br />on <small>12 Dec 2020</small>
            </div>
          </div>
</template>

<script>
export default {
name: 'NewsPage',
props:['news']
}
</script>

<style>

</style>