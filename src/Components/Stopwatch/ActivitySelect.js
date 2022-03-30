import './Activity.css';
import ImageSlider from '../ImagesData/ImageSlider';
import { ImagesData } from '../ImagesData/ImagesData';


function ActivitySelect() {
  return <ImageSlider slides={ImagesData} />;
  
}

export default ActivitySelect;
