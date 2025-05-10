//your JS code here. If required.
// Ensure input is converted to uppercase when losing focus
document.getElementById('fname').addEventListener('blur', function () {
  this.value = this.value.toUpperCase();
});
