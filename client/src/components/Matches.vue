<template>
  <div>
    <div class="head">
      <div class="authors">MATCH ID: {{ match.id }}</div>
      <div class="content"></div>
    </div>
    <div class="comments-container">
      <div class="body">
        <div class="authors">
          <div class="username">
            <a href="">{{ match.team1.name }} VS {{ match.team2.name }}</a>
          </div>
          <div>{{ match.event.name }}</div>

          <div>
            Format: <u>{{ match.format }}</u>
          </div>
          <div>Points: <u>LIVESTREAM</u></div>
     <iframe src="https://player.twitch.tv/?channel=esl_csgo&parent=cs-forum-2f459.web.app&autoplay=false"  frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Match-es",
  props: ["match"],
};
</script>

<style></style>
