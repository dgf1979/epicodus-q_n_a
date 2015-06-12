App.QuestionController = Ember.ObjectController.extend({
  answeringQuestion: false,
  actions: {
    answerQuestion: function() {
      var newAnswer = this.store.createRecord('answer', {
        answer: this.get('answer'),
        author: this.get('answerAuthor'),
        date: new Date(),
      });
      newAnswer.save();

      var question = this.model;
      question.get('answers').pushObject(newAnswer);
      question.save();

      this.set('answeringQuestion', false);
    },
    showAnswerForm: function() {
      this.set('answeringQuestion', true);
    }
  }
});