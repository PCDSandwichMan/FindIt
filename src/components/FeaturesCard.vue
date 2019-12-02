<template>
  <div id="features__card">
    <div>
      <p>
        {{date}} /
        <span>{{tech}}</span>
      </p>
    </div>
    <h1>{{title}}</h1>
    <img :src="imageUrl" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sit voluptatem modi ab veritatis beatae explicabo aliquam, doloribus exercitationem esse.</p>
  </div>
</template>

<script>
export default {
  name: "FeaturesCard",
  props: ["imageUrl", "date", "tech", "title"]
};
</script>

<style lang="scss" scoped>
$gold: #bb9356;
$black: #1a1a1a;
$grey: #212121;

#features__card {
  width: 30%;
  padding: 10px;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p {
      color: #333;
      font-weight: 500;
      font-size: 0.8rem;
      margin: 10px 0 0;
      span {
        font-weight: 700;
        font-size: 0.8rem;
        color: $gold;
      }
    }
  }
  p {
    color: #999;
    font-size: 0.8rem;
    text-align: left;
  }
}

img {
  margin: 0 0 15px;
}

h1 {
  text-align: left;
  font-weight: 700;
  margin: 0 0 20px;
}

@media (max-device-width: 1024px) {
  #features__card {
    width: 60%;
    margin: 10px 0;
    box-shadow: 2px 2px 7px #555;
  }
}
@media (max-device-width: 676px) {
  #features__card {
    width: 80%;
  }
}
</style>