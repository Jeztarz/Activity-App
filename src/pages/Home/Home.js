
import './Home.css'
import Activity from '../Activity/Activity'
import UserProfile from '../../Components/DataProfile/UserProfile';
import RecordActivity from '../../Components/DataProfile/RecordActivity';

const Home = () => {


  return (
    <div className="record-box-main">
      
      <div className='userAndAddTop'>
        <UserProfile />

        <Activity />
      </div>
      
      
        <RecordActivity />
      


    </div>
  )
}
export default Home;