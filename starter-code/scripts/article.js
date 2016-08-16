var articles = [];

function Article (opts){
  //TODO: DONE Use the js object we pass in to complete this constructor function
  //Save all the properties of 'opts' into 'this'
  this.author = opts.author;
  this.category = opts.category;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}


Article.prototype.toHtml = function(){
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);
  $newArticle.find('.byline a').text(this.author);
  $newArticle.find('.byline address').text(this.authorUrl);
  $newArticle.find('h1').text(this.title);
  $newArticle.find('main section').text(this.body);
  $newArticle.find('time').text(this.publishedOn);
  //TODO: DONE Now use JQuery to fill in the rest of the current template clone with properties from this particular Article instance
  //We need to fill in
  // 1. author name DONE
  // 2. author URL
  // 3. article title
  // 4. article body
  // 5. pub date

//display the date as a relative number of days ago
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

//TODO: DONE This cloned article is no longer a template, as it now has real data attached to it. We need to account for that before this current article gets rendered to our DOM.
//JUST REMOVE THE CLASS
  $newArticle.removeClass('template');
  return $newArticle;
};

//sorts most recent articles to top
ourLocalData.sort(function(firstElement, secondElement) {
  console.log(ourLocalData);
  return (new Date(secondElement.publishedOn)) - (new Date(firstElement.publishedOn));
});

//pushing the results of instantiation sorts to new array
ourLocalData.forEach(function(theCurrentArticleObject) {
  articles.push(new Article(theCurrentArticleObject));
});

//attaches to section in DOM
articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
