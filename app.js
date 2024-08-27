document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('studentName').value;
    const email = document.getElementById('studentEmail').value;
    const phone = document.getElementById('studentPhone').value;
    const course = document.getElementById('studentCourse').value;

    if (name && email && phone && course) {
        document.getElementById('message').innerHTML = `<p>Thank you, ${name}! Your registration for the ${course} course has been received.</p>`;
        document.getElementById('studentForm').reset();
    } else {
        document.getElementById('message').innerHTML = `<p class="error">Please fill out all fields.</p>`;
    }
});
