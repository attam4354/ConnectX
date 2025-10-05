// Simple example: alert on membership form submission
function submitMembershipForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you, ${name}, for joining ConnectX!`);
}
