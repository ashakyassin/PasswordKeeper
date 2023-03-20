// Client facing scripts here
$(() => {
  $('#login-form').on('submit', (event) => {
    event.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();

    $.ajax({
      url: '/auth/login',
      method: 'POST',
      data: { email, password },
      success: () => {
        window.location.href = '/allAccounts';
      }
    }); // ajax
  }); // click event

});




