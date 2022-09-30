import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { createCsvDownload } from 'utils/helper';
import { columnMap } from '../mockDataReceived';

const Download = ({ model }) => {
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
        //console.log(columnMap[columnName].csvOutput);
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
    const fileName = `received_Supporter.csv`;
    createCsvDownload(header, csvData, fileName);
  };
  const download = async () => {
    dispatch[model].download(query);
  };
  return (
    <>
      <Button icon={<DownloadOutlined />} onClick={download}>
        {'ダウンロード'}
      </Button>
    </>
  );
};

export default Download;
