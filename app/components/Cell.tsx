import { Dispatch, SetStateAction, MouseEvent } from "react";

type CellProps = {
  go: string;
  id: number;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  winningMsg: string;
};

const Cell = ({
  go,
  setGo,
  id,
  cells,
  setCells,
  cell,
  winningMsg,
}: CellProps) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (winningMsg) {
      return;
    }

    const notTaken = !cells[id];

    if (notTaken) {
      if (go === "circle") {
        handleCellChange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };

  const handleCellChange = (cellToChange: string) => {
    let copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  };

  return (
    <div className="square" onClick={handleClick}>
      <div className={cell}>{cell && (cell === "circle" ? "O" : "X")}</div>
    </div>
  );
};

export default Cell;
