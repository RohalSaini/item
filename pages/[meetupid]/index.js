import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import { MongoClient,ObjectId } from "mongodb";
import { async } from "regenerator-runtime";

const uri = "mongodb+srv://rohal:rohal@cluster0.2l7kq.mongodb.net/meetups?retryWrites=true&w=majority";


function MeetUpDetails(props) {
 return (
      <MeetUpDetail
         image= {props.meetupData.image}
         title = {props.meetupData.title}
         description={props.meetupData.description}
         address= {props.meetupData.address}/>
 )
}
export  async function getServerSideProps(context) {
    const meetupId = context.params.meetupid;
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId)})
    client.close();
    //console.log(meetupId)
    return{
        props: {
            meetupData:  {
                id: meetup._id.toString(),
                title: meetup.title,
                description: meetup.description,
                address: meetup.address,
                image: meetup.image
            }
        }
    }
}

// export async function getStaticPaths() {
//     const client = await MongoClient.connect(uri);
//     const db = client.db();

//     const meetupsCollection = db.collection('meetups');

//     const meetups = await meetupsCollection.find({}).toArray()
//     client.close();
//     console.log("meetups up path ");
//     console.log("++++++++++++++")
//     console.log(meetups)
//     console.log("++++++++++++++++++++")
//     return {
//         paths: meetups.map(meetup => ({params: {
//             meetupid: meetup._id.toString()
//         }})),
//         fallback: true
//     }
// }


export default MeetUpDetails;