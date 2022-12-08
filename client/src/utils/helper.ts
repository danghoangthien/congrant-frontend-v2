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

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function* gCountDown(counter, sleepMs = 1_000) {
  while (counter >= 0) {
    await sleep(sleepMs);
    yield counter--;
  }
}

async function* gInterval(sleepMs = 1_000) {
  let id = 1;
  while (true) {
    await sleep(sleepMs);
    yield id++;
  }
}

const randomOutput = arr => arr[Math.floor(Math.random() * arr.length)];

function hexToRgbA(hex: string, opactity = null) {
  var c: any;

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + `,${opactity || 1})`;
  }
  throw new Error('Bad Hex');
}

export { createCsvDownload, sleep, gCountDown, gInterval, randomOutput, hexToRgbA };
