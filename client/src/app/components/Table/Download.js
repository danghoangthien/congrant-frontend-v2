import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { createCsvDownload } from 'utils/helper';

const Download = ({ model, columnMap, fileName }) => {
  const dispatch = useDispatch();
  const { download_items } = useSelector(state => state[model]);
  const {
    location: { query },
  } = useSelector(state => state.router);

  useEffect(() => {
    if (download_items.length > 0) {
      toCSV();
    }
  }, [download_items]);

  const parseCsvHeader = () => {
    return Object.keys(columnMap).map(columnName => {
      if (!columnMap[columnName].title) {
        return '-';
      }
      return columnMap[columnName].title;
    });
  };
  const parseCSVData = () => {
    if (!download_items) {
      return [];
    }
    return download_items.map(item => {
      const rowData = Object.keys(columnMap).map(columnName => {
        if (!columnMap[columnName].csvOutput) {
          return '';
        }
        return columnMap[columnName].csvOutput(item) || 'no data';
      });
      return rowData.join(',');
    });
  };
  const toCSV = () => {
    const csvData = parseCSVData();
    const header = parseCsvHeader();
    console.log('header', header);
    const file = `${fileName || 'download'}.csv`;
    createCsvDownload(header, csvData, file);
  };
  const download = async () => {
    dispatch[model].download(query);
  };
  return (
    <>
      <Button
        className="icon-btn"
        icon={<span className="material-symbols-outlined">download</span>}
        onClick={download}
      >
        {'ダウンロード'}
      </Button>
    </>
  );
};

export default Download;
