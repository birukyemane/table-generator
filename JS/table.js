// returns html code of the table generated 
function createTable(rows,columns){  
  //let tableStyle = `"width:${styles.tableWidth}% ; border:${styles.borderWidth}px solid 
   //                 ${styles.borderColor}; border-collapse:collapse; background:${styles.tableBackground}"`;
  return `<table> <thead> ${createHeaders(columns)} </thead> <tbody> ${createRows(rows,columns)}  </tbody>  </table>`; // add rows to the table
}

function createHeaders(columns){
  let header = '';
  for(let i=1;i <= columns;i++){
    header += `<th>Head${i}</th>`;
  }
  return `<tr">${header}</tr>`;  
}

function createRows(rows,columns){
  return  `<tr> ${createCells(columns)}</tr>`.repeat(Number(rows)); 
}

function createCells(columns){
  return `<td>value</td>`.repeat(Number(columns)); 
}