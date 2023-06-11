export interface Props {
  children: React.ReactNode;
}

const Board: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-amber-100 w-screen h-screen flex items-center justify-center">
        <div className="w-[90%] h-[90%]">{children}</div>
      </div>
    </>
  );
};

export default Board;
