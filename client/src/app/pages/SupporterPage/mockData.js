const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John 22',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'John 44',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '4',
    name: 'John rr',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '5',
    name: 'John 5',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '6',
    name: 'John 6',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '7',
    name: 'John 7',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '8',
    name: 'John 8',
    age: 23,
    address: '10 Downing Street',
  },
  {
    key: '9',
    name: 'John 9',
    age: 66,
    address: '10 Downing Street',
  },
  {
    key: '10',
    name: 'John 10',
    age: 11,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const pagination = {
  current_page: 1,
  limit: 1,
  total_items: 10,
  total_page: 10,
};

export { columns, dataSource, pagination };
