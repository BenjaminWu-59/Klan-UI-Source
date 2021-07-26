<template>
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="main">
      <div class="gif">
        <img src="../assets/coding.webp"/>
      </div>
      <div class="banner">
        <h1>Klan&nbspUI</h1>
        <div class="intro">
          <p><strong>KLan UI</strong> 主要使用了 <strong>Vue3</strong>+<strong>TS</strong>，代码易读且使用方便。</p>
        </div>
        <p class="actions">
          <a href="https://github.com">Github</a>
          <router-link class="start" to="/doc">Get Started</router-link>
        </p>
      </div>
    </div>
    <svg class="BG1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#b8b7b7" fill-opacity="1"
            d="M0,128L16,122.7C32,117,64,107,96,106.7C128,107,160,117,192,144C224,171,256,213,288,224C320,235,352,213,384,170.7C416,128,448,64,480,74.7C512,85,544,171,576,202.7C608,235,640,213,672,192C704,171,736,149,768,160C800,171,832,213,864,218.7C896,224,928,192,960,186.7C992,181,1024,203,1056,181.3C1088,160,1120,96,1152,96C1184,96,1216,160,1248,170.7C1280,181,1312,139,1344,122.7C1376,107,1408,117,1424,122.7L1440,128L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
    </svg>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  name: 'Home.vue',
  components: {Topnav},
};
</script>

<style lang="scss" scoped>
$green: #0e0e0e;
$border-radius: 4px;
$color: #111111;
.topnavAndBanner {
  position: relative;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;

  > .main {
    height: 300px;
    width: 100%;
    display: flex;

    > .gif {
      text-align: right;
      width: 40%;
      margin-right: 30px;

      img {
        max-width: 365px;;
      }
    }

    > .banner {
      margin-left: 15px;
      padding: 15px;
      box-sizing: border-box;
      width: 50%;

      .intro{
        padding: 20px 0;
        letter-spacing:1.5px;
        line-height:30px;
        strong{
          background: black;
          color: white;
          padding: 5px;
          border-radius: 3px;
        }
      }
      > .actions {
        padding: 5px 0;
        .start{
          background: #0d92ff;

          &:hover{
            box-shadow: 0 0 2px 2px #a5bcd4
          }
        }
        a {
          background: $green;
          margin-right: 10px;
          color: white;
          display: inline-block;
          padding: 8px 24px;
          border-radius: $border-radius;

          &:hover {
            text-decoration: none;
            box-shadow: 0 0 1px 1.5px #2d2d2d
          }
        }
      }
    }
  }

  @media(max-width: 1023px) {
    .main {
      top: -100px;
      flex-wrap: wrap;
      max-width: 391px;
      margin: 0 auto;
      position: relative;
      padding-top: 20px;

      > .gif {
        width: 100%;
        text-align: center;
        margin-right: 0;
      }

      > .banner {
        width: 100%;
        text-align: center;
        margin-left: 0;
      }
    }
  }

  .BG1 {
    position: absolute;
    z-index: -1;
    bottom: 0;
  }
}
</style>
