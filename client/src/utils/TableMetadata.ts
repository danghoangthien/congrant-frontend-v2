import { getWithExpiry } from 'utils/localStorageHandler';

const ColumnMapParser = (columnMap: any, columnsInSetting: any) => {
  const columnArray = Object.entries(columnMap).filter(([key, value]) => {
    //console.log('entry value', value);
    return (value as any)?.defaultVisible !== false;
  });
  return {
    defaultVisibleColumns(): any {
      return Object.fromEntries(columnArray);
    },
    defaultVisibleColumnKeys(): any {
      return Object.keys(this.defaultVisibleColumns());
    },
    visibleColumns(): any {
      let keys = this.defaultVisibleColumnKeys();
      if (columnsInSetting) {
        keys = Object.keys(columnMap).filter(columnName => {
          return columnsInSetting.includes(columnName);
        });
      }
      return keys.map(columnName => {
        return columnMap[columnName];
      });
    },
  };
};

export { ColumnMapParser };
