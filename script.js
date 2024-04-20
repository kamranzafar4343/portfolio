document.getElementById("button1").addEventListener("click", function() {
    // Replace 'resume.pdf' with the path to your resume file
    var resumePath = 'kamrans-resume.pdf';
    
    // Create a temporary anchor element
    var link = document.createElement('a');
    link.href = resumePath;
    
    // Set the download attribute and file name
    link.download = 'kamrans-resume.pdf';
    
    // Programmatically click the link to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });