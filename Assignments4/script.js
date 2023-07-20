const bmiForm = document.getElementById('bmiForm');
const resultDiv = document.getElementById('result');


bmiForm.addEventListener('submit', function(event) {
  event.preventDefault();


  // Get form values
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters


  // Check if weight and height are valid numbers
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.innerHTML = "<p>Please enter valid weight and height values.</p>";
    return;
  }


  // Calculate BMI
  const bmi = weight / (height * height);


  // Determine BMI category
  let category = "";
  if (bmi < 18.5) {
    category = "kekurangan berat badan: Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menambah berat badan hingga batas normal.";
  } else if (bmi < 25) {
    category = "Ideal: Jika BMI Anda berada dalam kategori ini maka Anda memiliki berat badan yang sehat.";
  } else if (bmi < 30) {
    category = "Kelebihan berat badan: Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
  } else {
    category = "Obesitas: Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi berat badan hingga batas normal.";
  }


  // Display the result
  resultDiv.innerHTML = `<p>Hasil: ${bmi.toFixed(2)}</p><p>Kategori: ${category}</p>`;
});

