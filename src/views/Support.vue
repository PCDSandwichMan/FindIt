<template>
  <div>
    <header>
      <h1>Contact Us</h1>
      <h3>Get In Touch</h3>
    </header>
    <main>
      <div id="main__info">
        <p
          id="info__description"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quaerat optio voluptatum. Nisi, cum veritatis. Molestiae, iusto modi ex maiores explicabo aut delectus, nobis blanditiis iure, vitae quod fugit unde! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div id="info__container">
          <div class="info__item">
            <h3>Our Address</h3>
            <p>
              555 North 1234 South
              <br />Salt Lake City, Utah
            </p>
            <h4>GET DIRECTIONS</h4>
          </div>
          <div class="info__item">
            <h3>Our Email</h3>
            <p>
              Main Email:
              <br />matthew.endicott.dev@gmail.com
            </p>
            <p>
              Management:
              <br />matthew.endicott46@gmail.com
            </p>
            <h4>SEND MESSAGE</h4>
          </div>
        </div>
        <div>
          <div class="info__item">
            <h3>Our Phone</h3>
            <p>Office Number: 555-0123</p>
            <p>Managers Number: 555-1234</p>
            <h4>CALL US</h4>
          </div>
          <div class="info__item">
            <h3>Follow Us</h3>
            <div id="icons-wrapper">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest"></i>
            </div>
          </div>
        </div>
      </div>

      <div id="main__form">
        <form id="contactForm">
          <div>
            <input type="text" placeholder="First Name:" name="firstName" required />
            <input type="text" placeholder="Email:" name="email" required />
          </div>
          <div>
            <input type="text" placeholder="Last Name:" name="lastName" required />
            <input type="text" placeholder="Phone:" name="number" required />
          </div>
          <textarea name placeholder="Message"></textarea>
        </form>
        <button form="contactForm" type="submit">Send Message</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "support"
};
</script>

<style lang="scss" scoped>
$gold: #bb9356;
$black: #1a1a1a;
$grey: #212121;

header {
  min-height: 90vh;
  background: linear-gradient(#111111a1, #11111134),
    url("../assets/images/contactBg.jpg") no-repeat center;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Ruthie", cursive;
    font-size: 4rem;
    color: $gold;
  }
  h3 {
    font-size: 5rem;
    font-family: "Abril Fatface", cursive;
  }
}

main {
  min-height: 80vh;
  padding: 10vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  #main__info {
    margin: 0 1.5% 0 0;
    width: 37.6%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    #info__description {
      color: #888;
      font-size: 0.9rem;
    }
  }
  #main__form {
    margin: 0 0 0 1.5%;
    width: 40%;
    height: 70%;
  }
}

.info__item {
  min-height: 170px;
  padding: 10px;
  &:nth-child(even) {
    margin: 0 10px 0 0;
  }
  h3 {
    font-weight: 500;
    margin: 0 0 15px;
  }
  h4 {
    color: $gold;
    font-weight: 700;
    font-size: 0.9rem;
    transition: 300ms all ease-in;
    &:hover {
      cursor: pointer;
      color: #111;
    }
  }
  p {
    font-size: 0.8rem;
    color: #999;
    margin: 4px 0;
  }
}

#icons-wrapper {
  display: flex;
  flex-direction: row;
}
i {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background: $black;
  height: 35px;
  width: 35px;
  margin: 10px 5px;
  transition: all 150ms ease-in;
  &:hover {
    cursor: pointer;
    background-color: $gold;
  }
}

#main__form {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  input {
    line-height: 2rem;
    font-size: 0.9rem;
    border: 1px solid #9999993a;
    width: 50%;
    margin: 15px;
    padding: 5px 10px;
    &:focus {
      outline: 1px solid $gold;
    }
    &::placeholder {
      color: #999999ce;
    }
  }
  textarea {
    margin: 15px 0;
    font-size: 0.9rem;
    border: 1px solid #9999993a;
    width: 95%;
    height: 20vh;
    padding: 10px 10px;
    resize: none;
    &:focus {
      outline: 1px solid $gold;
    }
    &::placeholder {
      color: #999999ce;
    }
  }
}

button {
  width: 94.5%;
  background: #222;
  color: #fff;
  margin: 20px 0;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  line-height: 49px;
  height: 51px;
  letter-spacing: 0.28px;
  transition: 50ms ease-in all;
  &:hover {
    cursor: pointer;
    background: #bb9356;
  }
}

// - Header Media Queries
@media (max-device-width: 500px) {
  header {
    h1 {
      font-size: 3rem;
    }
    h3 {
      font-size: 4rem;
    }
  }
}
@media (max-device-width: 400px) {
  header {
    h1 {
      font-size: 2rem;
    }
    h3 {
      font-size: 3rem;
    }
  }
}

// - Main Media Queries
@media (max-device-width: 1000px) {
  form {
    div {
      flex-direction: column;
    }
    input {
      width: 100%;
      margin: 5px 0;
    }
    textarea {
      width: 100%;
    }
  }
}

@media (max-device-width: 700px) {
  main {
    flex-direction: column;
  }
  #main__info {
    width: 90vw !important;
  }
  form {
    width: 90vw !important;
    div {
      flex-direction: column;
    }
  }
}
</style>