document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button1").addEventListener("click", function() {
        document.body.className = 'scheme1';
        showNotification("Color scheme changed to Scheme 1.");
    });
    document.getElementById("button2").addEventListener("click", function() {
        document.body.className = 'scheme2';
        showNotification("Color scheme changed to Scheme 2.");
    });
    document.getElementById("button1").addEventListener("mouseover", function() {
        handleInteraction("Hovered over Button 1!");
    });
    document.getElementById("button2").addEventListener("mouseover", function() {
        handleInteraction("Hovered over Button 2!");
    });
});
function showNotification(message) {
    alert(message);
}
function handleInteraction(message) {
    console.log(message);
}
