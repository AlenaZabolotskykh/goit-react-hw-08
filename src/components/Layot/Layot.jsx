import AppBar from "../AppBar/AppBar";
export default function Layot({ children }) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}
