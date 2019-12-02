<template>
  <div class="home">
    <header>
      <h1>Find It</h1>
      <h3>What was the name of that one place?</h3>
      <p>
        Lets
        <span>Find It</span>
      </p>
      <div @click="handleAction" id="home__action-wrapper">
        <a>Search Now</a>
      </div>
    </header>
    <main>
      <section>
        <div>
          <h3>Well Hello There</h3>
          <h1>Welcome to Find It</h1>
          <p class="breakDot">•</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            optio eaque deleniti quisquam aliquam repudiandae praesentium,
            reprehenderit placeat repellat sed ipsam harum laboriosam,
            temporibus itaque sint totam vel? Eaque, amet.
          </p>
          <div @click="handleAction">
            <a>Find A Place</a>
          </div>
        </div>
        <div id="welcome__images">
          <img src="../assets/images/welcomeOne.jpg" />
          <img src="../assets/images/welcomeTwo.jpg" />
        </div>
      </section>
      <section>
        <div>
          <h3>Testimonials</h3>
          <h1>Happy Customers</h1>
          <p>•</p>
        </div>
        <div id="cards__container">
          <TestimonialCard
            class="test-card"
            imageUrl="demoReviewOne.jpeg"
            name="Jerry"
          />
          <TestimonialCard
            class="test-card"
            imageUrl="demoReviewTwo.jpg"
            name="Macy"
          />
          <TestimonialCard
            class="test-card"
            imageUrl="demoReviewThree.jpg"
            name="Ashley"
          />
        </div>
      </section>
      <section>
        <h3>Don't Miss</h3>
        <h1>Features Coming Soon</h1>
        <p>•</p>
        <div id="feature__cards">
          <FeaturesCard
            imageUrl="https://images.pexels.com/photos/78783/submachine-gun-rifle-automatic-weapon-weapon-78783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            date="May 4, 2020"
            tech="Step One"
            title="Weapons"
          />
          <FeaturesCard
            imageUrl="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            date="May 4, 2020"
            tech="Step Two"
            title="Robots"
          />
          <FeaturesCard
            imageUrl="https://images.pexels.com/photos/59197/pexels-photo-59197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            date="May 4, 2020"
            tech="Step Three"
            title="World Domination"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import TestimonialCard from "../components/TestimonialCard";
import FeaturesCard from "../components/FeaturesCard";
export default {
  name: "home",
  components: {
    TestimonialCard,
    FeaturesCard
  },
  methods: {
    handleAction() {
      this.$router.push("/search");
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
    url("../assets/images/homeBg.jpg") no-repeat center;
  background-size: cover;
  min-height: 90vh;
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
    text-align: center;
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

#home__action-wrapper {
  margin: 30px;
  transition: all 100ms ease-in-out;
  a {
    font-size: 1rem;
    font-weight: 600;
    border: 1px solid#fff;
    border-radius: 50px;
    padding: 10px 35px;
    transition: all 100ms ease-in-out;
    &:hover {
      cursor: pointer;
      color: $gold;
      background: #fff;
      border-color: #fff;
    }
  }
}

.breakDot {
  margin: 1vh 0;
  color: #333 !important;
  font-size: 2rem !important;
}

main {
  section {
    min-height: 90vh;
    &:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 40%;
        h3 {
          font-family: "Ruthie", cursive;
          color: $gold;
          font-size: 2.5rem;
        }
        h1 {
          font-size: 3rem;
          font-family: "Abril Fatface", cursive;
        }
        p {
          font-size: 0.9rem;
          width: 80%;
          color: #999;
        }
        div {
          border: 2px solid #111;
          border-radius: 50px;
          margin: 20px 0;
          transition: 100ms all ease-in-out;
          a {
            text-transform: uppercase;
            font-weight: 600;
            padding: 10px 0;
          }
          &:hover {
            cursor: pointer;
            color: #fff;
            background: #111;
          }
        }
      }
    }
    &:nth-child(2) {
      background: linear-gradient(#111111c0, #111111c0),
        url("../assets/images/reviewsBg.jpg") no-repeat center;
      background-size: cover;
      padding: 7vh 0;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        h3 {
          font-family: "Ruthie", cursive;
          color: $gold;
          font-size: 3rem;
        }
        h1 {
          font-size: 3.5rem;
          font-family: "Abril Fatface", cursive;
          color: #fff;
        }
        p {
          font-size: 2.5rem;
          width: 80%;
          color: #999;
        }
      }
    }
    &:nth-child(3) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 3vh 10vw;
      margin: 0 0 10vh;
      h3 {
        margin: 30px 0 0;
        font-family: "Ruthie", cursive;
        color: $gold;
        font-size: 3rem;
      }
      h1 {
        font-size: 3.5rem;
        font-family: "Abril Fatface", cursive;
        color: #111;
      }
      p {
        font-size: 1.5rem;
        width: 80%;
        color: #555;
        margin: 0 0 30px;
      }
    }
  }
}

