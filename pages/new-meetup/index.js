import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetUpPage() {
    const router = useRouter();

    async function addMeetUpHandler(eneteredMeetUpData) {
        console.log(eneteredMeetUpData)
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(eneteredMeetUpData),
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin":"*",
                'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                'Access-Control-Allow-Credentials': true
            }
        });
        const data = await response.json();
        console.log(data);
        //router.push("/"); // to add to stack 
        router.replace('/'); // for replacement
    }
    return <NewMeetupForm onAddMeetup = {addMeetUpHandler}/>
}

export default NewMeetUpPage;