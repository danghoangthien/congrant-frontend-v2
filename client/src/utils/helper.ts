const createCsvDownload = (header, data, fileName = 'data.csv') => {
  let csv_str = header.join(',');
  csv_str += `\n`;
  csv_str += data.join('\n');
  console.log(csv_str);
  var downloadLink = document.createElement('a');
  var blob = new Blob(['\uFEFF' + csv_str], {
    type: 'text/csv; charset=utf-8',
  });
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = fileName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export { createCsvDownload };
