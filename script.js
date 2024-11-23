
// Typing effect function
function typeWriter(text, elementId, speed, callback) {
  const element = document.getElementById(elementId);
  let index = 0;

  function type() {
      if (index < text.length) {
          element.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, speed);
      } else if (callback) {
          callback(); // Proceed to the next step after typing is done
      }
  }
  type();
}

// Main flow
document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = "Welcome ISRA AFZAAL";
  const englishText = "Today is your special day. Made this for you, hope you would like it.";
  const urduText = `وقت آپ کو خوش رکھے اسراءافضال
خوشیاں تم پر قربان ہو جائیں اور کبھی تم سے جدانہ ہوسکیں
میں سجدے میں سر کو جھکاتا اور دعا کرتا ہوں کہ تمہارے نصیب میں کوئی مشکل کوئی غم نہ لکھا جائے
رحمتوں اور نعمتوں کے دروازے ہمیشہ تم پر کھلے رہے ہیں اس طرح کہ انہیں کبھی بند ہونے کا حکم نہ ہو
ایک لمبی اور خوشیوں بھری زندگی تمہیں ملے`;

  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");

  // Step 1: Show Welcome Text
  box1.classList.remove("hidden");
  typeWriter(welcomeText, "welcome-text", 150, () => {
      // Hide box1 and show box2
      box1.classList.add("hidden");
      box2.classList.remove("hidden");
      typeWriter(englishText, "english-paragraph", 150, () => {
          // Hide box2 and show box3
          box2.classList.add("hidden");
          box3.classList.remove("hidden");
          typeWriter(urduText, "urdu-paragraph", 150, () => {
              // Redirect to the main page after Urdu paragraph is typed
              setTimeout(() => {
                  window.location.href = "main.html"; // Replace with your actual URL
              }, 2000); // Delay before redirecting
          });
      });
  });
});

