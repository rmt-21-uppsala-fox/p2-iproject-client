<template>
    <div class="topic-container">
            <!--Original thread-->
            <div class="head">
                <div class="authors"></div>
                <div class="content"></div> 
             
            </div>
            <div class="body">
                <div class="authors">
                     <h1>RANK {{rank}}</h1>
                    <div class="username"><a href="">{{playerRank.player.name}}</a></div>
                    <div>Teams: {{playerRank.teams[0].name}}</div>
                    <img src="https://static.hltv.org/images/playerprofile/bodyshot/unknown.png" alt="">
                    <div>Maps: <u>{{playerRank.maps}}</u></div>
                    <div>KD Diff: <u>{{playerRank.kdDiff}}</u></div>
                    <div>KD: <u>{{playerRank.kd}}</u></div>
                    <div>rating: <u>{{playerRank.rating1}}</u></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
name: 'PlayerRank',
props:['playerRank','rank']
}
</script>

<style>

</style>