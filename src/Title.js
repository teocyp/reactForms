import image from './assets/63141866.jpg';
import './Title.css';

export default function Title() {
  return (
    <div className='container'>
      <img src={image} alt='' />
      <h4>Resume</h4>
    </div>
  );
}
