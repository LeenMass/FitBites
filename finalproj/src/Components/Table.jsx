import React from "react";

const Table = (props) => {
  return (
    <div>
      <div>
        {props.columns.map((e) => {
          return (
            <h3
              style={{
                width: `${100 / props.columns.length}%`,
              }}
            >
              {e.title}
            </h3>
          );
        })}
      </div>
      <div>
        {props.source.map((data, index) => {
          let color;
          if (index % 2 == 0) {
            color = "#141432";
          } else {
            color = "#26264F";
          }
          return (
            <div>
              <div>
                {props.columns.map((e) => {
                  return (
                    <h3
                      style={{
                        width: `${100 / props.columns.length}%`,
                      }}
                    >
                      {data[e.dataIndex]}
                    </h3>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
