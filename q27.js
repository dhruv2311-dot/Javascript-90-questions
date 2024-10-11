function getFileExtension(filename) {
   
    let parts = filename.split('.');
    
   
    if (parts.length === 1 || (parts[0] === '' && parts.length === 2)) {
        return '';
    }
    
   
    return parts.pop();
}
let filename = "document.pdf";
let extension = getFileExtension(filename);
console.log(extension);  
