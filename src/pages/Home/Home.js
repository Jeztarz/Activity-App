
import './Home.css'
import Activity from '../Activity/Activity'
import RecordActivity from '../../Components/DataProfile/RecordActivity';
import Profile from '../Profile/Profile';

const Home = () => {


  return (
    <div className="record-box-main">
      
      <div className='userAndAddTop'>

        <Profile />

        <Activity />
      </div>
      
      
        <RecordActivity />
      


    </div>
  )
}
export default Home;