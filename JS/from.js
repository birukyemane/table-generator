function populateFontFamilies(){
  const fontFamilies = ['Arial','Helvetica Narrow','Gill Sans','Lucida','Times','Times New Roman','Palatino',
  'Bookman'  
  ];
  document.querySelector('#fontType').innerHTML = fontFamilies.map(fontFamily => {
    return `<option value="${fontFamily}">${fontFamily}</option>`;
  });
}

function populateFontWeights(){
  const fontWeights = ['normal','bold','bolder','lighter','100','200','300',
  '400','500','600','700','800','900'
  ];
  document.querySelector('#fontWeight').innerHTML = fontWeights.map(fontWeight => {
    return `<option value="${fontWeight}">${fontWeight}</option>`;
  });
}

function populateTextAlign(){
  const textAlign = ['center','left','right','justify'];
  document.querySelector('#textAlign').innerHTML = textAlign.map(value => {
    return `<option value="${value}">${value}</option>`;
  });
}

