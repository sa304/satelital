function score() {
  var q1 = document.forms.form.q1.value;
  var q2 = document.forms.form.q2.value;
  var q3 = document.forms.form.q3.value;
  var q4 = document.forms.form.q4.value;
  var q5 = document.forms.form.q5.value;
  var q6 = document.forms.form.q6.value;
  var q7 = document.forms.form.q7.value;
  var q8 = document.forms.form.q8.value;
  var q9 = document.forms.form.q9.value;
  var q10 = document.forms.form.q10.value;
  var q11 = document.forms.form.q11.value;
  var q12 = document.forms.form.q12.value;
  var q13 = document.forms.form.q13.value;
  var q14 = document.forms.form.q14.value;
  var q15 = document.forms.form.q15.value;
  var q16 = document.forms.form.q16.value;
  var q17 = document.forms.form.q17.value;
  var q18 = document.forms.form.q18.value;
  var q19 = document.forms.form.q19.value;
  var q20 = document.forms.form.q20.value;
  var q21 = document.forms.form.q21.value;
  var q22 = document.forms.form.q22.value;
  var q23 = document.forms.form.q23.value;
  var q24 = document.forms.form.q24.value;
  var q25 = document.forms.form.q25.value;
  var q26 = document.forms.form.q26.value;
  var q27 = document.forms.form.q27.value;
  var q28 = document.forms.form.q28.value;
  var q29 = document.forms.form.q29.value;
  var q30 = document.forms.form.q30.value;
  var q31 = document.forms.form.q31.value;
  var q32 = document.forms.form.q32.value;
  var q33 = document.forms.form.q33.value;
  var q34 = document.forms.form.q34.value;
  var q35 = document.forms.form.q35.value;

  var questions = [
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    q15,
    q16,
    q17,
    q18,
    q19,
    q20,
    q21,
    q22,
    q23,
    q24,
    q25,
    q26,
    q27,
    q28,
    q29,
    q30,
    q31,
    q32,
    q33,
    q34,
    q35
  ];//ultima no lleva coma

  var answers = [
    "c", //1
    "c", //2
    "b", //3
    "c", //4
    "e", //5
    "d", //6
    "e", //7
    "d", //8
    "c", //9
    "a", //10
    "a", //11
    "b", //12
    "a", //13
    "e", //14
    "b", //15
    "d", //16
    "c", //17
    "d", //18
    "d", //19
    "d", //20
    "c", //21
    "a", //22
    "b", //23
    "d", //24
    "f", //25
    "d", //26
    "a", //27
    "b", //28
    "a", //29
    "a", //30
    "b", //31
    "c", //32
    "a", //33
    "b", //34
    "c", //35
  ];//ultima no lleva coma

  var points = 0;
  var total = 35;

  for (var i = 0; i < total; i++) {
    if (questions[i] === answers[i]) {
      points = points + 1;
    }
  }

  var q = document.getElementById("rada");

  q.innerHTML = "Obtuviste " + points + " puntos de " + total;

  return false;
}
