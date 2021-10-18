import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  const router = useRouter();

  async function addMeetupHandler(enteredData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.replace("/");
  }
  return (
    <>
      <Head>
        <title>Add new Meetup</title>
        <meta name="description" content="React course about NextJs" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
