<template>
  <div class="headerWrapper">

    <header :class="{ active: isActive }">
      <div class="wrapper">
        <div class="logo">
          <p>Mercy</p>
          <p>Health</p>
        </div>
        <div class="hamburger" @click="toggleNav">
          <div class="hamburgerOne line"></div>
          <div class="hamburgerTwo line"></div>
          <div class="hamburgerThree line"></div>
        </div>
        <nav class="webNav">
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
        </nav>
        <nav class="mobileNav">
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
          <div class="logo">
            <p>Mercy</p>
            <p>Health</p>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    document
      .querySelectorAll(".mobileNav li")
      .forEach(li => li.addEventListener("click", this.toggleNav));
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 10) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    toggleNav() {
      document
        .querySelectorAll(".mobileNav, div.hamburger .line")
        .forEach(el => {
          el.classList.toggle("active");
        });
    },
  }
}
</script>
<style lang="scss" scoped>
.headerWrapper {
  height: 100px;
}

header {
  height: 100px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  background-color: white;
  width: 100%;
  z-index: 8;

  &.active {
    height: 70px;
    box-shadow: 0px 10px 40px -20px rgba(#3e5847, 0.8);
  }

  .wrapper {
    display: flex;
    position: relative;
    justify-content: space-between;

    .logo {
      margin-right: 20px;

      p {
        margin-bottom: 0;
      }
    }

    nav ul {
      list-style: none;
      display: flex;
      text-align: center;

      li {
        font-size: 20px;
        // font-weight: bold;
        color: $grey;
        font-family: $titleFont;

        .nuxt-link-exact-active,
        a:hover, a:focus {
          transform: color 0.5s ease;
          color: $green
        }
      }
    }

    .hamburger {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-75%);
      right: 15px;
      z-index: 10;
      padding: 10px;

      .line {
        background-color: $green;
      }

      &:hover,
      &:focus {
        cursor: pointer;
      }

      div {
        position: relative;
        width: 35px;
        height: 4px;
        border-radius: 5px;
        transition: all 0.3s;

        &.hamburgerOne {
          top: 0px;

          &.active {
            transform: rotate(45deg);
            transform-origin: top left;
          }
        }

        &.hamburgerTwo {
          top: 8px;

          &.active {
            opacity: 0;
          }
        }

        &.hamburgerThree {
          top: 16px;

          &.active {
            transform: rotate(-45deg);
            transform-origin: bottom left;
          }
        }
      }
    }
  }
}

.webNav {
  display: flex;
  align-items: center;

  ul {
    flex-direction: row;
    margin-bottom: 0;
    
    li {
      margin-right: 20px;
    }
  }
}


.mobileNav {
  display: none;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  position: fixed;
  top: 0;
  right: -310px;
  box-shadow: 0px 10px 40px -20px rgba(#3e5847, 0.8);
  transition: all 0.5s ease;
  z-index: 9;
  background-color: white;

  &.active {
    right: 0px;
  }

  ul {
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin-bottom: 50px;

    li {
      height: 40px;

      a {
        width: 100%;
        height: 100%;
      }
    }
  }
}


@media (max-width: 767px) {
  .webNav {
    display: none;
  }

  .hamburger {
    display: block !important;
  }

  .mobileNav {
    display: flex;
  }
}
</style>