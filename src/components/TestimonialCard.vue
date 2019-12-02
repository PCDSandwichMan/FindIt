<template>
  <div id="card">
    <div id="card__content">
      <div id="stars-wrapper">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at amet modi hic vel accusamus tempore tenetur autem praesentium, debitis placeat."</p>
      <img :src="require(`../assets/images/${imageUrl}`)" />
      <h5>{{name}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialCard",
  props: ["name", "imageUrl"]
};
</script>

<style lang="scss" scoped>
$gold: #bb9356;
$black: #1a1a1a;
$grey: #212121;

#card {
  width: 30%;
  background: #fff;
  padding: 20px;
  margin: 5px 10px;
}

#card__content {
  border: 1px dashed gold;
  padding: 20px;
}

#stars-wrapper {
  color: gold;
  i {
    margin: 0 5px;
    font-size: 0.8rem;
  }
}

img {
  margin: 20px 0;
  height: 80px;
  width: 80px;
  border-radius: 50%;
}

h5 {
  color: $gold;
}

@media (max-device-width: 842px) {
  #card {
    width: 40%;
  }
}
@media (max-device-width: 842px) {
  #card {
    width: 60%;
  }
}
@media (max-device-width: 444px) {
  #card {
    width: 80%;
  }
}
</style>