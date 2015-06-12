App.QuestionsController = Ember.Controller.extend({
  askingQuestion: false,
  actions: {
    askQuestion: function() {
      this.set('askingQuestion', false);
    },
    showQuestionForm: function() {
      this.set('askingQuestion', true);
    }
  }
});
