<template>
    <div class="home">
        <div class="hero"></div>
        <div class="content">
          <div class="text">
            <h2>Trade with clarity</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officia ea praesentium unde dicta, dolorem non amet velit commodi, molestiae at explicabo quidem! Autem molestiae nulla optio quidem pariatur!</p>
            <router-link :to="{name: 'stocks'}" class="btn">Start Trading</router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.hero {
    background-image: url("../assets/hero.jpg");
    background-size: cover;
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
}

.content {
  width: 70%;
  max-width: 1100px;
  height: 50vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.text h2 {
  font-size: 40px;
  margin-bottom: 1.2rem;
}

.text p {
  width: 36em;
  line-height: 1.8;
  margin-bottom: 1.8rem;
}
</style>