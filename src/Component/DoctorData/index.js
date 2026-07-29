const DOCTORS_API_URL = 'http://express-beanstalk-app-dev.eba-pr3hdu2b.ap-south-1.elasticbeanstalk.com'; // Change to your actual API endpoint

const doctorsData = async () => {
  const response = await fetch(DOCTORS_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch doctors data');
  }
  const data = await response.json();
  return data;
};

export default doctorsData;
