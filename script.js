function scrollTo(element)
{
    window.scroll(
        {
            left: 0 ,
            top: element.offsetTop,
            behavior: "smooth" 
        }
    )
}


let btn = document.querySelector('.contacts_aboutMe');
let footer = document.querySelector("#footer");





btn.addEventListener("click",() =>{scrollTo(footer)});

/*


Reading file from folder


*/

document.getElementById("inputFileToRead")
  .addEventListener("change", function () {
    var fr = new FileReader();
    fr.readAsText(this.files[0]);
    fr.onload = function () {
      document.getElementById("textFromFile").innerText = fr.result;
    };  
  });