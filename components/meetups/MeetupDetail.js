import classes from "./MeetUpDetail.module.css";

export default function MeetupDetail(props) {
  return (
    <section className={classes.container}>
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
