import image from '/Users/james04nesbitt/portfolio/src/image/profile.jpg';

const imgstyles = {width: '10em'};

export default function Profile(){
    return <img src = {image} alt='profile' style={imgstyles} className='profile'/>;
}