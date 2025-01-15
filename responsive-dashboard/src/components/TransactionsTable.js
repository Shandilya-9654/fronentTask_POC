import React, { useEffect, useState } from 'react';
import './TransactionsTable.scss';

const TransactionsTable = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  // Mock API Data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      const mappedData = jsonData.slice(0, 10).map(item => ({
        id: item.id,
        title: item.title,
        userId: item.userId,
      }));
      setData(mappedData);
    };

    fetchData();
  }, []);

  // Sorting Functionality
  const sortData = () => {
    const sortedData = [...data].sort((a, b) => {
      return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
    });
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="transactions-table">
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th onClick={sortData}>ID {sortOrder === 'asc' ? '↑' : '↓'}</th>
            <th>Title</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// const [searchTerm, setSearchTerm] = useState('');

// const filteredData = data.filter(row =>
//   row.title.toLowerCase().includes(searchTerm.toLowerCase())
// );

// return (
//   <div className="transactions-table">
//     <h2>Transactions</h2>
//     <input
//       type="text"
//       placeholder="Search by title..."
//       value={searchTerm}
//       onChange={e => setSearchTerm(e.target.value)}
//     />
//     <table>
//       <thead>
//         <tr>
//           <th onClick={sortData}>ID {sortOrder === 'asc' ? '↑' : '↓'}</th>
//           <th>Title</th>
//           <th>User ID</th>
//         </tr>
//       </thead>
//       <tbody>
//         {filteredData.map(row => (
//           <tr key={row.id}>
//             <td>{row.id}</td>
//             <td>{row.title}</td>
//             <td>{row.userId}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );


export default TransactionsTable;
