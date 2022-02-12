$(document).ready(function() {

    let quotes = ["Be yourself; everyone else is already taken", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe", "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."];
    let author = ["Oscar Wilde", "Marilyn Monroe", "Albert Einstein", "J.K. Rowling, Harry Potter and the Goblet of Fire"];

    //to show default quote when starting a page
    fetchQuote(quotes, author);
    //Shows next quote when button is clicked
    $("#nxtQuote").click(function() {
      fetchQuote(quotes, author);
      $("#text").fadeOut("slow").fadeIn("slow");

    });

    //function to fetch and show the quote
    function fetchQuote(q, a) {
      let quoteNum = Math.floor(Math.random() * quotes.length);
      $("#text").text('" ' + q[quoteNum] + ' "');
      $("#author").text("-" + a[quoteNum]);
      $(".tweet-btn").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + q[quoteNum] + '."' + "by - " + a[quoteNum]));

      
    }
  });