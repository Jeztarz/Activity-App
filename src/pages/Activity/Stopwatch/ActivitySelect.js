import './Activity.css';
import ImageSlider from '../../../Components/ImagesData/ImageSlider';
import { ImagesData } from '../../../Components/ImagesData/ImagesData';


function ActivitySelect() {
  return <ImageSlider slides={ImagesData} />;
  
}

export default ActivitySelect;
