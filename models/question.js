App.Question = DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
