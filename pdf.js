function print(){
    const element= document.getElementById("journaliste");
    html2pdf()
    .from(element)
    .save();
}