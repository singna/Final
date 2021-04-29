var navEle = document.body.querySelector(".nav");
var pages = ["Grade View", "Add Grade"];
var list = [];
document.body.querySelector(".itemText").style.display = "none";
document.body.querySelector(".sumbitsecond").style.display = "none";
document.body.querySelector(".importance_input").style.display = "none";
var clear = document.createElement("div");

function submit() {
  var sumbitEle = document.body.querySelector(".sumbitmessage");
  var username = document.body.querySelector(".username").value;
  var password = document.body.querySelector(".password").value;
  if (username === "cool" && password === "password") {
    document.body.querySelector(".sumbitmessage").innerHTML = "";
    document.body.querySelector(".username").style.display = "none";
    document.body.querySelector(".submit").style.display = "none";
    document.body.querySelector(".password").style.display = "none";
    for (var i = 0; i < pages.length; i++) {
      pageMaker(pages[i]);
    }
    document.body
      .querySelector(".sumbitsecond")
      .addEventListener("click", function () {
        sumbit1();
      });
  } else if (username != "cool") {
    document.body.querySelector(".sumbitmessage").innerHTML =
      "The username entered was inncorrect";
  } else if (password != "password") {
    document.body.querySelector(".sumbitmessage").innerHTML =
      "The password entered was inncorrect";
  }
}

document.body.querySelector(".submit").addEventListener("click", function () {
  submit();
});

function renderlist() {
  for (var i = 0; i < list.length; i++) {
    var listEle = document.createElement("div");
    document.body.appendChild(clear);
    clear.appendChild(listEle);
    listEle.innerHTML = list[i].Name + " " + list[i].Grade;
  }
}

function sumbit1() {
  var text = document.body.querySelector(".itemText").value;
  var textimportance1 = document.body.querySelector(".importance_input").value;
  if (text.length <= 1) {
    document.body.querySelector(".itmMess").innerHTML =
      "The first input is short in characters";
  } else if (isNaN(textimportance1)) {
    document.body.querySelector(".itmMess").innerHTML =
      "The second input is not a number";
  } else if (textimportance1.length < 1) {
    document.body.querySelector(".itmMess").innerHTML =
      "The second input is short in characters";
  } else if (text.length > 1) {
    list.push({
      Name: text,
      Grade: textimportance1
    });
    writeStuff("Grade View");
    document.body.querySelector(".itemText").value = "";
    document.body.querySelector(".importance_input").value = "";
    document.body.querySelector(".itmMess").innerHTML = " ";
  }
}

function pageMaker(pg) {
  this.button = document.createElement("button");
  this.button.addEventListener("click", function () {
    writeStuff(pg);
  });
  this.button.innerHTML = pg;
  navEle.appendChild(this.button);
}

function writeStuff(pg) {
  if (pg == "Add Grade") {
    document.body.querySelector(".itemText").style.display = "initial";
    document.body.querySelector(".sumbitsecond").style.display = "initial";
    document.body.querySelector(".importance_input").style.display = "initial";
    clear.innerHTML = "";
  } else if (pg == "Grade View") {
    document.body.querySelector(".itemText").style.display = "none";
    document.body.querySelector(".sumbitsecond").style.display = "none";
    document.body.querySelector(".importance_input").style.display = "none";
    clear.innerHTML = "";
    renderlist();
  }
}