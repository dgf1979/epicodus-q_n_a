App.Answer = DS.Model.extend({
  answer: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
