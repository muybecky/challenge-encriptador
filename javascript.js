function hide(){
    document.getElementById("hide").style.display = "none";
    document.getElementById("illustration").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("copy-button").style.display = "block";
  }
  
  function encrypt() {
      x = ""
      var x = document.getElementById("encrypt").value;
  
      if (x != "") {
        hide();
        x = x.replace(/e/g, "enter");
        x = x.replace(/i/g, "imes");
        x = x.replace(/a/g, "ai");
        x = x.replace(/o/g, "ober");
        x = x.replace(/u/g, "ufat"); 
        document.getElementById("result").innerHTML = x;
        document.getElementById("encrypt").value = ""
      } 
      else {
        console.log("empty array");
      }
    }
  
    function decrypt() {
      y = ""
      var y = document.getElementById("encrypt").value;
      if (y != ""){
      hide();
      y = y.replace(/enter/g, "e");
      y = y.replace(/imes/g, "i");
      y = y.replace(/ai/g, "a");
      y = y.replace(/ober/g, "o");
      y = y.replace(/ufat/g, "u");
      document.getElementById("result").innerHTML = y;
      document.getElementById("encrypt").value = ""
    
      } 
      else {
        console.log("empty array");
      }
    }
  
  
    function copyToClickBoard(){
      var content = document.getElementById('result').innerHTML;
  
      navigator.clipboard.writeText(content)       
  }