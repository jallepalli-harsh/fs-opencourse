import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(({ name, exercises, id }) => (
        <Part key={id} part={name} exercise={exercises} />
      ))}
    </>
  );
};

export default Content;
