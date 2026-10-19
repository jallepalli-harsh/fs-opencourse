const Total = ({ parts }) => {
  return (
    <b>
      total of {parts.reduce((acc, { exercises }) => acc + exercises, 0)}{" "}
      exercises
    </b>
  );
};

export default Total;
