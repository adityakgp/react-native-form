import axios from 'axios';
export default function saveData(age, address) {
  const data = { age, address };
  axios
    .post('http://localhost:5000/save', data, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then(() => console.log('Data saved successfully'))
    .catch((error) => console.error(error));
}
