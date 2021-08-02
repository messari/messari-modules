import React, { memo } from "react";

import { Node } from "../../generated/graphql";
import { BaseRenderer, Column } from "./columns";

interface IProps {
  dense: boolean;
  node: Node;
  rank: number;
  columns: Column[];
}

const Row = ({ dense, node, columns, rank }: IProps) => {
  return (
    <>
      {columns.map(({ Component, hidden, ...column }) => {
        const Renderer = Component || BaseRenderer;
        return hidden ? null : (
          <Renderer
            dense={dense}
            key={column.key}
            node={node}
            rank={rank}
            column={column}
          />
        );
      })}
    </>
  );
};

export default memo(Row);
