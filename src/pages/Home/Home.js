
import './Home.css'
import Activity from '../Activity/Activity'
import UserProfile from '../../Components/DataProfile/UserProfile';
import Record from '../../Components/DataProfile/RecordActivity';

const Home = () => {
  return (
    <div className='container userAndAdd'>

      <div className='record-box-main userAndAddTop'>
        <UserProfile />

        <Activity />
      </div>
      

        <Record />





    </div>
  )
}
export default Home;