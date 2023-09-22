import React from 'react';

const objects: ShapeType[] = [
  {
    width: 100,
    height: 50,
  },
];

export const ShapsList = () => {
  return (
    <div>
      {objects.map((item, idx) => (
        <div
          key={idx}
          style={{
            width: item.width,
            height: item.height,
            border: '1px solid black',
          }}
        ></div>
      ))}
    </div>
  );
};

type ShapeType = { width: number; height: number };
