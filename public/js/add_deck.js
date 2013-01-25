// add functionality to 'add new deck' form
var add_new_deck_form_wrapper;
add_new_deck_form_wrapper = function(router, Decks){
    var $button   = $('.send_new_deck_request');
    var $name     = $('.deck_name');
    var $author   = $('.deck_author');
    var $feedback = $('.form_feedback_wrapper');
    
    // focus to name
    $name.focus();
    
    // attach even to button click
    $button.on('click', function(e){
        
        // disable button
        $button.attr('disabled', 'disabled');
        $feedback.html('Sending...');
        
        // send request to server
        $.post('/decks/add/', {name: escape($name.val()), author: escape($author.val()) }, function(res){
            var result = JSON.parse(res);
            if(typeof result.result !== 'undefined' && result.result === true){
                var navigateToNewDeck = function(){
                    router.navigate('/#decks/' + result.id, {trigger: true});
                };    
                $feedback.html('Success! Redirecting...')
                // refresh decks model and navigate to new deck
                Decks.fetch({success: navigateToNewDeck});
            } else {
                $feedback.html('Request failed!');
                $button.attr('disabled', null);
                setTimeout(function() {
                    $feedback.html('');
                }, 2000);
            }
        });
    });
};