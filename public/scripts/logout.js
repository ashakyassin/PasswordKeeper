$(() => {
  $('#sign-out-btn').on('click', (event) => {
    console.log("hello")
    $.ajax({
      url: '/auth/logout',
      method: 'GET',
      success: () => {
        window.location.href = '/auth/login';
      }
    });
  });
});
