function showResult() {
    const form = document.getElementById("catForm");
    const formData = new FormData(form);
  
    const playful = formData.get("playful"); 
    const fur = formData.get("fur"); 
    const breed = formData.get("breed"); 
  
    let result;
  
   
    if (playful === "No" && fur === "Short" && breed === "Purebred") {
      result = "Sphynx";
    } else if (playful === "Yes" && fur === "Short" && breed === "Mixed") {
      result = "Tabby ";
    } else if (playful === "No" && fur === "Long" && breed === "Purebred") {
      result = "British Shorthair";
    } else {
      result = "No specific match found!";
    }
  
    const resultDiv = document.getElementById("result");
resultDiv.innerHTML = `
  Based on your answers:
  <strong>You might like a ${result}!</strong>
`;
resultDiv.style.display = "block";


const wikiLink = document.getElementById("wikiLink");
wikiLink.style.display = "block";

}

  