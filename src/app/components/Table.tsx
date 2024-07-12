import React from 'react';

interface TableComponentProps {
  name: string;
  data: string[][];
}

const tablesData = {
    "tables": [
      {
        "name": "Quant",
        "data": [
          ["1", "❌"],
          ["2", "✅"],
          ["3", "Value 3"],
          ["4", "Value 4"],
          ["5", "Value 5"],
          ["6", "Value 6"],
          ["7", "Value 7"],
          ["8", "Value 8"],
          ["9", "Value 9"],
          ["10", "Value 10"],
          ["11", "Value 11"],
          ["12", "Value 12"],
          ["13", "Value 13"],
          ["14", "Value 14"],
          ["15", "Value 15"],
          ["16", "Value 16"],
          ["17", "Value 17"],
          ["18", "Value 18"],
          ["19", "Value 19"],
          ["20", "Value 20"],
          ["21", "Value 21"],
          ["22", "Value 22"],
          ["23", "Value 23"],
          ["24", "Value 24"],
          ["25", "Value 25"],
          ["26", "Value 26"],
          ["27", "Value 27"],
          ["28", "Value 28"],
          ["29", "Value 29"],
          ["30", "Value 30"],
          ["30", "Value 30"],
          ["31", "Value 30"],
          ["32", "Value 30"],
          ["33", "Value 30"],
        ]
      },
      {
        "name": "Verbal",
        "data": [
          ["1", "Value 1"],
          ["2", "Value 2"],
          ["3", "Value 3"],
          ["4", "Value 4"],
          ["5", "Value 5"],
          ["6", "Value 6"],
          ["7", "Value 7"],
          ["8", "Value 8"],
          ["9", "Value 9"],
          ["10", "Value 10"],
          ["11", "Value 11"],
          ["12", "Value 12"],
          ["13", "Value 13"],
          ["14", "Value 14"],
          ["15", "Value 15"],
          ["16", "Value 16"],
          ["17", "Value 17"],
          ["18", "Value 18"],
          ["19", "Value 19"],
          ["20", "Value 20"],
          ["21", "Value 21"],
          ["22", "Value 22"],
          ["23", "Value 23"],
          ["24", "Value 24"],
          ["25", "Value 25"],
          ["26", "Value 26"]
        ]
      },
      {
        "name": "Data Interpretation",
        "data": [
          ["1", "Value 1"],
          ["2", "Value 2"],
          ["3", "Value 3"],
          ["4", "Value 4"],
          ["5", "Value 5"],
          ["6", "Value 6"],
          ["7", "Value 7"],
          ["8", "Value 8"],
          ["9", "Value 9"],
          ["10", "Value 10"],
          ["11", "Value 11"],
          ["12", "Value 12"],
          ["13", "Value 13"],
          ["14", "Value 14"],
          ["15", "Value 15"],
          ["16", "Value 16"],
          ["17", "Value 17"],
          ["18", "Value 18"],
          ["19", "Value 19"],
          ["20", "Value 20"],
          ["21", "Value 21"],
          ["22", "Value 22"],
          ["23", "Value 23"],
          ["24", "Value 24"],
          ["25", "Value 25"],
          ["26", "Value 26"],
          ["27", "Value 27"],
          ["28", "Value 28"],
          ["29", "Value 29"],
          ["30", "Value 30"]
        ]
      }
    ]
  } ;

const TableComponent: React.FC<TableComponentProps> = ({ name, data }) => {
  const chunkSize = 10;
  const chunks = Array(Math.ceil(data.length / chunkSize))
    .fill(null)
    .map((_, index) => data.slice(index * chunkSize, (index + 1) * chunkSize));

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <div className="flex flex-col lg:flex-row lg:gap-20">
        {chunks.map((chunk, i) => (
          <div key={i} className="overflow-x-auto lg:mr-4 mb-6 lg:mb-0">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="bg-blue-500 text-white px-4 py-2 border border-gray-300">Question</th>
                  <th className="bg-blue-500 text-white px-4 py-2 border border-gray-300">Your Answers</th>
                </tr>
              </thead>
              <tbody>
                {chunk.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 text-center">{row[0]}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center cursor-pointer">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

const Tables: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {tablesData.tables.map((table, index) => (
        <TableComponent key={index} name={table.name} data={table.data} />
      ))}
    </div>
  );
};

export default Tables;

