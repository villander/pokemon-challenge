import Ember from 'ember';

const {
  Component,
  run
} = Ember;

export default Component.extend({
  classNames: ['search-box--pokemon-list'],
  didInsertElement() {
    this._super(...arguments);
    this.$().on('scroll', this, () => { this.handleScroll(); });
  },
  willDestroyElement() {
    this._super(...arguments);
    this.$().off('scroll', this, () => { this.handleScroll(); });
  },
  handleScroll() {
    const scrollHeight = this.$().prop('scrollHeight');
    const scrollPosition = this.$().scrollTop();
    const heightOfElement = this.$().innerHeight();
    if (scrollPosition + heightOfElement >= scrollHeight) {
      this.send('loadMorePokemons');
      console.log('caramba');
    }
  },
  actions: {
    loadMorePokemons() {
      run.debounce(this, () => {
        this.get('loadMorePokemons')();
      }, 300);
    }
  }
});
