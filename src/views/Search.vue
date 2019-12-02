<template>
  <div>
    <header>
      <h1>Find It</h1>

      <form v-on:submit.prevent="handleSearch">
        <label>Find</label>
        <input
          type="text"
          v-model="queryBus"
          placeholder="bugers, Mom's house, soul mate..."
        />
        <span>|</span>
        <label> Where</label>
        <input
          type="text"
          v-model="queryLoc"
          placeholder="address, city, state"
        />
        <button type="submit">
          <i id="form__icon" class="fas fa-search"></i>
        </button>
      </form>
    </header>
    <main>
      <h1 style="align-self: flex-start" v-if="allBusinesses.length === 0">
        No Results Found...
      </h1>
      <SearchCard
        v-for="comp in allBusinesses"
        :key="comp.id"
        v-bind:comp="comp"
      />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchCard from "../components/SearchCard";

export default {
  name: "Search",
  components: {
    SearchCard
  },
  data() {
    return {
      queryBus: "",
      queryLoc: "Salt Lake City, UT"
    };
  },
  computed: mapGetters(["allBusinesses"]),
  methods: {
    ...mapActions(["getBusinesses"]),
    handleSearch() {
      this.getBusinesses({ queryBus: this.queryBus, queryLoc: this.queryLoc });
    }
  }
};
</script>

<style lang="scss" scoped>
$gold: #bb9356;
$black: #1a1a1a;
$grey: #212121;

header {
  background: linear-gradient(#111111b9, #1111117e),
    url("../assets/images/searchBg.jpg") no-repeat center;
  background-size: cover;
  min-height: 50vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Ruthie", cursive;
    font-size: 5rem;
    color: $gold;
  }
  h3 {
    font-size: 3rem;
    font-family: "Abril Fatface", cursive;
  }
  p {
    font-family: "Abril Fatface", cursive;
    font-size: 1.5rem;
    span {
      color: $gold;
    }
  }
}

form {
  position: relative;
  display: flex;
  width: 70%;
  input {
    width: 100%;
    font-size: 1.3rem;
    padding: 10px 10px;
    border: none;
    color: #313131;
    outline-color: $gold;
    &::placeholder {
      color: #999;
    }
  }
  button {
    width: 8rem;
    background: $gold;
    border: none;
    outline: none;
    transition: all 100ms ease-in-out;
    i {
      font-size: 1.5rem;
    }
    &:hover {
      cursor: pointer;
      background: #977542;
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b3b3b3;
    background: #fff;
    overflow: hidden;
  }
  label {
    border: none;
    font-size: 1.3rem;
    padding: 0 10px;
    font-weight: 600;
    background: #fff;
    color: #6d6d6d;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

main {
  padding: 0 5vw;
  min-height: 160vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

//  - media queries
@media (max-device-width: 1000px) {
  form {
    width: 90%;
  }
}

@media (max-device-width: 700px) {
  form {
    width: 95%;
    input {
      font-size: 1rem;
      padding: 10px 10px;
    }
    button {
      i {
        font-size: 1.2rem;
      }
    }
    label {
      font-size: 1.1rem;
      padding: 0 10px;
      font-weight: 500;
    }
  }
}

@media (max-device-width: 510px) {
  form {
    width: 98%;
    button {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 110%);
      height: 100%;
      width: 60%;
    }
  }
}

@media (max-device-width: 410px) {
}
</style>
