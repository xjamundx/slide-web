define(function(require) {
    $.fn.ajaxForm = function(options) {
        // Plugin default options.
        var opt = $.extend({
            validate: true
        }, options);

        return this.each(function() {
            // jQuery references to form elements.
            var $form = $(this),
                $feedback = $form.find('.feedback'),
                $submitBtn = $form.find('[type="submit"]'),
                $validators = $form.find('[requireda]');

            $form.on('submit', function(e) {
                e.preventDefault();

                // As a fallback for browsers who doesn't support HTML5 form attributes,
                // validates that the input[required="required"] have at least 1 character.
                var error = null;
                if (opt.validate) {
                    $validators.each(function() {
                        if ($(this).val().length < 1) {
                            error = true;
                            $feedback
                                .removeClass('error')
                                .addClass('error')
                                .text('Please fill all the inputs.');
                            $(this).focus();
                        }
                    });
                }

                // If there isn't any error, submit the form.
                if (!error) {
                    $feedback
                        .removeClass('error')
                        .text('Creating deck...');
                    $submitBtn.attr('disabled', 'disabled');

                    // Send post to server
                    $.post($form.attr('action'), $form.serialize(), function(res) {
                        res = JSON.parse(res);

                        // If the request was accepted...
                        if (res.result === true) {
                            if (typeof opt.callback === 'function') {
                                opt.callback(res);
                            }
                        }
                        else {
                            $feedback
                                .addClass('error')
                                .text('Something went wrong.')
                        }
                    });
                }
            });
        });
    };
});