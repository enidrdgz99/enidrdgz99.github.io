let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ccd5ae;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ccd5ae;">Aprendiendo programación web y creciendo en este mundo de la tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
