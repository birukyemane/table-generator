// when table is generated append it to DOM and styles it
function renderTable() {
  // append the generated table
  let  columns = document.querySelector('#columns').value, rows = document.querySelector('#rows').value;    
  document.querySelector('#tableContainer').innerHTML = table(rows, columns); 
  // set table styles 
  this.setStyle('body','background','#bodyBackground','');
  this.setStyle('table','width','#tableWidth','%');
  this.setStyle('table','background','#tableBackground','');
  this.setStyle('tHead','background','#headerBackground','');
  this.setStyle('tBody','color','#fontColor','');
  this.setBoder();
  this.setStyle('tBody','fontFamily','#fontType','')
}

// update styles whenever input element changes 
function setStyle(element,property,inputElement,measurment){
  document.querySelector(element).style[property] = document.querySelector(inputElement).value + measurment;
}
function setBoder(){   
  let items = document.querySelectorAll('td,th,table');
  items.forEach( item => {
    item.style.border = document.querySelector('#borderWidth').value + 'px ' + 'solid ' +  document.querySelector('#borderColor').value;;
  });
  document.querySelector('table').style.borderCollapse='collapse';    
}  

// populate select elements from array when the page loads
populateFontFamilies(); 
populateFontWeights();
populateTextAlign();