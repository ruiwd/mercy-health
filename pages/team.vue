<template>
  <main>
    <section class="hero">
      <div class="wrapper">
        <h2 data-aos="fade-up">
          Our Team
        </h2>
      </div>
    </section>
    <section class="text">
      <div class="wrapper">
        <h3 data-aos="fade-up">Management Team</h3>
        <p data-aos="fade-up">
          The applicant Mr. LIU Gang, General Manager of Shanghai Ciyuan Rehabilitation Hospital Co., Ltd., enjoys rich experience in overall corporate operation and administration. During his term of office, he led his team to execute various major strategies of the company to realize its sound development, and his responsibilities in this period are as follows:
        </p>
        <ol>
          <li data-aos="fade-up">
            Lead the comprehensive operation of the rehabilitation hospital, including market exploration, operating system construction, team building, section arrangement and design of corresponding service and business mode, procedures and system.
          </li>
          <li data-aos="fade-up">
            Complete the formulation of various procedures, systems and structure of the rehabilitation hospital.
          </li>
          <li data-aos="fade-up">
            Take full charge of and coordinate work related to personnel and team building during the operation of the rehabilitation hospital.
          </li>
          <li data-aos="fade-up">
            Cultivate service level and quality and professional skills to provide quality medical treatment, nursing and other services for clients.
          </li>
          <li data-aos="fade-up">
            Focus on and learn green therapy, vis medicatrix nature, conditioning regimen for cancer and other therapies for intractable diseases to realize“rehabilitation and health-regimen combination".
          </li>
          <li data-aos="fade-up">
            Address major emergencies and foreign relations of the hospital.
          </li>
        </ol>
        <h3 data-aos="fade-up">Parent Company Team</h3>
        <p data-aos="fade-up">
          Shanghai Ciyuan Rehabilitation Hospital Co.,Ltd, owns a high-quality professional and technical team of rehabilitation medicine and rehabilitation therapy.Its core medical team is composed of about two hundred talent with advanced educational background and high quality, including disciplinary leaders, returned experts, experts from Grade Ill hospitals and professional  linicians, rehabilitation therapists, primary nurses and so forth. It adopts classified and line-based management of general manager, departments, functional sections or business sections of the hospital, of which, the functional sections include the President's Office, Personnel Section,Medical Section, Nursing Section, Outpatient Office, Logistics Support Section,Purchasing Section,Finance Section, Information Section,Commercial Office and Rehabilitation Development Department, and the business sections comprise Clinical Section, Pharmacy  Section and Medical Technology Section.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  mounted() {
    AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  })
  }
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 350px;
  background-image: linear-gradient(to right, transparent, rgba($blue, 0.5)), url('/img/opportunities/banner1.jpg') ;
  // background-image: linear-gradient(to right, transparent, rgba($green, 0.5));
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;

    h2 {
      color: white;
      font-size: 50px;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 0;
    }
  }
}

.text {
  padding: 50px 0;
  h3 {
    font-size: 30px;
    font-style: italic;
  }
  p, li {
    color: $grey;
  }
  li {
    margin-bottom: 5px;
  }
}
</style>
