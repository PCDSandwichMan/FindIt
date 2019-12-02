<template>
  <div id="card">
    <div id="image-wrapper">
      <img
        v-if="comp.image_url.length === 0"
        src="https://thefittingsource.com/wp-content/uploads/2017/12/temp-inventory-landing.jpg"
        alt="business options"
      />
      <img
        v-if="comp.image_url.length > 0"
        :src="comp.image_url"
        alt="business options"
      />
    </div>
    <div>
      <div id="info-wrapper">
        <div id="title">
          <h2>{{ comp.name }}</h2>
          <a target="_blank" :href="comp.url">
            <i class="fab fa-yelp"></i>
          </a>
        </div>
        <h4 id="type">
          <span v-for="type in comp.categories" :key="type.id">
            {{
              type.title !==
                comp.categories[comp.categories.length - 1].title &&
              comp.categories.length > 1
                ? type.title + ","
                : type.title
            }}
          </span>
        </h4>
        <hr />
        <div id="rating-info">
          <div class="info__icon-container">
            <div>
              <h4>{{ comp.price }}</h4>
            </div>
            <h5>Average Cost</h5>
          </div>

          <div class="info__icon-container">
            <div>
              <i class="far fa-star"></i>
              <h4>{{ comp.rating }}</h4>
            </div>
            <h5>Rating</h5>
          </div>

          <div class="info__icon-container">
            <div>
              <i class="fas fa-tachometer-alt"></i>
              <h4>{{ (comp.distance / 1609.344).toFixed(1) + "m" }}</h4>
            </div>
            <h5>Distance</h5>
          </div>
        </div>
        <div id="info__lower">
          <div id="lower__service">
            <h3>Service Type</h3>
            <p v-for="type in comp.transactions" :key="type.id">
              {{ type }}
            </p>
          </div>
          <div id="contact-container">
            <p><span>Number: </span><br />{{ comp.display_phone }}</p>
            <p><span>Adress: </span></p>
            <p
              v-for="address in comp.location.display_address"
              :key="address.id"
            >
              {{ address }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  props: {
    comp: Object
  }
};
</script>

<style lang="scss" scoped>
$gold: #bb9356;

#card {
  position: relative;
  box-shadow: 2px 2px 7px #888;
  min-height: 55vh;
  max-width: 25vw;
  min-width: 20rem;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
}
#image-wrapper {
  width: 100%;
  height: 30vh;
  overflow: hidden;
}
img {
  width: 100%;
  min-height: 100%;
}
#title {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  h2 {
    color: #fff;
    font-weight: 600;
    // white-space: nowrap;
    text-shadow: 2px 2px 4px #111;
  }
}
a {
  margin: 10px 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 4px #222;
}
i {
  color: red;
  font-size: 1.5rem;
  transition: all 100ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}

#type {
  color: #222;
  font-size: 1.3rem;
  font-weight: 550;
  margin: 0 0 10px;
}

#info-wrapper {
  padding: 25px;
}

hr {
  border: 0.5px solid #99999944;
}

#rating-info {
  display: flex;
  align-items: center;
  p {
    margin: 0 8px;
  }
}
h4 {
  font-size: 0.85rem;
}
.info__icon-container {
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h4 {
    font-size: 1rem;
    font-weight: 500;
    color: $gold;
  }
  i {
    font-size: 1rem;
    margin: 0 5px 0;
    color: #333;
  }
  h5 {
    white-space: nowrap;
    font-weight: 500;
    font-size: 0.9rem;
  }
}

#info__lower {
  width: 100%;
  margin: 20px 0 10px;
  display: flex;
  justify-content: space-between;
  //   align-items: center;
}

#contact-container {
  p {
    font-size: 0.8rem;
    span {
      font-size: 1rem;
      font-weight: 600;
      color: $gold;
    }
  }
}

#lower__service {
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 1rem;
    font-weight: 600;
    border-bottom: 1px $gold solid;
    color: $gold;
    margin: 0 0 5px;
  }
  p {
    font-size: 0.8rem;
    font-weight: 400;
    margin: 3px 0;
  }
}
</style>
