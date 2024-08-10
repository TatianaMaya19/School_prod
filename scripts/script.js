function validateForm() {
    const name = document.getElementById( 'name' ).value.trim();
    const email = document.getElementById( 'email').value.trim();
    const message = document.getElementById( 'emessage' ).value.trim();
    
    //Validate name
    if (name === ''){
        showError('name', 'Name is required');
        return false;
    }

    //Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Invalid email address');
        return false;
    }

    //Validate message
    if (message.length <5) {
        showError( 'message' , 'Please enter message');
        return false;
    }

    // Inculde pages

    $(function () {
        var includes = $('[data-include]')
        $.each(includes, function () {
          var file = 'Include/' + $(this).data('include') + '.html'
          $(this).load(file)
        })
      })
}