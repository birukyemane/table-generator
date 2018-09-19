// the tableGenerator object generates a table and styles it
// it get its data such as row, columns and styles fron the input elements
// 

let tableGenartor = {  
  renderTable() {
    let  columns = document.querySelector('#columns').value, rows = document.querySelector('#rows').value;    
    document.querySelector('#tableContainer').innerHTML = createTable(rows, columns); 
    this.setStyle('body','background','#bodyBackground','');
    this.setStyle('table','width','#tableWidth','%');
    this.setStyle('table','background','#tableBackground','');
    this.setStyle('tHead','background','#headerBackground','');
    this.setStyle('tBody','color','#fontColor','');
    this.setBoder();
    this.setStyle('tBody','font-family','#fontType','')
  },

  setStyle(element,property,inputElement,measurment){
    document.querySelector(element).style[property] = document.querySelector(inputElement).value + measurment;
  },
   
  setBoder(){   
    let items = document.querySelectorAll('td,th,table');
    items.forEach( item => {
      item.style.border = document.querySelector('#borderWidth').value + 'px ' + 'solid ' +  document.querySelector('#borderColor').value;;
    });
    document.querySelector('table').style.borderCollapse='collapse';
    
  },
  
  populateFontFamilies(){
    const fontFamilies = ['Arial','Helvetica Narrow','Gill Sans','Lucida','Times','Times New Roman','Palatino',
    'Bookman'  
  ];
    document.querySelector('#fontType').innerHTML = fontFamilies.map(fontFamily => {
      return `<option value="${fontFamily}">${fontFamily}</option>`;
    });
  }
}
 
tableGenartor.populateFontFamilies(); // populate the the select element with the font types 