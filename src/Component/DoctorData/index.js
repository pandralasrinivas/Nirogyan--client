const DOCTORS_API_URL = 'https://nirogyan-vus0.onrender.com/api/schedule'; // Change to your actual API endpoint

const doctorsData = async () => {
  const response = await fetch(DOCTORS_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch doctors data');
  }
  const data = await response.json();
  return data;
};

export default doctorsData;