import { MongoClient } from "mongodb";
import MeetupList from '../components/meetups/MeetupList';
const uri = "mongodb+srv://rohal:rohal@cluster0.2l7kq.mongodb.net/meetups?retryWrites=true&w=majority";
import Head from "next/head";
import { Fragment } from "react";


function HomePage(props) {
   return (
   <Fragment>
       <Head>
           <title>React Meet up</title>
           <meta name="descrition" content="higly reactive app"/>
       </Head>
    <MeetupList meetups={props.meetups}/>    
   </Fragment> 
   )
}


export async function getServerSideProps() {
    // fetch data from an API
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    const newState = meetups.map(meetup =>
        ( {
        id : meetup._id.toString(),
        title:meetup.title,
        address:meetup.address,
        description: meetup.description,
        image:meetup.image
        })
    );
    console.log(newState);
    return {
        props: {
            meetups: newState
        }
    }
}
export default HomePage;
