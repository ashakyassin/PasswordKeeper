// Client facing scripts here
$(() => {
  $('#add-new-account-btn').on('submit', (event) => {
    $.ajax({
      method: 'GET',
      url: '/addNewAccount',
      success: () => {
        window.location.href = '/addNewAccount';
      }
    }); // ajax
  }); // click event

});



