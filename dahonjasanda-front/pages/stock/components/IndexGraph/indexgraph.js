import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const IndexGraph = ({ data }) => {
  const lastValue = data[data.length - 1];
  const prevValue = data[data.length - 2];
  const difference = lastValue - prevValue;

  const color = difference < 0 ? "blue" : "red";

  return (
      <Sparklines data={data}>
        <SparklinesLine color={color} />
      </Sparklines>
  );
}

export default IndexGraph;