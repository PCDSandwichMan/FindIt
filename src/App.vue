<template>
  <div id="app">
    <nav>
      <div id="logo-wrapper">
        <img src="./assets/images/logo.svg" alt="logo" />
      </div>
      <div id="nav">
        <router-link class="nav__item" to="/">
          Home
          <div class="nav__underline" />
        </router-link>
        <router-link class="nav__item" to="/search">
          Search
          <div class="nav__underline" />
        </router-link>
        <router-link class="nav__item" to="/support">
          Support
          <div class="nav__underline" />
        </router-link>
      </div>
    </nav>
    <transition name="view">
      <router-view />
    </transition>
    <footer>
      <section id="footer__upper">
        <div id="upper__social">
          <h3>Follow Us</h3>
          <div id="icons-wrapper">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-pinterest"></i>
          </div>
        </div>
        <div id="upper__about">
          <h1>Find It</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            facilis nesciunt aliquam itaque placeat expedita tempora
            repudiandae. Delectus laudantium obcaecati at enim aspernatur
            expedita rerum, reprehenderit ipsa? Doloremque, nesciunt vitae.
          </p>
        </div>
        <div id="upper__news">
          <h3>Newsletter</h3>
          <form action>
            <input placeholder="Subscirbe to our newsletter" type="email" name="email" />
            <button type="submit">JOIN</button>
          </form>
        </div>
      </section>
      <section id="footer__lower">
        <div id="lower__info">
          <p>
            555 North 1234 South, Salt Lake City, Utah - 55 8455 -
            matthew.endicott.dev@gmail.com
          </p>
        </div>
        <div id="lower__copy">
          <p>
            &copy; 2019 FindIt, With Love by
            <a
              href="https://www.matthewendicott.space/"
            >www.matthewendicott.space</a>
          </p>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    handleLogo() {
      this.$router.push("/");
    }
  },
  mounted() {
    const nav = document.getElementsByTagName("nav")[0];
    document.addEventListener("scroll", () => {
      if (this.$route.name === "search") {
        if (window.scrollY >= 312) {
          nav.classList.add("whiteBgTrans");
        } else {
          nav.classList.remove("whiteBgTrans");
        }
      } else {
        if (window.scrollY >= 610) {
          nav.classList.add("whiteBgTrans");
        } else {
          nav.classList.remove("whiteBgTrans");
        }
      }
    });
  }
};
</script>

<style lang="scss">
$gold: #bb9356;
$black: #1a1a1a;
$grey: #212121;
// - Custom Styles

.view-enter-active,
.view-leave-active {
  transition: all 0.4s ease-in-out;
}

.view-enter-active {
  transition-delay: 0.4s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.view-enter-to,
.view-leave {
  opacity: 1;
  transform: translateX(0px);
}

nav {
  z-index: 10;
  height: 80px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a.router-link-exact-active {
    color: $gold !important;
  }
}

.whiteBgTrans {
  background: #fff !important;
  box-shadow: 0 1px 3px #00000017;
  .nav__item {
    color: #111 !important;
    .nav__underline {
      border-bottom: 2px solid #111;
    }
    &:hover {
      color: #111;
      .nav__underline {
        width: 100%;
      }
    }
  }
}

#logo-wrapper {
  width: 5rem;
  margin: 0 30px;
  cursor: pointer;
  img {
    width: 100%;
  }
}

#nav {
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.nav__item {
  padding: 10px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  transition: all 100ms ease-in;
  .nav__underline {
    border-bottom: 2px solid $gold;
    width: 0;
    transition: all 200ms ease-in;
  }
  &:hover {
    color: $gold;
    .nav__underline {
      width: 100%;
    }
  }
}

footer {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#footer__upper {
  background: $grey;
  min-width: 100%;
  padding: 10vh 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  div {
    min-width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 0.9rem;
      font-weight: 200;
    }
  }
}

#upper__social {
  h3 {
    font-weight: 700;
  }
  #icons-wrapper {
    display: flex;
    flex-direction: row;
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    background: $black;
    height: 40px;
    width: 40px;
    margin: 10px 10px;
    transition: all 300ms ease-in;
    &:hover {
      cursor: pointer;
      background-color: $gold;
    }
  }
}
#upper__about {
  h1 {
    color: $gold;
    font-size: 2.5rem;
    font-family: "Ruthie", cursive;
  }
  p {
    width: 80%;
    text-align: center;
  }
}

#upper__news {
  h3 {
    font-weight: 700;
    margin: 0 0 10px 0;
  }
  form {
    height: 35px;
    position: relative;
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      font-style: italic;
      font-size: 0.8rem;
      padding: 0 10px;
      height: 100%;
      width: 100%;
      color: #424242;
      background: $black;
      outline: none;
      border: none;
      &::placeholder {
        color: #424242;
      }
    }
    button {
      font-size: 0.8rem;
      height: 100%;
      border: none;
      position: absolute;
      right: 0;
      background: #00000000;
      color: $gold;
      outline: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
}

#footer__lower {
  background: $black;
  min-height: 15vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  div {
    p {
      color: #c2c2c2;
      font-weight: 400;
      font-size: 0.8rem;
      &:nth-child(1) {
        margin: 10px 0;
      }
      a {
        text-decoration: none;
        color: $gold;
        font-size: 0.8rem;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

// - Nav Media Queries
@media (max-device-width: 840px) {
  #nav {
    width: 50%;
  }
}

@media (max-device-width: 470px) {
  #nav {
    width: 70%;
  }
  .nav__item {
    padding: 5px;
    font-weight: 500;
  }
}
// - Footer Media Queries
@media (max-device-width: 1160px) {
  #upper__social {
    h3 {
      font-weight: 500;
    }
  }
  #upper__news {
    h3 {
      font-weight: 500;
    }
    form {
      height: 35px;
      width: 85%;
    }
  }
}

@media (max-device-width: 850px) {
  #footer__upper {
    padding: 10vh 0;
    flex-direction: column;
    align-items: center;
    div {
      margin: 1vh 0;
    }
  }
  #upper__news {
    h3 {
      margin: 20px 0 10px 0;
    }
    form {
      width: 60vw;
    }
  }
}

// - Reset - Imports
@import url("https://fonts.googleapis.com/css?family=Abril+Fatface|Poppins:100,200,300,400,500,600,700,800,900|Ruthie&display=swap");

html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: "Poppins", sans-serif;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
