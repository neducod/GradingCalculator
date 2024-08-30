function addScore() {
    const scoreInput = document.getElementById('score');
    const score = parseFloat(scoreInput.value);
  
    if (!isNaN(score)) {
      const grade = calculateGrade(score);
      const scoresList = document.getElementById('scores-list');
      const gradeClass = getGradeClass(grade);
  
      const scoreItem = document.createElement('div');
      scoreItem.textContent = `Score: ${score} - Grade: ${grade}`;
      scoreItem.classList.add('score-item', gradeClass);
  
      scoresList.appendChild(scoreItem);
      scoreInput.value = '';
    } else {
      alert('Please enter a valid score.');
    }
  }
  
  function calculateGrade(score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 70) {
      return 'B';
    } else if (score >= 50) {
      return 'C';
    } else if (score >= 30) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  function getGradeClass(grade) {
    return `grade-${grade}`;
  }
  


