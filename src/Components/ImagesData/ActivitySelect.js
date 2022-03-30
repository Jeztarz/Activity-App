import '../../pages/Activity/Activity.css';
import ImageSlider from './ImageSlider';
import { ImagesData } from './ImagesData';


function ActivitySelect() {
  return <ImageSlider slides={ImagesData} />;
  
}

export default ActivitySelect;
