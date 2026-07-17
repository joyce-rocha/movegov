// import info from "../info";
function DashboardCard({ info }) {
  return (
    <div className="card">
      <h3>{info.title}</h3>
      <p>{info.value}</p>
    </div>
  );
}

export default DashboardCard;
