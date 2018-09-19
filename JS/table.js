// returns html code of the table generated 
function createTable(styles){  
  let tableStyle = `"width:${styles.tableWidth}% ; border:${styles.borderWidth}px solid 
                    ${styles.borderColor}; border-collapse:collapse; background:${styles.tableBackground}"`;
  return `<table id="tableID" style=${tableStyle}>  
            ${createHeaders(styles)} 
            <tbody style="color:${styles.fontColor}">
             ${createRows(styles)}
            </tbody>
         </table>`; // add rows to the table
}

function createHeaders(styles){
  let header = '';
  let headerStyle = `background:${styles.headerBackground}`;
  for(let i=1;i <= styles.columns;i++){
    header += `<th style=${headerStyle}>Head${i}</th>`;
  }
  //return header;
  console.log('header is', header,'coulumns are', styles.columns)
  return `<tr> ${header}</tr>`;
}

function createRows(styles){
  let row = `<tr> ${createCells(styles)}</tr>`;  
  return row.repeat(Number(styles.rows)); 
}

function createCells(styles){
  let cell = `<td>value</td>`;
  return cell.repeat(Number(styles.columns)); 
}