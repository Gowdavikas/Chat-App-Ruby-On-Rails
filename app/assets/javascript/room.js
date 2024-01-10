$(function() {
  $('#new_room_message').on('ajax:success', function(event, data, status, xhr) {
    // Extract the CSRF token from meta tags
    var csrfToken = $('meta[name="csrf-token"]').attr('content');

    // Include the CSRF token in the headers of the next AJAX request
    $.ajax({
      type: 'POST',
      url: '/your_ajax_endpoint',
      headers: {
        'X-CSRF-Token': csrfToken
      },
      data: {
        // Your data here
      },
      success: function(response) {
        // Handle success
        $(this).find('input[type="text"]').val('');
      },
      error: function(xhr, status, error) {
        // Handle error
      }
    });
  });
});
