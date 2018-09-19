// the tableGenerator object generates a table and styles it
// it get its data such as row, columns and styles fron the input elements
// 

let tableGenartor = {  
  renderTable() {
    let tableStyles = {
      columns: document.querySelector('#columns').value,
      rows: document.querySelector('#rows').value, 
      tableWidth: document.querySelector('#tableWidth').value,
      borderWidth: document.querySelector('#borderWidth').value,
      borderColor: document.querySelector('#borderColor').value,
      tableBackground: document.querySelector('#tableBackground').value,
      headerBackground: document.querySelector('#headerBackground').value,
      fontColor: document.querySelector('#fontColor').value,
    }     
    document.querySelector('#tableContainer').innerHTML = createTable(tableStyles); 
    this.setBodyBackground();   
  },
  setBodyBackground(){
    document.querySelector('body').style.background = document.querySelector('#bodyBackground').value;
  },
  setTableWidth(){
    document.querySelector('table').style.width = document.querySelector('#tableWidth').value + '%';
  },
  setBoder(){   
    document.querySelector('table').style.border = document.querySelector('#borderWidth').value + 'px ' + 'solid ' +  document.querySelector('#borderColor').value;
  },
  setTableBackground(){
    document.querySelector('table').style.background = document.querySelector('#tableBackground').value;
  },
  populateFontFamily(){
    const fontFamily = ['Arial','Helvetica','Gill Sans'];
    document.querySelector('#fontType').innerHTML = fontFamily.map(fontType => {
      return `<option value="${fontType}">${fontType}</option>`;
    });
  }
}
 
tableGenartor.populateFontFamily(); // populate the the select element with the font types 