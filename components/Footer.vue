<template>
  <footer>
    <div class="wrapper">
      <div class="logoContainer">
        <div class="logo">
          <p>Mercy</p>
          <p>Health</p>
        </div>
        <div class="socials">
          <img src="/img/svg/fb.svg" alt="">
          <img src="/img/svg/ins.svg" alt="">
          <img src="/img/svg/twt.svg" alt="">
          <img src="/img/svg/link.svg" alt="">
        </div>
      </div>
      <div class="links">
        <h2>Useful Links</h2>
        <ul>
          <li>
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/team">
              Team
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="contact">
        <h2>Contact Us</h2>
        <p><a-icon type="phone" />123-123-1234</p>
        <p><a-icon type="mail" />123456@mail.com</p>
        <p style="margin-bottom: 0px"><a-icon type="environment" />123-456 Street Ave.</p>
        <p style="padding-left: 24px">Vancouver, BC, V3N 1T4</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
footer {
  background-image: linear-gradient(to top, $teal, $green 50%);
  padding: 30px 0;
  color: white;

  h2 {
    font-weight: bold;
    color: white;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    // align-items: center;
  }
  
  .socials {
    display: flex;

    img {
      max-width: 25px;
      max-height: 25px;
      margin-right: 10px;
      filter: invert(180);
    }
  }

  .links {
    ul {
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;

      li {
        margin-bottom: 5px;
      }
    }
  }

  .contact {
    p {
      i {
        margin-right: 10px;
        transform: scaleX(-1);
      }
    }
  }
}

@media(max-width: 767px) {
  footer {
    padding-bottom: 0;
    .wrapper {
      flex-direction: column;
      padding-left: 30px;

      .logoContainer, .links, .contact {
        margin-bottom: 30px;
      }
    }
  }
}
</style>