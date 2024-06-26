type Props = {
  children: string;
  disabled: boolean;
};

export const SquareButton = ({ children, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      style={{
        border: "none",
        backgroundColor: disabled ? "#5a5a5a" : "#343434",
        cursor: disabled ? "default" : "pointer",
        color: "white",
        borderRadius: 2,
        fontSize: 12,
        height: 42,
        width: 120,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
    >
      {children}
    </button>
  );
};