#welcome__images {
  height: 70vh;
  position: relative;
  img {
    width: 60%;
    position: absolute;
    &:nth-child(1) {
      z-index: 1;
      width: 80%;
      top: 0;
      left: 0;
    }
    &:nth-child(2) {
      width: 60%;
      bottom: 0;
      right: 0;
    }
  }
}

#cards__container {
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#feature__cards {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

// - Header Media Queries
@media (max-device-width: 480px) {
  header {
    h1 {
      font-size: 4rem;
    }
    h3 {
      font-size: 2.5rem;
      margin: 0 0 1vh;
    }
    p {
      font-size: 1.5rem;
    }
  }
}

// - Welcome Section Media Queries
@media (max-device-width: 750px) {
  main {
    section {
      &:nth-child(1) {
        div {
          width: 45%;
          h3 {
            font-size: 2rem;
          }
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 0.8rem;
          }
          div {
            a {
              font-size: 0.8rem;
              padding: 8px 0;
            }
          }
        }
      }
    }
  }

  #welcome__images {
    height: 50vh;
    img {
      &:nth-child(1) {
        width: 70%;
        top: 0;
        left: 0;
      }
      &:nth-child(2) {
        width: 60%;
        bottom: 0;
        right: 0;
      }
    }
  }
}
@media (max-device-width: 750px) {
  main {
    section {
      &:nth-child(1) {
        div {
          width: 45%;
          h3 {
            font-size: 2rem;
          }
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 0.8rem;
          }
          div {
            a {
              font-size: 0.8rem;
              padding: 8px 0;
            }
          }
        }
      }
    }
  }

  #welcome__images {
    height: 40vh;
    width: 40%;
    img {
      &:nth-child(1) {
        width: 70%;
        top: 0;
        left: 0;
      }
      &:nth-child(2) {
        width: 60%;
        bottom: 0;
        right: 0;
      }
    }
  }
}
@media (max-device-width: 620px) {
  #welcome__images {
    display: none;
  }

  main {
    section {
      &:nth-child(1) {
        div {
          width: 85%;
          h3 {
            font-size: 2.5rem;
          }
          h1 {
            font-size: 3rem;
            white-space: nowrap;
          }
          p {
            margin: 2vh 0;
            font-size: 0.9rem;
          }
          div {
            a {
              font-size: 0.8rem;
              padding: 8px 0;
            }
          }
        }
      }
    }
  }
}
@media (max-device-width: 430px) {
  main {
    section {
      &:nth-child(1) {
        div {
          h3 {
            font-size: 2.5rem;
          }
          h1 {
            font-size: 2.5rem;
          }
          p {
            margin: 2vh 0;
            font-size: 0.9rem;
          }
          div {
            a {
              font-size: 0.8rem;
              padding: 8px 0;
            }
          }
        }
      }
    }
  }
}

// - Testimonials Media Queries
@media (max-device-width: 842px) {
  .test-card {
    &:nth-child(1) {
      display: none;
    }
  }
}
@media (max-device-width: 624px) {
  .test-card {
    &:nth-child(2) {
      display: none;
    }
  }
}
@media (max-device-width: 550px) {
  main {
    &:nth-child(2) {
      padding: 0;
      div {
        h3 {
          font-size: 3rem !important;
        }
        h1 {
          font-size: 2.5rem !important;
        }
        p {
          font-size: 2.5rem;
        }
      }
    }
  }
}

// - Features Media Queries
@media (max-device-width: 1024px) {
  #feature__cards {
    flex-direction: column;
  }
}
@media (max-device-width: 548px) {
  main {
    section {
      &:nth-child(3) {
        h3 {
          font-size: 2.5rem;
        }
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
