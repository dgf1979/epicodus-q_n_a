App.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'question/:question_id'});
  this.resource('edit-question', {path: 'edit-question/:question_id'});
});
