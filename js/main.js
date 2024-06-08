document.getElementById('submit').addEventListener('click', function (event) {
    console.log("Button clicked.");
    // Retrieve input values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var service = document.getElementById('service').value;
    var expert = document.getElementById('expert').value;
    var date = document.getElementById('date').value;
    var appointmentTime = document.getElementById('appointmentTime').value;

    var bookingModal = document.getElementById('bookingModal');


    // Construct content for confirmation modal
    var confirmationMessage = 'First Name: ' + firstName + '<br>' +
        'Last Name: ' + lastName + '<br>' +
        'Email: ' + email + '<br>' +
        'Service: ' + service + '<br>' +
        'Expert: ' + expert + '<br>' +
        'Date: ' + date + '<br>' +
        'Appointment Time: ' + appointmentTime;

    // Populate confirmation modal with content


    // Show confirmation modal
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
});