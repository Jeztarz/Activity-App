
import './Home.css'
import Activity from '../Activity/Activity'
import RecordActivity from '../../Components/DataProfile/RecordActivity';
import Profile from '../Profile/Profile';
import Goal from '../../Components/DataProfile/Goal';

const Home = () => {


  return (
    <div className="record-box-main">
      
      <div className='userAndAddTop'>

        <Profile />

        <Activity />
        
      </div>
      
        <Goal />
        <RecordActivity />
      


    </div>
  )
}
export default Home;