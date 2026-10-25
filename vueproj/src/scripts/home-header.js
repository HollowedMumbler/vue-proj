export default {
  mounted() {
    const header = this.$el.querySelector('.ccs-header');

    this.updateHeader = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };

    this.updateHeader();
    window.addEventListener('scroll', this.updateHeader, { passive: true });
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.updateHeader);
  },
};
